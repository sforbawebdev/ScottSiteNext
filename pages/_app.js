import '../styles/globals.scss'
import Head  from 'next/head';
// import Script from 'next/script';
import {ModalProvider} from '../providers/ModalProvider.js';
import {AppProvider} from '../providers/AppProvider.js';
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_WP_ENDPOINT}/graphql`,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  console.log(client);
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
