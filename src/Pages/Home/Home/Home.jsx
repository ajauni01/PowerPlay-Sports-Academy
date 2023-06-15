import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PowerPlay | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>

    </div>
  );
};

export default Home;