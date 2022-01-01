import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [isAuth, setIsAuth] = useState(false);

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
        <Link to="/create_post">Create Post</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signOutUser}> Log Out</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        {/* //passing state as prop to login page */}
        <Route path="/create_post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
