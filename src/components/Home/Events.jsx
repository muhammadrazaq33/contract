import React from 'react';

export const Events = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="card-body p-[1rem]">
          <div className="flex  flex-wrap justify-between items-center gap-3">
            <div className="">
              <p className="mb-0 flex gap-1 items-center text-[14.4992px] font-normal">
                <img src="/assets/sort-amount-down-alt.png" alt="" />
                &nbsp; Latest 3 Contract Events
              </p>
              <span className="block text-[.875em] text-[#6c757d] mt-1">
                Tip:{' '}
                <a href="#" className="text-[#0784c3]">
                  Logs
                </a>{' '}
                are used by developers/external UI providers for keeping track of contract actions and for auditing
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <button
                  className={`py-[.5rem] flex gap-1 items-center px-[.75rem]  border border-[#e9ecef]  text-[#081D35] bg-[#e9ecef]
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
                >
                  <img
                    src="/assets/search-interface-symbol.png"
                    className="max-w-[13px] w-full h-auto object-contain"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Transaction Hash
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <div className="flex gap-1 items-center">Block</div>
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <a href="#" className="text-[#0784c3]">
                    Age
                  </a>
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  Method
                </th>
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col" colSpan={5}>
                  <div className="flex gap-1 items-center">
                    <img
                      src="/assets/indent.png"
                      className="max-w-[12px] w-full h-auto object-contain"
                      alt="Indent Icon"
                    />
                    Logs
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td>
                  <div className="flex items-center gap-1">
                    <a href="#" className="max-w-[7rem] text-[14.4992px] truncate text-[#0784c3]">
                      0xcb23c4809cb0300880610944974b46ea78d952694590c516818e6cea01ae6f1a
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex gap-1">
                    <a href="#" className="max-w-[7rem] text-[14.4992px] truncate text-[#0784c3]">
                      20318479
                    </a>
                    <a href="#">
                      <img
                        src="/assets/filter.png"
                        className="max-w-[13px] w-full ml-1 h-auto object-contain"
                        alt="Filter Icon"
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">7 days ago</span>
                </td>
                <td className="p-2">
                  <button className="py-1 px-3 w-full flex justify-center items-center border border-opacity-10 border-[#0000001a] text-[#081D35] bg-[#f8f9fa] rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    0x485cc955
                  </button>
                  <span className="gap-2 truncate mt-3 flex items-center">
                    <button className="px-2 py-2 flex justify-center items-center border border-[#e9ecef] text-[#081D35] bg-transparent rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                      <img src="/assets/view.png" className="object-contain" alt="View Icon" />
                    </button>
                    <a href="#" className="text-[#212529] truncate text-[14.4992px] font-normal">
                      initialize(address,address)
                    </a>
                  </span>
                </td>
                <td colSpan={5}>
                  <div className="flex gap-1">
                    <a href="#" className="text-[#0784c3] text-[14.4992px]">
                      <span className="flex gap-1 items-center">
                        <img
                          src="/assets/chevron.png"
                          className="max-w-[13px] h-auto w-full object-contain"
                          alt="Chevron Icon"
                        />
                        Initialized
                      </span>
                    </a>
                    <span className="inline-block text-monospace mb-1 text-[14.4992px]">
                      (<span className="text-[#00a186]">uint8</span> <span className="text-[#dc3545]">version</span>)
                    </span>
                  </div>
                  <br />
                  <span>
                    <span className="text-[#6c757d] text-[14.4992px] flex items-center">
                      [topic0] 0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498
                      <a href="#">
                        <img
                          src="/assets/filter.png"
                          className="max-w-[13px] w-full ml-1 h-auto object-contain"
                          alt="Filter Icon"
                        />
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td>
                  <div className="flex items-center gap-1">
                    <a href="#" className="max-w-[7rem] text-[14.4992px] truncate text-[#0784c3]">
                      0xcb23c4809cb0300880610944974b46ea78d952694590c516818e6cea01ae6f1a
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex gap-1">
                    <a href="#" className="max-w-[7rem] text-[14.4992px] truncate text-[#0784c3]">
                      20318479
                    </a>
                    <a href="#">
                      <img
                        src="/assets/filter.png"
                        className="max-w-[13px] w-full ml-1 h-auto object-contain"
                        alt="Filter Icon"
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <span className="text-[14.4992px] font-normal">7 days ago</span>
                </td>
                <td className="p-2">
                  <button className="py-1 px-3 w-full flex justify-center items-center border border-opacity-10 border-[#0000001a] text-[#081D35] bg-[#f8f9fa] rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                    0x485cc955
                  </button>
                  <span className="gap-2 truncate mt-3 flex items-center">
                    <button className="px-2 py-2 flex justify-center items-center border border-[#e9ecef] text-[#081D35] bg-transparent rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]">
                      <img src="/assets/view.png" className="object-contain" alt="View Icon" />
                    </button>
                    <a href="#" className="text-[#212529] truncate text-[14.4992px] font-normal">
                      initialize(address,address)
                    </a>
                  </span>
                </td>
                <td colSpan={5}>
                  <div className="flex gap-1">
                    <span className="inline-block mb-[3px] text-[14px]">
                      (index_topic_1 <span className="text-[#00a186]">bytes32</span>{' '}
                      <span className="text-[#dc3545]">role</span>, index_topic_2{' '}
                      <span className="text-[#00a186]">address</span> <span className="text-[#dc3545]">account</span>,
                      index_topic_3 <span className="text-[#00a186]">address</span>{' '}
                      <span className="text-[#dc3545]">sender</span>)
                    </span>
                  </div>
                  <br />
                  <span>
                    <span className="text-[#6c757d] text-[14.4992px] flex items-center">
                      [topic0] 0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d
                      <a href="#">
                        <img
                          src="/assets/filter.png"
                          className="max-w-[13px] w-full ml-1 h-auto object-contain"
                          alt="Filter Icon"
                        />
                      </a>
                    </span>
                    <span className="text-[#6c757d] text-[14.4992px] flex items-center">
                      [topic1] 0x0000000000000000000000000000000000000000000000000000000000000000 <br />
                      [topic2] 0x000000000000000000000000ed0d99929879a68268ae3af077440ca554a10d4d <br />
                      [topic3] 0x000000000000000000000000ed0d99929879a68268ae3af077440ca554a10d4d
                    </span>
                  </span>
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
