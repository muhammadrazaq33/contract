import React from 'react';

export const Analytics = () => {
  return (
    <div>
      <div
        className="card border border-[#e9ecef] card p-5 mb-3 rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="mb-3">
          <button
            onClick={() => setActiveTab('Transfers')}
            className={`py-[.3rem] px-[.75rem]  text-white bg-[#0784c3] 
            rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#0670a6]`}
          >
            <span className="font-medium">Token Contract Overview</span>
          </button>
        </div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-[.9062rem] font-medium">Time Series: Token Contract Overview</h4>
          <div class="text-[#6c757d] text-[14.4992px]">
            <span id="addressdisplay_1">Tue 16, Jul 2024 - Tue 23, Jul 2024</span>
          </div>
        </div>
        {/* <hr class="my-0" /> */}
        {/* <div className="grid grid-cols-12">
          <div className="md:col-span-6 lg:col-span-3 col-span-12 pt-3 px-[1.5rem]">
            <div>
              <h5 className="text-[.9062rem] font-bold flex items-center mb-1">
                <div className="h-[14.5px] w-[14.5px] rounded-[50%] bg-[#0784c3] me-1"></div>
                <span id="subtitle_1">ETH Highest Balance</span>
              </h5>
              <div class="text-[#6c757d] text-[.875em] mb-1">
                <span id="high_bal_eth_date">On Tue 16, Jul 2024</span>
              </div>
              <div class="font-bold text-[#6c757d] text-[14.4992px]">
                <span id="high_bal_eth_value">0 ETH</span>
              </div>
              <hr class="block lg:hidden mt-3 mb-0" />
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 pt-3 px-[1.5rem] border-l border-[#e9ecef]">
            <div>
              <h5 className="text-[.9062rem] font-bold flex items-center mb-1">
                <div className="h-[14.5px] w-[14.5px] rounded-[50%] bg-[#0784c3] me-1"></div>
                <span id="subtitle_1">ETH Lowest Balance</span>
              </h5>
              <div class="text-[#6c757d] text-[.875em] mb-1">
                <span id="high_bal_eth_date">On Tue 16, Jul 20244</span>
              </div>
              <div class="font-bold text-[#6c757d] text-[14.4992px]">
                <span id="high_bal_eth_value">0 ETH</span>
              </div>
              <hr class="block lg:hidden mt-3 mb-0" />
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 pt-3 px-[1.5rem] border-l border-[#e9ecef]">
            <div>
              <h5 className="text-[.9062rem] font-bold flex items-center mb-1">
                <div className="h-[14.5px] w-[14.5px] rounded-sm bg-[#434348] me-1"></div>
                <span id="subtitle_1">USD Highest Value</span>
              </h5>
              <div class="text-[#6c757d] text-[.875em] mb-1">
                <span id="high_bal_eth_date">On Tue 16, Jul 2024</span>
              </div>
              <div class="font-bold text-[#6c757d] text-[14.4992px]">
                <span id="high_bal_eth_value">USD 0</span>
              </div>
              <hr class="block lg:hidden mt-3 mb-0" />
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 pt-3 px-[1.5rem] border-l border-[#e9ecef]">
            <div>
              <h5 className="text-[.9062rem] font-bold flex items-center mb-1">
                <div className="h-[14.5px] w-[14.5px] rounded-sm bg-[#434348] me-1"></div>
                <span id="subtitle_1">USD Lowest Value</span>
              </h5>
              <div class="text-[#6c757d] text-[.875em] mb-1">
                <span id="high_bal_eth_date">On Tue 16, Jul 2024</span>
              </div>
              <div class="font-bold text-[#6c757d] text-[14.4992px]">
                <span id="high_bal_eth_value">USD 0</span>
              </div>
              <hr class="block lg:hidden mt-3 mb-0" />
            </div>
          </div>
        </div> */}
        {/* <hr class="my-0" /> */}
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
