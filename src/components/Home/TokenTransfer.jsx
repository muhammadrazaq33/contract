import React from 'react';

export const TokenTransfer = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
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
                <th className="text-[12.5625px] font-bold py-[.6rem] px-[.5rem]" scope="col">
                  <a href="" className="text-[#0784c3]">
                    Txn Fee
                  </a>
                </th>
              </tr>
            </thead>
            <tbody className="text-nowrap align-middle">
              <tr>
                <td colSpan={10}>
                  <div className="text-center py-24">
                    <div className="mb-4">
                      <span className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[50rem] bg-opacity-10 bg-[#ffc1071a] mx-auto border-opacity-25 border-[#ffc10740] border">
                        <img src="/assets/folder.png" alt="" />
                      </span>
                    </div>
                    <h3 className="text-[1.171875rem] font-medium">There are no matching entries</h3>
                    <p className="text-[#6c757d] text-[14.4992px] mb-0">Please try again later</p>
                  </div>
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
