import React from 'react';
import customIcon from "../assets1/customIcon.svg"
import customIcon1 from "../assets1/customIcon1.svg"
import box from "../assets1/box.svg"
import document from "../assets1/document.svg"
import navIcon from "../assets1/nav-green-icon.svg"


const latestBlocks = [
  {
    id:1,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: "Oxlf9090aa...8e676c326",
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id:2,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: "Oxlf9090aa...8e676c326",
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id:3,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: "Oxlf9090aa...8e676c326",
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id:4,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: "Oxlf9090aa...8e676c326",
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id:5,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: "Oxlf9090aa...8e676c326",
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
];
const latestTransaction = [
  {
    id:1,
    dummyCode: "Oxeabfcb0114b... ",
    beforeTime: 4,
    fromDummyValue: "oxl f9090aa...8e676c326",
    toDummyValue: " OxD6E4aA93...da06F9cEf",
    algo: 0.0127,
  },
  {
    id:2,
    dummyCode: "Oxeabfcb0114b... ",
    beforeTime: 4,
    fromDummyValue: "oxl f9090aa...8e676c326",
    toDummyValue: " OxD6E4aA93...da06F9cEf",
    algo: 0.0127,
  },
  {
    id:3,
    dummyCode: "Oxeabfcb0114b... ",
    beforeTime: 4,
    fromDummyValue: "oxl f9090aa...8e676c326",
    toDummyValue: " OxD6E4aA93...da06F9cEf",
    algo: 0.0127,
  },
  {
    id:4,
    dummyCode: "Oxeabfcb0114b... ",
    beforeTime: 4,
    fromDummyValue: "oxl f9090aa...8e676c326",
    toDummyValue: " OxD6E4aA93...da06F9cEf",
    algo: 0.0127,
  },
  {
    id:5,
    dummyCode: "Oxeabfcb0114b... ",
    beforeTime: 4,
    fromDummyValue: "oxl f9090aa...8e676c326",
    toDummyValue: " OxD6E4aA93...da06F9cEf",
    algo: 0.0127,
  },

];
export const TransacstionsSection = () => {
  return (
    <div className="bg-[#000]">
      <div className="grid grid-cols-12 gap-4  lg: ">
        {/* left side */}
        <div className="lg:col-span-6 col-span-12 mb-4 bg-[#000]">
          <div className="h-full flex flex-col bg-[#101010] rounded-[0.75rem] border-[#262626]">
            {/* title */}
            <div
              className="p-[1rem] border-b bg-[#262626] flex justify-between items-center"
              style={{
                borderRadius: "18px 18px 0 0",
              }}
            >
              <h2 className="roboto text-[18px] text-[white] mb-0 font-medium">
                Latest Blocks
              </h2>
              <a href="/home">
                <button class="bg-[#FF0F0F] text-[14px] text-[white] flex items-center font-normal py-[0.25rem] px-[0.35rem] rounded-[0.375rem] shadow">
                  <img
                    src={customIcon}
                    className=" h-auto w-full me-1"
                    alt=""
                  />
                  Customize
                </button>
              </a>
            </div>
            {/*end of title */}
            <div className="p-[1rem]" style={{ flex: "1 1 auto" }}>
              {/* 0 block */}
              {latestBlocks.map((block, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`grid grid-cols-12 rounded-[6px] p-4 ${
                        block.id % 2 !== 0 ? "bg-[]" : "bg-[#1B1B1B]"
                      }`}
                    >
                      <div className="sm:col-span-4 col-span-12">
                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex p-2 rounded-[0.5rem] bg-[#252525] h-[3rem] w-[3rem] text-[#6c757d]">
                            <img
                              src={box}
                              className="max-w-[48px] h-auto w-full"
                              alt=""
                            />
                          </div>
                          <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                            <a
                              href=""
                              className="truncate text-[#46DB78] text-[12px] roboto"
                            >
                              {block.tokens}
                            </a>
                            <div className="text-[#A5A5AB] text-[12px]">
                              {block.beforeTime} secs ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-8 col-span-12">
                        <div className="flex sm:justify-between items-end sm:items-center   relative">
                          <div className="pe-0 sm:pe-2">
                            <div className="flex flex-wrap gap-1 roboto text-[12px] text-[#D2D2D5]">
                              Fee Recipient
                              <a
                                href=""
                                className="truncate text-[#46DB78] text-[12px] roboto"
                              >
                                {block.dummyValue}
                              </a>
                            </div>
                            <a
                              href=""
                              className="truncate text-[#46DB78] text-[12px] roboto"
                            >
                              {block.txns} txns
                            </a>
                            <span class="text-[12px] text-[#6c757d] mx-2">
                              in 12 secs
                            </span>
                          </div>
                          <div className="hidden border items-center border-[#323B49] rounded-[0.375rem] sm:flex gap-1 py-1 px-1 text-end ms-2 sm:ms-0">
                            <span
                              className="badge text-white font-normal roboto 
                       text-[10.8744px]"
                            >
                              0.0127 Algo
                            </span>
                            <img
                              src={navIcon}
                              className="w-[22px] h-[22px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <hr class="mt-3.5 mb-3.5" /> */}
                  </>
                );
              })}
            </div>
            <a
              href=""
              className="text-[14px] text-[#FAFAFA] font-normal flex justify-center gap-2 text-center py-[0.8rem] px-[1.6rem] border-[0.5px] border-[#262626] mx-auto mb-6 rounded-md"
            >
              View all blocks
              <img
                src="/assets/right-arrow.png"
                className="max-w-[12px] h-auto w-full object-contain"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* end of left side */}
        {/* right side */}
        <div className="lg:col-span-6 col-span-12 mb-4 bg-[#000]">
          <div
            className="h-full flex flex-col border-[#262626] bg-[#101010]  rounded-[0.75rem]"
          >
            {/* title */}
            <div
              className="p-[1rem] border-b bg-[#262626] flex justify-between items-center"
              style={{
                borderRadius: "18px 18px 0 0",
              }}
            >
              <h2 className="roboto text-[18px] text-[white] mb-0 font-medium">
                Latest Blocks
              </h2>
              <button class="border-[1px] border-[#c9c9c980] text-[14px] font-normal text-[white] flex items-center py-[0.25rem] px-[0.35rem] rounded-[0.375rem] shadow">
                <img
                  src={customIcon1}
                  className="  h-auto w-full me-1"
                  alt=""
                />
                Customize
              </button>
            </div>
            {/* end of title */}

            <div className="p-[1rem]" style={{ flex: "1 1 auto" }}>
              {/* 0 block */}
              {latestTransaction.map((transaction, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`grid grid-cols-12 rounded-[6px] p-4  ${
                        transaction.id % 2 !== 0 ? "bg-[]" : "bg-[#1B1B1B]"
                      }`}
                    >
                      <div className="sm:col-span-4 col-span-12">
                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex p-2 rounded-[0.5rem] bg-[#252525] h-[3rem] w-[3rem] text-[#6c757d]">
                            <img
                              src={document}
                              className="max-w-[48px] h-auto w-full"
                              alt=""
                            />
                          </div>
                          <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                            <a
                              href=""
                              className="truncate text-[#46DB78] text-[12px] roboto"
                            >
                              {transaction.dummyCode}
                            </a>
                            <div className="text-[#A5A5AB] text-[12px]">
                              {transaction.beforeTime} secs ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-8 col-span-12">
                        <div className="flex sm:justify-between items-end sm:items-center   relative">
                          <div className="pe-0 sm:pe-2">
                            <div className="flex flex-wrap gap-1 roboto text-[12px] text-[#D2D2D5]">
                              From
                              <a
                                href=""
                                className="truncate text-[#46DB78] text-[12px] roboto"
                              >
                                {transaction.fromDummyValue}
                              </a>
                            </div>
                            <a
                              href=""
                              className="truncate text-[#46DB78] text-[12px] roboto"
                            >
                              <span className="text-[12px] text-[#D2D2D5] roboto">
                                to
                              </span>{" "}
                              {transaction.toDummyValue}
                            </a>
                          </div>
                          <div className="hidden border items-center border-[#323B49] rounded-[0.375rem] sm:flex gap-1 py-1 px-1 text-end ms-2 sm:ms-0">
                            <span
                              className="badge text-white font-normal roboto 
                       text-[10.8744px]"
                            >
                              0.0127 Algo
                            </span>
                            <img
                              src={navIcon}
                              className="w-[22px] h-[22px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <a
              href=""
              className="text-[14px] text-[#FAFAFA] font-normal flex justify-center gap-2 text-center py-[0.8rem] px-[1.6rem] border-[0.5px] border-[#262626] mx-auto mb-6 rounded-md"
            >
              View all blocks
              <img
                src="/assets/right-arrow.png"
                className="max-w-[12px] h-auto w-full object-contain"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* end of */}
      </div>
    </div>
  );
};