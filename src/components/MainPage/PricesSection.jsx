import React from 'react';
import navIcon from "../../../public/assets/algorand-algo-icon.svg";
import transaction2 from "../assets1/transaction-2.svg";
import transaction3 from "../assets1/transaction-3.svg";
import transaction4 from "../assets1/transaction-4.svg";

export const PricesSection = () => {
  return (
    <div className=" ">
      <div
        className="card py-10  mb-4 mt-[-3rem] rounded-[0.75rem] bg-[#23262F]"
        style={{ boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)" }}
      >
        <div className="grid grid-cols-12 gap-4 md:gap-0">
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px]">
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={navIcon}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  ALGO PRICE
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $3,259.20
                  <span class="text-[white]  text-[16px]">
                    {" "}
                    @ 0.047952 BTC{" "}
                  </span>
                  <span class="text-[#dc3545]  text-[16px]">(-0.28%)</span>
                </a>
              </div>
            </div>
            <hr class="my-5" />
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction3}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  MARKET CAP
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $3,259.20{" "}
                  <span class="text-[white] text-[16px] ">
                    {" "}
                    @ 0.047952 BTC{" "}
                  </span>
                  <span class="text-[#46DB78] text-[.875em]">(-0.28%)</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction2}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  TRANSACTIONS
                </div>
                <a
                  class="text-[white] hover:text-[#066a9c] text-[16px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  2,449.39 M
                  <span class="text-[white] text-[16px] "> (14.5 TPS)</span>
                </a>
              </div>
              <div className="text-end">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  MED GAS PRICE
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  1 Gwei <span class="text-[white] text-[16px] "> ($0.36)</span>
                </a>
              </div>
            </div>
            <hr class="my-5" />
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction4}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  LAST FINALIZED BLOCK
                </div>
                <a
                  class="text-[white] hover:text-[#066a9c] text-[16px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363522
                </a>
              </div>
              <div className="text-end">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  LAST SAFE BLOCK
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363553
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div class="text-[#A5A5AB] text-[14] mb-[1px]">
              TRANSACTION HISTORY IN 14 DAYS
            </div>
            <div className="w-100 pt-2 h-[105px]">
              <img
                src="/assets/chart1.png"
                className="max-w-full h-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
