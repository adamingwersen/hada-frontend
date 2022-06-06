import "./App.css";

import React from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { SignUp } from "./Pages/SignUp";

const gClientId =
  "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
// const CLIENT_ID =
//   "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";

const client = new ApolloClient({
  uri: "http://localhost:5678/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GoogleOAuthProvider clientId={gClientId}>
        <SignUp /> {/* This will eventually point to Routes */}
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
}

export default App;
