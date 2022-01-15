// apollo
import { ApolloProvider } from '@apollo/client';

// next
import type { AppProps } from 'next/app';

// graphql
import { client } from '@graphql/client';

// styles
// eslint-disable-next-line import/no-unresolved
import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
