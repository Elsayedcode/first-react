import Header from '../comp/header';
import Footer from '../comp/footer';
import MainComponant from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>
    <Helmet>
    <title>Css1 page</title>
        <meta name="discrption" content="CSSSSSSSSSSS" />
      </Helmet>
<Header/>
<MainComponant pageName="Css page"/>
<Footer/>
</>
  );
}

export default Css;
