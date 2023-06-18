import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const ManageUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // get all the registered users data from the backend
    axios.get('https://sports2-orcin.vercel.app/allUsers')
      .then(data => setRegisteredUsers(data.data));
  }, [registeredUsers, userRole]);

  // function to make a particular user an admin
  const handleMakeAdmin = id => {
    fetch(`https://sports2-orcin.vercel.app/allUsers/admin/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          // update the user role to re-render
          setUserRole('admin')
          // sweetalert
          Swal.fire({
            title: 'Success!',
            text: 'Admin Successfully Added',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })
  }
  // function to make a particular user an instructor
  const handleMakeInstructor = id => {
    fetch(`https://sports2-orcin.vercel.app/allUsers/instructor/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          // update the user role to re-render
          setUserRole('instructor')
          // sweetalert
          Swal.fire({
            title: 'Success!',
            text: 'Instructor Successfully Added',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })
  }


  return (
    <div className="w-full md:w-[90%] md bg-base-300 p-32">
      <p className="text-6xl text-center text-yellow-600 font-bold underline mb-14">Manage Users</p>

      {/* order review table */}
      <div className="overflow-x-auto ">
        <table className="table ms-24">
          {/* head */}
          <thead className=" text-2xl font-bold" >
            <tr >
              <th> </th>
              <th >Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-[15px] font-semibold">
            {
              registeredUsers.map((row, index) =>
                <tr key={row._id}>
                  <th>{index + 1}</th>

                  <td>
                    {row.name}
                    <br />
                  </td>

                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                      {/* make admin conditional rendering */}
                      <div className="w-1/3">
                        {row.role === 'admin' ? (
                          <button className="btn btn-active" disabled style={{ backgroundColor: 'red' }}>
                            <span className="text-white">Admin</span>
                          </button>
                        ) : (
                          <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-active" style={{ backgroundColor: 'green' }}>
                            <span className="text-white">Make Admin</span>
                          </button>
                        )}

                      </div>
                      {/* make instructor conditional rendering */}

                      <div className="w-1/3">
                        {row.role === 'instructor' ? (
                          <button className="btn btn-active" disabled style={{ backgroundColor: 'red' }}>
                            <span className="text-white">Instructor</span>
                          </button>
                        ) : (
                          <button onClick={() => handleMakeInstructor(row._id)} className="btn btn-active" style={{ backgroundColor: 'green' }}>
                            <span className="text-white">Make Instructor</span>

                          </button>
                        )}
                      </div>

                    </div>
                  </td>
                </tr>,
                {/* table row-ends */ })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;