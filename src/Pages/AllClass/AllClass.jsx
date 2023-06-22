import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AllClass = ({ cls }) => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleSelect = () => {
    if (!user?.email) {
      logOut()
        .then(() => {
          Swal.fire({
            title: 'Error!',
            text: 'Please login to select this class',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          // navigate the user to the home page after a successful logout
          navigate('/login')
        })
    }
  }

  const { image, name, students, instructor, price, seats } = cls;
  return (
    <div className={`card w-96 ${seats === 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl`}>
      <figure><img className="h-100px md:h-80" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h2 className="card-title"> Instructor:
          {instructor}
          <div className="badge badge-primary">Professional</div>
        </h2>
        <p className="text-xl font-bold">Total Students: {students}</p>
        <p className="text-2xl font-bold">Price: ${price}</p>
        <p className="text-xl font-semibold">Available Seats: {seats}</p>

        <button onClick={handleSelect} className="btn btn-secondary">Select</button>

      </div>
    </div>
  );
};

export default AllClass;
