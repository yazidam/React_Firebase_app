import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Register from "./pages/Register";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signOutUser = () => {
    signOut(auth).then((res) => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register"> Register</Link>
          </>
        ) : (
          <>
            <Link to="/create_post">Create Post</Link>
            <button onClick={signOutUser}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        {/* //passing state as prop to login page */}
        <Route path="/create_post" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/Register" element={<Register setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
