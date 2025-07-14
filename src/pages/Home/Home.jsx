import React from "react";
import Navbar from "../../components/Navbar";
import HomeContent from "../../components/HomeContent";
import Footer from "../../components/Footer";

const Home = ({ loading }) => {
  

  return !loading ? (
    <div className="">
      <Navbar />
      < HomeContent />
      <Footer className="px-10 2xl:px-20 mt-15 2xl:mt-30 pt-10 2xl:pt-20 pb-20 2xl:pb-20 bg-black"></Footer>
    </div>
  ) : (
    <div className="absolute w-full h-full bg-black"></div>
  );
};

export default Home;
