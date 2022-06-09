import "./App.css";

import React from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { GOOGLE_CLIENT_ID } from "./constants/constants-to-move-to-env";
import { SignUp } from "./Pages/SignUp";

const client = new ApolloClient({
  uri: "http://localhost:5678/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <SignUp /> {/* This will eventually point to Routes */}
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
}

export default App;
