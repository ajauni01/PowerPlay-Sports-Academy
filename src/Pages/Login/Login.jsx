import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {

  const { logIn } = useContext(AuthContext)
  const [error, setError] = useState()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  // social login or signUp option
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user)
        // reset the login form
        reset()
        Swal.fire({
          title: 'Success!',
          text: 'Hurrah!Login Successful',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // navigate the user to the home page
        navigate('/')
      })
      .catch(error => setError(error.message))
  }


  const onSubmit = data => {
    logIn(data.email, data.password)
      .then(result => {
        console.log('current user', result.user)
        // reset the login form
        reset()
        Swal.fire({
          title: 'Success!',
          text: 'Hurrah!Login Successful',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // navigate the user to the home page
        navigate('/')
      })
      .catch(error => setError(error.message))
  };


  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 font-semi-bold">PowerPlay Sports Academy is a renowned sports facility dedicated to providing comprehensive training and development programs for athletes of all ages and skill levels. With state-of-the-art facilities and expert coaches, they offer a wide range of sports programs designed to enhance performance, promote physical fitness, and foster a love for sports.</p>
          </div>

          <div className="card flex-shrink-0 w-full md:w-[500px]  shadow-2xl bg-base-100">

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            < form onSubmit={handleSubmit(onSubmit)} className="card-body">

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

                <input type="password" placeholder="password" {...register("password", { required: true })} name="password" className="input input-bordered" />
                {errors.email && <span className="text-red-700"> password is required</span>}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {/* form-ends */}

            {/* social login option */}
            <div className="divider font-bold">OR</div>
            <button onClick={handleGoogleSignIn}> <FaGoogle className="w-full mx-auto mb-15 text-5xl font-bold text-blue-800" /></button>
            <p className="text-center mb-3 mt-5 font-semibold text-xl">Do not have an account? <Link to="/signUp"><button className="btn btn-link">SignUp</button></Link></p>

            <p className="text-red-700 mt-5 text-xl font-bold text-center mb-5">{error}</p>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Login;