// apollo
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// config
import { GQL_API_URL } from '@config/index';

// cache
const cache = new InMemoryCache();

// httpLink
const link = createHttpLink({
  uri: GQL_API_URL,
});

// cilent
export const client = new ApolloClient({
  cache,
  link,
});
