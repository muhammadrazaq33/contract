import React, { useState } from 'react';

export const ContentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center gap-3 mb-2">
        <div className="flex gap-1">
          <a
            href="#"
            className="px-[0.5rem] py-[0.25rem] text-[0.78515625rem] border border-[#e9ecef] rounded-[50rem] transition-all bg-white hover:bg-[#e9ecef]"
          >
            ERC-20
          </a>
        </div>
        <div className="flex items-center gap-1">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-[0.5rem] cursor-pointer py-[0.25rem] text-[0.78515625rem] border border-[#e9ecef] rounded-[0.375rem] transition-all bg-white hover:bg-[#e9ecef]"
            >
              <img src="/assets/check-list.png" alt="Check List" />
            </button>
            {isOpen && (
              <div
                className="min-w-[15rem] z-[99] right-0 bg-white absolute mt-3 text-[.78515625rem] p-[.5rem] rounded-[0.5rem]"
                style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}
              >
                <div
                  href=""
                  className="rounded-[.375rem] flex items-center gap-2 cursor-pointer w-full px-[0.75rem] py-[0.375rem] font-normal text-[#212529] transition-all hover:bg-[#e9ecef]"
                >
                  <img src="/assets/note.png" className="me-1" alt="Note" />
                  Token Approvals
                  <span className="text-[#6c757d] rounded-[50rem] bg-[#f8f9fa] py-[.25rem] px-[.75rem] border border-[#e9ecef] text-[9.42188px] font-bold">
                    Beta
                  </span>
                </div>
                <hr className="my-[0.5rem]" />
                <div
                  href=""
                  className="rounded-[.375rem] flex items-center gap-2 cursor-pointer w-full px-[0.75rem] py-[0.375rem] font-normal text-[#212529] transition-all hover:bg-[#e9ecef]"
                >
                  <img src="/assets/check.png" className="me-1" alt="Check" />
                  Validate Account Balance
                </div>
                <div
                  href=""
                  className="rounded-[.375rem] flex items-center gap-2 cursor-pointer w-full px-[0.75rem] py-[0.375rem] font-normal text-[#212529] transition-all hover:bg-[#e9ecef]"
                >
                  <img src="/assets/history.png" className="me-1" alt="History" />
                  Check Previous Balance
                </div>
                <hr className="my-[0.5rem]" />
                <div
                  href=""
                  className="rounded-[.375rem] flex items-center gap-2 cursor-pointer w-full px-[0.75rem] py-[0.375rem] font-normal text-[#212529] transition-all hover:bg-[#e9ecef]"
                >
                  <img src="/assets/user.png" className="me-1" alt="User" />
                  Update Name Tag or Label
                </div>
                <div
                  href=""
                  className="rounded-[.375rem] flex items-center gap-2 cursor-pointer w-full px-[0.75rem] py-[0.375rem] font-normal text-[#212529] transition-all hover:bg-[#e9ecef]"
                >
                  <img src="/assets/red-flag.png" className="me-1" alt="Red Flag" />
                  Report/Flag Address
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12">
        <div className="md:col-span-6 lg:col-span-4 col-span-12 px-[0.75rem] mt-[0.75rem]">
          <div
            className="card h-full border border-[#e9ecef] rounded-[0.75rem] "
            style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
          >
            <div className="flex flex-col gap-5 p-[1rem]">
              <h3 className="text-[.9062rem] font-medium mb-0">Overview</h3>
              <div>
                <h4 className="text-cap mb-1">MAX TOTAL SUPPLY</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">12,000,000 SCH$</div>
                </div>
              </div>
              <div>
                <h4 className="text-cap mb-1">HOLDERS</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">2</div>
                </div>
              </div>
              <div>
                <h4 className="text-cap mb-1">TOTAL TRANSFERS</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-4 col-span-12 px-[0.75rem] mt-[0.75rem]">
          <div
            className="card h-full border border-[#e9ecef] rounded-[0.75rem] "
            style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
          >
            <div className="flex flex-col gap-5 p-[1rem]">
              <h3 className="text-[.9062rem] font-medium mb-0">Market</h3>
              <div>
                <h4 className="text-cap mb-1">ONCHAIN MARKET CAP</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">$0.00</div>
                </div>
              </div>
              <div>
                <h4 className="text-cap mb-1">CIRCULATING SUPPLY MARKET CAP</h4>
                <div className="flex gap-1 items-center">
                  <div className="flex gap-1 text-[14.4992px] font-normal">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-4 col-span-12 px-[0.75rem] mt-[0.75rem]">
          <div
            className="card h-full border border-[#e9ecef] rounded-[0.75rem] "
            style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
          >
            <div className="flex flex-col gap-5 p-[1rem]">
              <h3 className="text-[.9062rem] font-medium mb-0">Other Info</h3>
              <div>
                <h4 className="text-cap mb-1">TOKEN CONTRACT (WITH 18 DECIMALS)</h4>
                <div className="flex gap-1 items-center flex-wrap">
                  <a href="" className="  text-[14.4992px] truncate text-[#0784c3]">
                    0xf15eb5558021e7b841f50a8e669e4516c254ee28
                  </a>
                  <a href="#">
                    <img src="/assets/copy.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
