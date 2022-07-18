import React, { useState } from "react";

import { Container } from "@mantine/core";

import { DisplayOrganisation } from "../components/Container/DisplayOrganisation/DisplayOrganisation";
import { GoogleSignUp } from "../components/Container/GoogleSignUp/GoogleSignUp";

// const CLIENT_ID =
//   "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";

export const SignUp = () => {
  const [userToken, setUserToken] = useState<string>();
  const [specificUserData, setSpecificUserData] = useState<any>("None");

  const getUserList = async (token: string) => {
    await fetch(
      "https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  const getSpecificUser = async (token: string, email: string) => {
    await fetch(
      `https://admin.googleapis.com/admin/directory/v1/users/${email}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .then(function (data) {
        setSpecificUserData(data);
      });
  };

  return (
    <div className="App">
      <Container>
        <GoogleSignUp setAccessToken={setUserToken} />
      </Container>
      <DisplayOrganisation />
    </div>
  );
};
