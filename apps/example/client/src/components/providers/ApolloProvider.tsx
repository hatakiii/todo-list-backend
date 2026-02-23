'use client';

import { PropsWithChildren } from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client/react';

const uri = process.env.API_URL ?? 'http://localhost:3000/api/graphql';

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri,
    }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
