import React from 'react'
import logo from "../assets1/logo.png"

const Footer1 = () => {
    const links = [
      { text: "Home" },
      { text: "About Us" },
      { text: "Bandwidth Miners" },
      {
        text: "Contact Addresses",
      },
      {
        text:"Brand Assets",
      },
    ];
        const links2 = [
          { text: "FAQ" },
          { text: "Careers" }
    ];
        const links3 = [
          { text: "Terms & Conditions" },
          { text: "Privacy Policy" },
          { text: "Return Policy" },
          {
            text: "Digital Item Policy",
          },
          {
            text: "Warranty Policy",
          },
          {
            text: "Affiliate Terms & Conditions",
          },
          {
            text: "Bought With Crypto Policy",
          },
        ];
  return (
    <div className="  2xl:container md:px-[20px] mx-auto px-[15px]">
      <hr class="my-0" />
      <div className="py-8 lg:py-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-5">
          {/* first peace */}
          <div className="lg:col-span-3 col-span-12 flex flex-col gap-4   ">
            <div className="flex items-center mb-3">
              <img src={logo} className=" h-auto me-2" alt="" />
            </div>
            <p class="text-[16px] text-[white] font-normal max-w-[365px]">
              Building a Decentralized Network of Decentralized Networks
            </p>
            <div className="hidden lg:block">
              <p className="text-[18px] text-white font-semibold">
                Join The <span className="text-[#FF0F0F]">Evolution</span>
              </p>
              <form action="" className="mb-3 mt-1">
                <div className="rounded bg-yellow-600 p-1.5 gap-0 flex items-center justify-center w-[15rem] max-w-[30rem]">
                  <div className="">
                    <input
                      type="text"
                      class="form-control1 text-[.9375rem] border-0 pe-8 outline-none"
                      autocomplete="off"
                      spellcheck="false"
                      placeholder="Enter Email Address"
                      aria-describedby="button-header-search"
                      name="q"
                      maxlength="68"
                    />
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="text-white bg-[#FF0F0F]  focus:ring-4 focus:ring-blue-300 font-medium rounded-tr-lg rounded-br-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <img src="/assets/search.png" alt="" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* company */}
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 class="text-[24px] text-[#FFFFFF] font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  <a href="" className="text-[#FFFFFF] text-[15px] font-normal hover:text-[#066a9c]">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 class="text-[.9062rem] font-medium mb-3">Community</h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links2.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  <a href="" className="text-[#081d35] hover:text-[#066a9c]">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 class="text-[.9062rem] font-medium mb-3">Community</h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links3.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  {link.text == "Careers" ? (
                    <a class="text-[#081d35] hover:text-[#066a9c]" href="#">
                      <span class="me-1">Careers</span>{" "}
                      <span class="bg-[#0784c3] text-white text-[.875em] font-medium text-nowrap rounded-[50rem] p-1 px-2">
                        We're Hiring!
                      </span>
                    </a>
                  ) : (
                    <a href="" className="text-[#081d35] hover:text-[#066a9c]">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* last */}
      <div className="py-4 border-t border-[#e9ecef]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="mb-2 md:mb-0">
            <p class="mb-0 text-[12.5625px] text-[#212529]">
              Etherscan © 2024 (A1)
            </p>
          </div>
          <div className="md:text-end">
            <p className="mb-0 text-[12.5625px] text-[#212529]">
              Donations:
              <a class="me-1 text-[#0784c3]" href="#">
                <span id="spanDonateAddress" runat="server">
                  0x71c765...d8976f
                </span>
              </a>
              <img
                src="/assets/heart.png"
                className="max-w-[13px] h-auto w-full object-contain"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1
