import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../../Instructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PowerPlay | Home</title>
      </Helmet>

      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <Reviews></Reviews>



    </div >
  );
};

export default Home;