import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setLoading(false);
        if (location.pathname === "/login") {
          navigate("/");
        }
      } else if (user && !user.emailVerified) {
        signOut(auth);
        navigate("/login");
        toast.info("Please verify your email before proceeding.");
      } else {
        if (location.pathname !== "/login") {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [location.pathname]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Routes>
        {<Route path="/" element={<Home loading={loading} />}></Route>}
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/player/:type/:id"
          element={<Player loading={loading} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
