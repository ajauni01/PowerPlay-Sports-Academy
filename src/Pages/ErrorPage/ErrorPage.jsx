



import { Link } from "react-router-dom";
import errorImg from "../../../assets/errorImage/errorPage.jpg"

const ErrorPage = () => {
  return (
    <div className="w-[80%] ms-[40%] mt-36" >
      <img src={errorImg} alt="" />
      <Link to="/"><button className="btn btn-primary">Go Home</button></Link>

    </div>
  );
};

export default ErrorPage;