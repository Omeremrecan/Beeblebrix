import axios from "axios";
import { Configs } from "base/entities/Configs";
import { Result } from "base/entities/Result";
import { Session } from "base/entities/Session";
import { User } from "base/entities/User";

export class SecurityManager {
  private configs: Configs;

  constructor(configs: Configs) {
    this.configs = configs;
  }

  async logIn(username: string, password: string): Promise<Result<Session>> {
    return axios
      .post(`${this.configs.apiUrl}/security/login`, { username, password })
      .then((res) => {
        if (res.data.success) {
          const session: Session = {
            user: res.data.data,
          };
          this.setSession(session);
          return {
            success: true,
            data: session,
          };
        } else {
          return {
            success: false,
          };
        }
      });
  }

  getSession = (): Session | null => {
    const json = localStorage.getItem(this.configs.appName);
    if (json != null && json != undefined && json != "") {
      return JSON.parse(json);
    } else {
      return null;
    }
  };

  setSession = (session: Session) => {
    localStorage.setItem(this.configs.appName, JSON.stringify(session));
  };

  removeSession = () => {
    localStorage.removeItem(this.configs.appName);
  };
}
