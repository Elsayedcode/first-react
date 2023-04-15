import Header from '../comp/header';
import Footer from '../comp/footer';
import MainComponant from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';

const Javascript = () => {
  return (
    <>
  <Helmet>
        <title>Javascript page</title>
        <meta name="discrption" content="JavaScripttttttttt" />
      </Helmet>
<Header/>
<MainComponant pageName="Javascript page"/>
<Footer/>
</>
  );
}

export default Javascript;
