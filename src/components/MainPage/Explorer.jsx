import React from 'react';
import coin from "../assets1/coin.png"

export const Explorer = () => {
  return (
    <div className="bg-[#081d35] pt-14 pb-20 bg-effec">
      <div className="2xl:container md:px-[20px] mx-auto px-[15px]">
        <div className="grid justify-items-center items-center ">
          <div className="mb-5">
            <h1 className="text-white text-center sm:text-[32px] text-[24px] font-medium roboto mb-2 ">
              The Fry Networks Blockchain Explorer
            </h1>
            <p className="text-[16px] text-center text-[#A5A5AB] font-normal mb-5">
              Building a Greener Future with Decentralized Networks
            </p>
            <form action="" className="mb-3">
              <div className="rounded bg-white p-1.5 gap-2 flex mx-auto items-center justify-center w-[80vw] max-w-[45rem]">
                <div className="hidden sm:block bg-[#FF0F0F] sm:p-2 p-0 rounded-[6px]">
                  <select
                    name=""
                    className="form-select bg-[#FF0F0F] outline-none text-[.9375rem] border-0"
                    id=""
                  >
                    <option selected="" value="0">
                      All Filters
                    </option>
                    <option value="1">Addresses</option>
                    <option value="2">Tokens</option>
                    <option value="3">Name Tags</option>
                    <option value="6">Domain Names</option>
                    <option value="4">Labels</option>
                    <option value="5">Websites</option>
                  </select>
                </div>
                <div className="flex-grow-[1] relative">
                  <input
                    id="search-panel"
                    type="text"
                    class="form-control text-[.9375rem] border-0 pe-8 outline-none"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                    aria-describedby="button-header-search"
                    name="q"
                    maxlength="68"
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="text-white bg-[#FF0F0F]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <img src="/assets/search.png" alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <p className="text-white text-opacity-75 sm:text-[14.4992px] text-[12px] text-end mb-0 ">
          <span className="inline">
            <b>Featured:</b>&nbsp;
            <img
              src={coin}
              className="align-middle inline "
              alt="Rollbit logo"
            />
            <b> Trade</b> 30+ Crypto - BTC, ETH, SOL, MOG, WIF. 1,000x leverage,
            instant execution!{" "}
            <a href="#" className="text-[#46DB78] underline">
              Trade Now!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
