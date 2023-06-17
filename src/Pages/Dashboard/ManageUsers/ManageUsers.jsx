import axios from "axios";
import { useEffect, useState } from "react";


const ManageUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // // get all the registered users data from the backend
    axios.get('http://localhost:5000/allUsers')
      .then(data => setRegisteredUsers(data.data))
  })

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
                      <button className="btn btn-active">Make Admin</button>
                      <button className="btn">Make Instructor</button>

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