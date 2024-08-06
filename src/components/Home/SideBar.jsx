import React from 'react'
import logo from "../assets1/logo.png";
import crossMenu from "../assets1/crossmenu.svg";
import Dropdown from "../ui/Dropdown";
import loginIcon from "../assets1/login-icon.svg";
import navIcon from "../../../public/assets/algorand-algo-icon.svg";



const SideBar = ({
  toggleDropdown,
  dropdownItems,
  openDropdown,
  showMenu,
  setShowMenu,
}) => {
  return (
    <div className="fixed top-0 z-0 h-full w-[80%] right-0 bg-[black] transition-all">
      <div className="flex justify-between items-center gap-2 mt-10 p-6">
        <img src={logo} className="sm:w-[190px] w-[160px]" alt="" />
        <img
          src={crossMenu}
          onClick={() => setShowMenu(false)}
          className=""
          alt=""
        />
      </div>
      {/* links */}
      <div className="flex flex-col gap-6 items-start p-6">
        <div className="bg-[#328332] p-1.5 rounded-[18px] ">
         <img src={navIcon} className='m-0 p-0 w-[25px] h-[25px] ' alt="" />
        </div>
        <a href="/home" className="text-[white] text-[14px] font-normal">
          Home
        </a>
        <Dropdown
          label="Blockchain"
          items={dropdownItems.buy}
          isOpen={openDropdown === "buy"}
          toggleDropdown={() => toggleDropdown("buy")}
        />
        <Dropdown
          label="Tokens"
          items={dropdownItems.exchange}
          isOpen={openDropdown === "exchange"}
          toggleDropdown={() => toggleDropdown("exchange")}
        />
        <Dropdown
          label="Play"
          items={dropdownItems.play}
          isOpen={openDropdown === "play"}
          toggleDropdown={() => toggleDropdown("play")}
        />
        <Dropdown
          label="NFTs"
          items={dropdownItems.gaming}
          isOpen={openDropdown === "gaming"}
          toggleDropdown={() => toggleDropdown("gaming")}
        />
        <Dropdown
          label="Resources"
          items={dropdownItems.gaming}
          isOpen={openDropdown === "Resources"}
          toggleDropdown={() => toggleDropdown("Resources")}
        />
        <a href="#" className="text-[#ADADAD] text-[14px] font-normal">
          About Us
        </a>
        <a href="#" className="text-[#ADADAD] text-[14px] font-normal">
          Shop
        </a>
        <button className="flex items-center w-[100%] justify-center bg-[#FF0F0F] py-[10px] px-[16px] rounded-[4px] gap-[6px] text-white">
          <img src={loginIcon} alt="" />
          <p>Log In</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar
