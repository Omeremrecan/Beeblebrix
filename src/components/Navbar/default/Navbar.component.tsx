import { Button } from "base/dependencies/components";
import AppContext from "context-api/contexts/AppContext";
import useTranslation from "hooks/useTranslation";
import "./Navbar.style.scss";

export const Navbar = () => {
  const [translate] = useTranslation();

  return (
    <nav className="nav-bar">
      <div className="nav-bar__left">
        <img src="img/text-logo.png" />
      </div>
      <div className="nav-bar__right">
        <AppContext.Consumer>
          {({ setPath }) => (
            <Button
              title={translate("SEARCH")}
              onClick={() => {setPath("/search")}}
            />
          )}
        </AppContext.Consumer>
        <Button type="outlined" title={translate("LOGOUT")} />
      </div>
    </nav>
  );
};
