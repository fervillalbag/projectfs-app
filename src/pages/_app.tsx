import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import "@/styles/index.css";
import "@/styles/globals.css";
import client from "@/config/apollo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
