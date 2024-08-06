import React from 'react';

export const TokenTransfer = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="card-body p-[1rem]">
          <div className="mb-3">
            <button
              onClick={() => setActiveTab('Transfers')}
              className={`py-[.3rem] px-[.75rem]  text-white bg-[#0784c3] 
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#0670a6]`}
            >
              <span className="font-medium">Token Holders Chart</span>
            </button>
          </div>
          <div className="flex  flex-wrap justify-between items-center gap-3">
            <p className="mb-0 flex gap-1 items-center text-[14.4992px] font-normal">
              &nbsp;A total of 2 token holders
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                className={`py-[.3rem] flex gap-1 items-center px-[.75rem]  border border-[#e9ecef]  text-[#081D35] bg-transparent
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
              >
                <img src="/assets/download2.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />
                <span className="font-medium"> Download Page Data</span>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-[40px] text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Rank
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Address
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Quantity
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Percentage
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Analytics
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="text-center">1</td>
                <td>
                  <div className="flex items-center gap-1">
                    <a href="" className="max-w-[6rem] text-[14.4992px] truncate text-[#0784c3]">
                      0xcb23c4809cb0300880610944974b46ea78d952694590c516818e6cea01ae6f1a
                    </a>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>11,999,990</td>
                <td>
                  99.9999%
                  <div className=" mt-1 h-[2px] bg-[#0784c3] rounded-[.5rem]">
                    <div className="bg-[#0784c3] w-full flex flex-col justify-center overflow-hidden"></div>
                  </div>
                </td>
                <td>
                  <img src="/assets/chart.png" alt="" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="text-center">2</td>
                <td>
                  <div className="flex items-center gap-1">
                    <a href="" className="max-w-[6rem] text-[14.4992px] truncate text-[#0784c3]">
                      0xcb23c4809cb0300880610944974b46ea78d952694590c516818e6cea01ae6f1a
                    </a>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>10</td>
                <td>
                  0.0001%
                  <div className=" mt-1 h-[2px] bg-[#e9ecef]  rounded-[.5rem]">
                    <div className="bg-[#0784c3] w-[0.0001%] flex flex-col justify-center overflow-hidden"></div>
                  </div>
                </td>
                <td>
                  <img src="/assets/chart.png" alt="" />
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
