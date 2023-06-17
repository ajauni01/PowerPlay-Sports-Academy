import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar";
import Dashboard from "../Dashboard/Dashboard";


const DashBoardHolder = () => {
  return (
    <div className="bg-base-200">
      <NavBar></NavBar>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
};

export default DashBoardHolder;