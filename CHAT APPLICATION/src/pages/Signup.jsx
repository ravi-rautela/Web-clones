import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import Add from "../images/add-user.png";
import { auth, db, storage } from "../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [err, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // ****XX****** Sign Up Feature ******XX*****
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ***************** Upload User Image ****************
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            // **** Code to store data in firestore ***
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc("db", "userChats", response.user.uid), {});
            navigate('/')
          });
        }
      );
      // **********************ENDING OF USER IMAGE*******************************
    } catch (error) {
      setError(true);
    }

    //-------------------ENDING OF EMAIL AND PASSWORD SIGNUP------------------------------
  };

  return (
    <>
      <div className="form__container">
        <div className="form__wrapper">
          <span className="logo">Live Chat - With Friends</span>
          <span className="title">Sign Up</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" autoComplete="off" required/>
            <input type="email" placeholder="email" autoComplete="off" required />
            <input type="password" placeholder="password" required/>
            <input className="addUser" type="file" id="addAvatar" />
            <label htmlFor="addAvatar">
              <img className="img" src={Add} alt="" required/>
              <span>add an avatar</span>
            </label>
            <button className="btn">Sign up</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
