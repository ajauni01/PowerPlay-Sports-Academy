import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')

  // function to register new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // function to update user profile upon a successful registration
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  // function for current user login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // function for current user logout
  const logOut = () => {
    return signOut(auth)
  }


  // observer the auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if (currentUser?.email) {
        // fetching 'jwt' using axios
        axios.post('http://localhost:5000/jwt', { email: `${user.email}` }) // Enclosed template literal within backticks
          .then(data => {
            localStorage.setItem('access-token', data.data.token)
          })
      }
      else {
        localStorage.removeItem('access-token')
      }

    })
    return () => {
      unsubscribe();
    }
  })

  const userInfo = {
    createUser, logIn, user, logOut, updateUserProfile
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;