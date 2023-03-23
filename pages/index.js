import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import queries from '../utilities/queries';
import sleep from "../utilities/sleep";
import Error from '../components/Error';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Views from "./views";
import { useQuery} from '@apollo/client';
import { loadReCaptcha } from 'react-recaptcha-v3'

const App = () => {

  const hideLoader = () => {
    if (typeof window !== "undefined") {
      document.querySelector(".site-loader").className += " site-loader--loaded";
    }
  }
  useEffect(() => {
    loadReCaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY,() => {console.log("Recaptcha loaded")});
    sleep(3000).then(() => {
      hideLoader();
    });
  })

  const ROUTE_QUERY = queries.ROUTE_QUERY();
  const { loading, error, data } = useQuery(ROUTE_QUERY);

  if(loading) {
    return (
      <Loading />
    );
  }
  if(error) {
    return (
      <Error />
    );
  }

  const page_data =  data?.pages?.nodes;

  return (
    <>
        <NextSeo
          title="Scott Forba - Software Engineer"
          description="Home page description of the page"
        />
      <div className="app">
        <Header />
        {
          page_data && page_data.map((page, index)=> {
            const title = page.title.toLowerCase();
              return (
                <Views page={title} key={index} />
              );
          })
        }
        <Footer />
        <Navigation pages={page_data}/>
        <div id="modal-root"/>
      </div>        
    </>
  );
}

export default App;
