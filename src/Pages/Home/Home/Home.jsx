import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PowerPlay | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>

    </div>
  );
};

export default Home;