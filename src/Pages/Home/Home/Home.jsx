import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructorCard from "../../Instructors/PopularInstructorCard";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PowerPlay | Home</title>
      </Helmet>

      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructorCard></PopularInstructorCard>


    </div >
  );
};

export default Home;