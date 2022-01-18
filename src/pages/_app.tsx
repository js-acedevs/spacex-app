// apollo
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

// mui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// next

// graphql
import { client } from '@graphql/client';

// styles
import { theme } from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

export default MyApp;
