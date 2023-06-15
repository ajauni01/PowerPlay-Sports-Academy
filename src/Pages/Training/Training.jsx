import { Helmet } from "react-helmet-async";
import NavBar from "../Shared/NavBar";


const Training = () => {
  return (
    <div>
      <Helmet>
        <title>PowerPlay|Training</title>
      </Helmet>
      <NavBar></NavBar>
      <p>Training Page</p>

    </div>
  );
};

export default Training;