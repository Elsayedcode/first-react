import Header from '../comp/header';
import Footer from '../comp/footer';
import MainComponant from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home page</title>
        <meta name="discrption" content="HOMEEEEEEE" />
      </Helmet>
    <Header/>

<MainComponant pageName="Home page"/>

<Footer/>

</>
  );
}

export default Home;
