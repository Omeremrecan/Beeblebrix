import { Button, PageContainer, Textbox } from "base/dependencies/components";
import { securityManager } from "base/dependencies/managers";
import useTranslation from "hooks/useTranslation";
import React, { useState } from "react";

export const LoginPage = () => {
  const [translate] = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <PageContainer>
      <Textbox value={username} onChange={setUsername} />
      <Textbox type="password" value={password} onChange={setPassword} />
      <Button
        title={translate("LOGIN")}
        onClick={async () => {
          const result = await securityManager.logIn(username, password);
          if (result.success) {
            alert("success");
          } else {
            alert("failed");
          }
        }}
      />
    </PageContainer>
  );
};
