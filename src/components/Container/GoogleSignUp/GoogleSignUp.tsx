import React from "react";

import { Button } from "@mantine/core";
import { useGoogleLogin } from "@react-oauth/google";

import { TokenResponse } from "../../../constants/google-auth.types";

type Props = {
  setAccessToken: (token: string) => void;
};

export const GoogleSignUp = ({ setAccessToken }: Props) => {
  const onLoginSuccess = (tokenResponse: TokenResponse) => {
    console.log(tokenResponse);
    console.log(tokenResponse.access_token);
    const accessToken = tokenResponse.access_token;
    setAccessToken(accessToken);
    // oauth2Client.setCredentials(tokenResponse);
  };

  const login = useGoogleLogin({
    onSuccess: onLoginSuccess,
    flow: "implicit",
    scope: "https://www.googleapis.com/auth/admin.directory.user",
  });

  return (
    <Button variant="filled" onClick={() => login()}>
      Sign up with Google
    </Button>
  );
};
