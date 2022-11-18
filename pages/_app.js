import '../styles/globals.scss'
import {ModalProvider} from '../providers/ModalProvider.js';
import {AppProvider} from '../providers/AppProvider.js';
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: `https://www.scottforba.website/graphql`,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  console.log(process.env.REACT_APP_WP_API_ENDPOINT);
  return (
    <AppProvider>
      <ModalProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ModalProvider>
    </AppProvider>
  );
}

export default MyApp
