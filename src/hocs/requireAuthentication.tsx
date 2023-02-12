import { securityManager } from "base/dependencies/managers";
import { LoginPage } from "base/dependencies/pages";
import AppContext from "context-api/contexts/AppContext";
import { ReactElement, useEffect } from "react";

const SecureComponent = ({ setPath }: any) => {
  useEffect(() => {
    setPath("/login");
  });

  return <LoginPage />;
};

const requireAuthentication = (Component: () => ReactElement) => {
  return (props: any) => {
    const session = securityManager.getSession();
    if (session != null && session != undefined) {
      return <Component {...props} />;
    } else {
      return (
        <AppContext.Consumer>
          {({ setPath }) => <SecureComponent setPath={setPath} />}
        </AppContext.Consumer>
      );
    }
  };
};

export default requireAuthentication;
