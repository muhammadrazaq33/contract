import React, { useState } from 'react';
import Dropdown from '../ui/Dropdown';
import arrow from "../assets1/arrow.svg"
import uparrow from "../assets1/uparrow.svg"
import moon from "../assets1/moon.svg"
import brightness from "../assets1/brightness.svg";
import logo from "../assets1/logo.png";
import loginIcon from "../assets1/login-icon.svg";
import menu from "../assets1/menu.svg";
import SideBar from './SideBar';


const dropdownItems = {
  buy: [
    {
      imgSrc: "/assets/moonpay_20.webp",
      title: "MoonPay",
      description:
        "Buy crypto with our non-custodial and fully decentralized platform.",
      cta: "Buy Now!",
      details:
        "15M+ users trust MoonPay. Checkout with your preferred payment method.",
    },
    {
      imgSrc: "/assets/cons_20.webp",
      title: "MetaMask",
      description: "Manage your web3 everything with MetaMask Portfolio.",
      cta: "Try Now!",
      details:
        "Ready to onboard to Ethereum? With MetaMask Portfolio, you're in control.",
    },
    {
      imgSrc: "/assets/nexo.webp",
      title: "Nexo",
      description:
        "Buy crypto and start earning up to 16% interest automatically.",
      cta: "Buy Crypto",
      details:
        "Get up to 0.5% cashback per purchase and receive daily interest.",
    },
  ],
  exchange: [
    {
      imgSrc: "/assets/cons_20.webp",
      title: "MetaMask",
      description:
        "Meet MetaMask Portfolio - your key to getting more out of web3.",
      cta: "Try Now",
      details:
        "Ready to simplify your web3 experience? Try the all-in-one web3 app trusted by millions worldwide.",
    },
    {
      imgSrc: "/assets/cexio_20.svg",
      title: "CEX.IO",
      description: "Claim Your Mystery Box For A Guaranteed Crypto Prize",
      cta: "CLAIM NOW",
      details:
        "Opt-in, make your first trade on Exchange Plus & receive random crypto rewards from 10,000 SHIB, to 0.01 BTC.",
    },
  ],
  play: [
    {
      imgSrc: "/assets/coinsgame_20a.webp",
      title: "Сoins.game",
      description: "100 free spins for registration.",
      cta: "Spin now!",
      details:
        "Everyday giveaways up to 100 ETH, Lucky Spins. Deposit BONUS 300% and Cashbacks!",
    },
    {
      imgSrc: "/assets/celsiuscasino_20.webp",
      title: "Celsius Casino",
      description: "- $400 Freespins - Instant Withdraw - No KYC - 200% Bonus.",
      cta: "Spin Now!",
      details:
        "9 years old Licensed Crypto Casino, Instant Withdraw 24/7, 6000+ Slots available, Paypal Deposit, Instant Live Support 24/7, 30% Rakeback.",
    },
    {
      imgSrc: "/assets/bcgames_20.webp",
      title: "BC.GAME",
      description: "- The Best ETH Casino",
      cta: "Claim Now!",
      details:
        "5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.",
    },
  ],
  gaming: [
    {
      imgSrc: "/assets/bcgames_20.webp",
      title: "BC.GAME",
      description: "- The Best ETH Casino",
      cta: "Claim Now!",
      details:
        "5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.",
    },
    {
      imgSrc: "/assets/cw_20.webp",
      title: "CryptoWins",
      description: "200% Welcome Bonus – Supercharge Your Crypto Up to 4 BTC!",
      cta: "Claim Now!",
      details:
        "Play 100s of games anonymously with all major cryptos. Join CryptoWins & start winning!",
    },
    {
      imgSrc: "/assets/cryptoslots.webp",
      title: "CryptoSlots",
      description: "Play & Get 25 Free Spins at CryptoSlots",
      cta: "Play Now",
      details:
        "Anonymous play on awesome games - sign up now for 25 free jackpot spins - worth $100s!",
    },
  ],
  Resources: [
    {
      imgSrc: "/assets/moonpay_20.webp",
      title: "MoonPay",
      description:
        "Buy crypto with our non-custodial and fully decentralized platform.",
      cta: "Buy Now!",
      details:
        "15M+ users trust MoonPay. Checkout with your preferred payment method.",
    },
    {
      imgSrc: "/assets/cons_20.webp",
      title: "MetaMask",
      description: "Manage your web3 everything with MetaMask Portfolio.",
      cta: "Try Now!",
      details:
        "Ready to onboard to Ethereum? With MetaMask Portfolio, you're in control.",
    },
    {
      imgSrc: "/assets/nexo.webp",
      title: "Nexo",
      description:
        "Buy crypto and start earning up to 16% interest automatically.",
      cta: "Buy Crypto",
      details:
        "Get up to 0.5% cashback per purchase and receive daily interest.",
    },
  ],
};

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);


  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="bg-[#121212]">
      {/* navbar */}
      <div className="md:flex hidden justify-between items-center py-4 bg-[#121212]">
        {/* left side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[14px] text-[#757575] font-normal">
              Algo Price :{" "}
            </p>
            <p className="text-white">$41,1925</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="text-[#5BC88B]" src={arrow} alt="" />
            <p className="text-[#5BC88B] text-[14px] font-normal">+1.63% </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={uparrow} alt="" />
            <p className="text-[#FF7C74] text-[14px] font-normal">+1.63% </p>
          </div>
        </div>
        {/*end of left side */}
        {/* right side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#3a3131] rounded-[18px]">
            <div className="p-2 bg-[#FF0F0F] rounded-[18px]">
              <img
                src={moon}
                alt=""
                className="h-[16px]  w-[16px]  text-white flex-shrink-0"
              />
            </div>
            <div className="p-2">
              <img
                className="h-[16px] w-[16px] flex-shrink-0"
                src={brightness}
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#46DB78] p-2 rounded-[18px]">
            <img
              src="/assets/algorand-algo-icon.svg"
              className=" h-[16px] text-[2rem] w-[16px] flex-shrink-0"
              alt=""
            />
          </div>
        </div>
        {/*end of right side */}
      </div>
      <div className="flex 
       border-b border-[#e9ecef] justify-between items-center sm:gap-5 gap-3 py-5 flex-wrap bg-[#121212]">
        <div className="flex flex-col gap-2">
          <img src={logo} className="sm:w-[190px] w-[160px]" alt="" />
        </div>
        <div className="md:flex hidden gap-3 items-center">
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
          <button className="flex items-center bg-[#FF0F0F] py-[10px] px-[16px] rounded-[4px] gap-[6px] text-white">
            <img src={loginIcon} alt="" />
            <p>Log In</p>
          </button>
        </div>
        {/* right side for mobile */}
        <div className="md:hidden flex gap-4">
          <div className="flex items-center gap-2 bg-[#3a3131] rounded-[18px]">
            <div className="p-1.5 bg-[#FF0F0F] rounded-[18px]">
              <img
                src={moon}
                alt=""
                className="h-[16px]  w-[16px]  text-white flex-shrink-0"
              />
            </div>
            <div className="p-1.5">
              <img
                className="h-[16px] w-[16px] flex-shrink-0"
                src={brightness}
                alt=""
              />
            </div>
          </div>
          <div className="" onClick={() => setShowMenu(true)}>
            <img
              className="w-[28px] h-[28px] flex-shrink-0 "
              src={menu}
              alt=""
            />
          </div>
          {/* side bar */}
          {showMenu && (
            <SideBar
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              dropdownItems={dropdownItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />
          )}
          {/*end of side bar */}
        </div>
        {/*end of right side for mobile */}
      </div>
      {/* end of navbar */}
    </div>
  );
};
