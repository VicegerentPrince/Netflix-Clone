import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import HomeContent from "../../components/HomeContent";
import Footer from "../../components/Footer";
import { BarLoader } from "react-spinners"; 
import SearchResults from "../../components/SearchResults";

const Home = ({ loading }) => {
  
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')
  return !loading ? (
    <div className="">
      <Navbar searchBoxOpen={searchBoxOpen} setSearchBoxOpen ={setSearchBoxOpen} setIsSearching={setIsSearching} query={query} setQuery={setQuery} />
      {isSearching ? <SearchResults query={query} /> :  < HomeContent />}
      <Footer className="px-10 2xl:px-20 mt-15 2xl:mt-30 pt-10 2xl:pt-20 pb-20 2xl:pb-20 bg-black"></Footer>
    </div>
  ) : (
    <div className="absolute w-full h-full bg-black flex items-center justify-center flex-col">
      <img src="logo.png" alt="" className="mb-10 h-16 md:h-18 2xl:h-20" />
      <BarLoader color="red" height={8} width={160}/>
    </div>
  );
};

export default Home;
