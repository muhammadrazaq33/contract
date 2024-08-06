import React from 'react';

export const Transaction = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="card-body p-[1rem]">
          <div className="flex  flex-wrap justify-between items-center gap-3">
            <p className="mb-0 flex gap-1 items-center text-[14.4992px] font-normal">
              <img src="/assets/sort-amount-down-alt.png" alt="" />
              &nbsp;Latest 2 from a total of 2 transactions
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                className={`py-[.3rem] flex gap-1 items-center px-[.75rem]  border border-[#e9ecef]  text-[#081D35] bg-transparent
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
              >
                <img src="/assets/download2.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />
                <span className="font-medium"> Download Page Data</span>
              </button>
              <button
                className={`py-[.3rem] flex gap-1 items-center px-[.75rem]  border border-[#e9ecef]  text-[#081D35] bg-transparent
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
              >
                <img src="/assets/filter.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />

                <span className="font-medium"> Advanced Filter</span>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-[40px] text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <img
                    src="/assets/question.png"
                    className="max-w-[13px] w-full h-auto mx-auto object-contain"
                    alt=""
                  />
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Transaction Hash
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <div className="flex gap-1 items-center">
                    Method
                    <img src="/assets/question.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />
                  </div>
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Block
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <a href="" className="text-[#0784c3]">
                    Age
                  </a>
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  From
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  To
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <a href="" className="text-[#0784c3]">
                    Amount
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="text-center">
                  <button className="w-[28px] h-[28px] flex justify-center items-center border border-[#e9ecef] text-[#081D35] bg-transparent rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    <img src="/assets/view.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />
                  </button>
                </td>
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
                <td>
                  <button className="py-[.3rem] px-[.75rem] max-w-[95px] w-full flex justify-center items-center border border-opacity-10 border-[#0000001a] text-[#081D35] bg-[#f8f9fa] rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    Initialize
                  </button>
                </td>
                <td>
                  <a href="" className="max-w-[6rem] text-[14.4992px] truncate text-[#0784c3]">
                    20318479
                  </a>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">7 days ago</span>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <a href="" className="text-[14.4992px] truncate text-[#0784c3]">
                      0xED0d9992...554A10D4D
                    </a>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <span className="text-[14.4992px] truncate text-[#0784c3]">0xa23cb9c5...5315a2E27</span>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">10</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="text-center">
                  <button className="w-[28px] h-[28px] flex justify-center items-center border border-[#e9ecef] text-[#081D35] bg-transparent rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    <img src="/assets/view.png" className="max-w-[13px] w-full h-auto object-contain" alt="" />
                  </button>
                </td>
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
                <td>
                  <button className="py-[.3rem] px-[.75rem] max-w-[95px] w-full flex justify-center items-center border border-opacity-10 border-[#0000001a] text-[#081D35] bg-[#f8f9fa] rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    Initialize
                  </button>
                </td>
                <td>
                  <a href="" className="max-w-[6rem] text-[14.4992px] truncate text-[#0784c3]">
                    20318479
                  </a>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">7 days ago</span>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <a href="" className="text-[14.4992px] truncate text-[#0784c3]">
                      0xED0d9992...554A10D4D
                    </a>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <span className="text-[14.4992px] truncate text-[#0784c3]">0xa23cb9c5...5315a2E27</span>
                    <a href="#">
                      <img src="/assets/copy.png" alt="" />
                    </a>
                  </div>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">10</span>
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
