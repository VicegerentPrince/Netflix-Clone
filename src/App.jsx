import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoading(false);
        console.log("logged in");
        navigate("/");
      } else {
        console.log("logged out");
        navigate("/login");
      }
    });
  }, []);

  

  return (
    <div>
      <Routes>
        {<Route path="/" element={<Home  loading={loading}/>}></Route>}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/player/:type/:id" element={<Player />}></Route>
      </Routes>
    </div>
  );
};

export default App;
