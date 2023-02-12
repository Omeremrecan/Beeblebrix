import { Button } from "base/dependencies/components";
import AppContext from "context-api/contexts/AppContext";
import useTranslation from "hooks/useTranslation";
import "./Navbar.style.scss";

export const Navbar = () => {
  const [translate] = useTranslation();

  return (
    <AppContext.Consumer>
      {({ setPath }) => (
        <nav className="nav-bar">
          <div className="nav-bar__left">
            <img src="img/text-logo.png" onClick={() => {
              setPath("/");
            }} />
          </div>
          <div className="nav-bar__right">
            <Button
              title={translate("SEARCH")}
              onClick={() => {
                setPath("/search");
              }}
            />

            <Button type="outlined" title={translate("LOGOUT")} />
          </div>
        </nav>
      )}
    </AppContext.Consumer>
  );
};
