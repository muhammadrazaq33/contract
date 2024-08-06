import React from 'react';

export const MultichainPortfolio = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="card-body p-[1rem]">
          <div className="flex flex-wrap gap-2 mb-3 justify-between">
            <h3 className="text-[.9062rem] font-medium mb-0">
              Multichain Portfolio
              <span className="text-[#6c757d]">| 26 Chains</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#" className="underline text-[#adb5bd] text-[.875em]">
                Display all chains
              </a>
              <span>•</span>
              <div id="multichain-lastupdated" className="text-[.875em] text-[#6c757d]">
                Last updated: <span className="text-black">less than 1 sec ago</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex items-center px-3 ">
              <a href="" className="text-[#6c757d] text-[.875em]  ">
                <span style={{ textDecoration: 'none' }}> +</span>
                <span className="underline">Show 26 more chains</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-between items-center pb-2 px-4 pt-1">
          <div className="js-show-chain-count text-[14.4992px]">
            Showing <span className="font-medium">0</span> tokens with a value of{' '}
            <span className="font-medium">$0</span>
          </div>
          <div>
            <label htmlFor="" className="relative">
              <span className="flex items-center top-0 bottom-0 absolute left-[0.5rem]">
                <img
                  src="/assets/search-interface-symbol.png"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </span>
              <span className="flex items-center top-0 bottom-0 absolute left-[0.5rem]">
                <img
                  src="/assets/search-interface-symbol.png"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </span>
              <input
                type="text"
                className="form-control form-control-sm datatable-form-control outline-none bg-[#f8f9fa] bg-focus-white py-1.5"
                name=""
                placeholder="Search"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-[12.5625px] text-[#6c757d] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Chain
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <div className="flex gap-1 items-center">Block</div>
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Token
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Portfolio %
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Price
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Amount
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td colSpan={6} className="text-center">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <img src="/assets/idea.png" alt="" />
        <span className="text-[12.5625px] " style={{ color: 'rgb(108, 117, 125)' }}>
          A contract address hosts a smart contract, which is a set of code stored on the blockchain that runs when
          predetermined conditions are met. Learn more about addresses in our{' '}
          <a href="#" className="text-[#0784c3]">
            Knowledge Base
          </a>
          .
        </span>
      </div>
    </div>
  );
};
