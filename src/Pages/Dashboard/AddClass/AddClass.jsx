import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddClass = () => {
  const { user } = useContext(AuthContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  // get the imgHostingSite key from the local environment
  const imgHostingSite = import.meta.env.VITE_IMG_API_KEY
  // image hosting url
  const hostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingSite}`

  // post uploaded image to the imgBB hosting site
  const onSubmit = data => {
    console.log('form data', data)

    // create a new FormData instance
    const formData = new FormData()
    formData.append('image', data.image[0])

    // host image to the imgBB
    fetch(hostingURL, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url
          //  destructure form info from the original form data
          const { className, instructorName, instructorEmail, availableSeats, price } = data;
          //  put all data into the 'newItem' object
          const newClass = { className, instructorName, instructorEmail, availableSeats, price: parseFloat(price), image: imgURL }

          // save new class data to the database
          axios.post('http://localhost:5000/addClass', { newClass: `${newClass}` }) // Enclosed template literal within backticks
            .then(data => {
              if (data.data.insertedId) {
                Swal.fire({
                  title: 'Success!',
                  text: 'New Class Successfully Added, and Soon will be reviewed by the ADMIN',
                  icon: 'success',
                  confirmButtonText: 'Thank you'
                })
              }
            })
        }

      })
  }


  return (
    <div>
      <p className="text-5xl font-bold text-yellow-600 mb-10 text-center">Add A Class You Want To Teach</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* class name */}
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Class Title</span>
            </label>

            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full md:w-[500px]" /> */}
            <input className="p-3" type="text" placeholder="class title" {...register("className", { required: true, maxLength: 80 })} />
          </div>

          {/* instructor name */}
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Instructor</span>
            </label>

            <input className="p-3" type="text" defaultValue={user?.displayName} {...register("instructorName", { required: true, maxLength: 80 })} />
          </div>

          {/* instructor email */}
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Email</span>
            </label>

            <input className="p-3" type="text" defaultValue={user?.email} {...register("instructorEmail", { required: true, maxLength: 80 })} />
          </div>

          {/* available seats */}
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Available Seats</span>
            </label>

            <input className="p-3" type="number" placeholder="available seats" {...register("availableSeats", { required: true, maxLength: 80 })} />
          </div>

          {/* price of the class */}
          <div className="form-control w-full max-w-xl mb-5">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Price</span>
            </label>

            <input className="p-3" type="text" placeholder="$price" {...register("price", { required: true, maxLength: 80 })} />
          </div>

          <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />

          <div className="mt-5">
            <button className="btn btn-primary text-white font-bold btn-lg"> Add Class
            </button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default AddClass;