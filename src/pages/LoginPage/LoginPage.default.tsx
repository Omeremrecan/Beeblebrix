import { Button, PageContainer, Textbox } from "base/dependencies/components";
import { dialogManager, securityManager } from "base/dependencies/managers";
import AppContext from "context-api/contexts/AppContext";
import useTranslation from "hooks/useTranslation";
import React, { useState } from "react";
import "./LoginPage.default.style.scss";

export const LoginPage = () => {
  const [translate] = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (redirect: () => void) => {
    const result = await securityManager.logIn(username, password);
    if (result.success) {
      redirect();
    } else {
      dialogManager.showErrorMessage(
        translate("FAILED"),
        translate("USERNAME_OR_PASSWORD_IS_WRONG")
      );
    }
  };

  return (
    <PageContainer>
      <div className="login-page">
        <div className="login-page__container">
          <img src="/img/text-logo.png" />
          <div className="login-page__container--form">
            <AppContext.Consumer>
              {({ setPath }) => (
                <>
                  <Textbox
                    value={username}
                    onChange={setUsername}
                    onEnter={() => {
                      login(() => {
                        setPath("/");
                      });
                    }}
                  />
                  <Textbox
                    type="password"
                    value={password}
                    onChange={setPassword}
                    onEnter={() => {
                      login(() => {
                        setPath("/");
                      });
                    }}
                  />
                  <Button
                    title={translate("LOGIN")}
                    onClick={() => {
                      login(() => {
                        setPath("/");
                      });
                    }}
                  />
                </>
              )}
            </AppContext.Consumer>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
