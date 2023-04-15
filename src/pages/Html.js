import Header from '../comp/header';
import Footer from '../comp/footer'
import MainComponant from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';


const Html = () => {
  return (
    <>
    <Helmet>
        <title>Html page</title>
        <meta name="discrption" content="HTMLLLLLLLLLL" />
      </Helmet>
<Header/>
<MainComponant pageName="Html page"/>
<Footer/>
</>
  );
}

export default Html;
