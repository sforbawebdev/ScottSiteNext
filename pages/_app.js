import '../styles/globals.scss'
import Head  from 'next/head';
import Script from 'next/script';
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
  return (
      <AppProvider>
        <Head>
          <meta charset="utf-8" />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SWM9GDWS46" />
            <Script src="/public/gtag-script.js" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            {/* <style>
                .site-loader {
                    background-color: #141414;
                    opacity: 1;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    top: 0;
                    z-index: 1000;
                    visibility: visible;
                    overflow: hidden;
                    width: 100vw;
            
                }
                .site-loader__content {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow-x: hidden;

                }
                .site-loader__logo {
                    height: 25vw;
                    opacity: 1;
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    width: 25vw;
                    animation: logo 0.5s 2.5s linear forwards;
                }
                .site-loader__logo path.s{
                    opacity: 0;
                    animation: build_s 0.25s 0.5s ease forwards;
                }
                .site-loader__logo path.f{
                    opacity: 0;
                    animation: build_f 0.25s 0.75s linear forwards;
                }
                .site-loader__logo line{
                    transform: translateX(-100px);
                    animation: build_line  0.5s linear forwards;
                }
                @keyframes build_s {
                    to {
                    opacity: 1;
                    }
                }
                @keyframes build_f {
                    to {
                    opacity: 1;
                    }
                }
                @keyframes build_line {
                    0% {
                    transform: translateY(400px) translateX(-400px);
                    }
                    100% {
                    transform: translateY(0px) translateX(0px);
                    }
                }
                @keyframes logo {
                    to {
                    width: 60px;
                    height: 60px;
                    top: 27px;
                    left: 5.5vw;
                    transform: translate(0%, 0%);
                    }
                }
            </style> */}
            <title>Scott Forba - Software Engineer</title>
          </Head>        
        <ModalProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ModalProvider>
      </AppProvider>
  );
}

export default MyApp
