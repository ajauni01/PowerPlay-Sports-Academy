import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext)
  const [error, setError] = useState()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data.name)
    // call the createUserWithEmailPassword
    // updateProfile
    // inside the updateProfile function, call the 'users' api to save user name and password (POST method)
    // const user = { name: data.name, email: data.email, password: data.password }

    if (data.password !== data.confirmPassword) {
      setError('Password does not match')
      return
    }

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log('new user', loggedUser)
        // call the updateUserProfile function
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log('user profile info updated')
            // reset the form
            reset()
            // logout the user after a successful registration
            Swal.fire({
              title: 'Success!',
              text: 'Hurrah! Registration & Update Profile are Successful. Please Login to Continue...',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            logOut()
              .then(() => {

              })
              .catch(error => console.error(error.message))
            // navigate the user to the login page upon a successful registration
            navigate('/login')

          })
          .catch(error => {
            console.log('error', error);
            setError(error.message); // Set the error state using setError
          });
      })
      .catch(error => {
        console.log('error', error);
        setError(error.message); // Set the error state using setError
      });


    // fetch('http://localhost:5000/users', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.insertedId) {

    //     }
    //   })

    // reset() 
    // sweet alert
    // force logout user
    // navigate to login again

  };


  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>

          <div className="card flex-shrink-0 w-full md:w-[500px]  shadow-2xl bg-base-100">

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            < form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* user name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {/* errors will return when field validation fails  */}
                {errors.name && <span className="text-red-700">name is required</span>}
              </div>

              {/* user email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input type="text" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-700">email is required</span>}
              </div>

              {/* user password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*?[A-Z])(?=.*?[^a-zA-Z0-9]).{6,}$/,
                })}

                  placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-800" role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-800" role="alert">password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-800" role="alert">password must be less than or equal to 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-800" role="alert">password must have at least one uppercase, and an one special character</p>}
              </div>

              {/* confirm password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>

                <input type="password" placeholder="confirm password" {...register("confirmPassword", { required: true })} name="confirmPassword" className="input input-bordered" />
                {errors.email && <span className="text-red-700">please confirm your password</span>}
              </div>

              {/* users photo url */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>

                <input type="text" placeholder="photo url" {...register("photoUrl", { required: true })} name="photoUrl" className="input input-bordered" />
                {errors.photoUrl && <span className="text-red-700"> photoUrl is required</span>}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className="text-red-700 mt-5 text-xl font-bold">{error}</p>
            </form>


          </div>

        </div>
      </div>

    </div >
  );
};

export default SignUp;