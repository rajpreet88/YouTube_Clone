import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import youtube from "../images/youtube.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

// import '../index.css';

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextAPI";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      //optional chaining
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:mr-4 h-10 w-10 items-center justify-center cursor-pointer rounded-full hover:bg-[#404030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-lg" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block cursor-pointer"
            src={ytLogo}
            alt="YouTube"
          />
          <img
            className="h-full md:hidden cursor-pointer"
            src={ytLogoMobile}
            alt="YouTube"
          />
          {/* <h3 id='youtubefont' style={{fontFamily:'YouTube Sans Dark'}}className='ml-1 text-white font-semibold'>Premium</h3> */}
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500  md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-12 md:w-14  items-center hidden justify-center group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:w-80 md:group-focus-within:pl-0 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Search"

          />
        </div>
        {/* <button className="flex w-16 h-10 items-center justify-center border border-l-0 border-[#303030] bg-[#303030] rounded-r-3xl cursor-pointer"> */}
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l border-[#303030] rounded-r-3xl bg-white/[0.13]"
          onClick={()=>searchQueryHandler('searchButton')}
          
        >
          <IoIosSearch className="text-white text-2xl" />
        </button>
        <div className="flex m-2 rounded-full bg-[#161616] h-10 w-10 items-center justify-center cursor-pointer hover:bg-[#303030]">
          <MdKeyboardVoice className="text-white text-2xl" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex md:flex justify-between">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 md:ml-4 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex rounded-full overflow-hidden mt-1 h-8 w-8 ml-4 md:ml-4 md:mr-7">
            <img src='https://xsgames.co/randomusers/avatar.php?g=male' alt='profile' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
