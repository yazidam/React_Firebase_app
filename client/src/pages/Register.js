import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   onAuthStateChanged,
  //   signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase-config";

const Register = ({ setIsAuth }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setIsAuth(true);
      navigate("/");

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1> Register User </h1>
        <div className="inputGp">
          <label>Email:</label>

          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Password:</label>

          <input
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </div>

        <button onClick={register} disabled={registerPassword.length < 6}>
          {" "}
          Create User
        </button>
      </div>

      {/* <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}
    </div>
  );
};

export default Register;
