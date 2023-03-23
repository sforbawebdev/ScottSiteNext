import '../styles/globals.scss'
import Script from 'next/script';
import {ModalProvider} from '../providers/ModalProvider.js';
import {AppProvider} from '../providers/AppProvider.js';
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_WP_ENDPOINT}/graphql`,
  credentials: 'include',
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GTAG}', {
          page_path: window.location.pathname,
          });
        `,
        }}
      />    
      <AppProvider>        
      <ModalProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ModalProvider>
    </AppProvider>    
    </>   
  );
}

export default MyApp
