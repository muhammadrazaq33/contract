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
          <span className="text-[#00a186] rounded-[50rem] bg-opacity-10 bg-[#00a1861a] py-1.5 px-2 border border-[#e9ecef] text-[0.75em] font-bold">
            Source Code
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="px-[0.5rem] py-[0.25rem] text-[0.78515625rem] border border-[#e9ecef] rounded-[0.375rem] transition-all bg-white hover:bg-[#e9ecef]"
          >
            <img src="/assets/star.png" alt="" />
          </a>
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
                <h4 className="text-cap mb-1">ETH Balance</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">
                    <img
                      src="/assets/ethereum-original.svg"
                      className="max-w-[10px] w-full h-auto object-contain"
                      alt=""
                    />
                    0 ETH
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-cap mb-1">ETH VALUE</h4>
                <div>
                  <div className="flex gap-1 text-[14.4992px] font-normal">$0.00</div>
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
              <h3 className="text-[.9062rem] font-medium mb-0">More Info</h3>
              <div>
                <h4 className="text-cap mb-1">Private Name Tags</h4>
                <div>
                  <a
                    href="#"
                    className="rounded-full px-4 py-1 text-[#212529] bg-white text-sm border border-[#e9ecef] border-dashed transition-all hover:bg-[#e9ecef]"
                  >
                    + Add
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-cap mb-1">Contract Creator</h4>
                <div className="flex gap-1 items-center">
                  <a href="" className="text-[#0784c3] text-[14.4992px]">
                    0xED0d9992...554A10D4D
                  </a>
                  <a href="#">
                    <img src="/assets/copy.png" alt="" />
                  </a>
                  <span className="text-[#6c757d] text-nowrap"> at txn </span>
                  <a href="" className="text-[#0784c3] truncate max-w-[7rem] text-[14.4992px]">
                    0x4398d6154df42d40afdf37b4563fd8ba2328c6092d8fc69427d7c6af6cd23051
                  </a>
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
            <div className="flex flex-col   p-[1rem]">
              <h3 className="text-[.9062rem] font-medium mb-1">Multichain Info</h3>
              <div className="mb-3">
                <a
                  href=""
                  className="py-[.3rem] px-[.75rem] text-[#081D35] bg-[#e9ecef] rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]"
                >
                  <span className="font-medium">$0</span>
                  (Multichain Portfolio)
                </a>
              </div>
              <h3 className="mb-3 multichain-dropdown text-[14.4992px] font-normal">No addresses found</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
