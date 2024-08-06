import React from 'react';

export const MultichainPortfolio = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-12 gap-5">
        <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 col-span-12">
          <div className="card rounded-[.75rem] border border-[#e9ecef]">
            <div className="card-header p-3 border-b border-[#e9ecef]">
              <h3 className="text-[.9375rem] font-medium">Token Security Detection</h3>
            </div>
            <div className="flex flex-col p-4 gap-12">
              <div className="flex gap-1 items-center">
                <img src="/assets/empty-token.webp" className="max-w-[24px] h-[24px] w-full" alt="" />
                <span className="text-[12.6868px] font-medium">0xf15eB555...6c254EE28</span>
              </div>
              <div className="my-auto text-[14.4992px] font-normal">No security risks found</div>
              <div className="flex items-center text-[12.6868px] gap-2 mt-auto">
                Powered by
                <span class="flex items-center font-bold uppercase gap-1">
                  <img class="rounded-circle" width="20" src="/assets/goplus.webp" alt="" />
                  GoPlus
                </span>
              </div>
            </div>
            <div className="card-footer flex gap-2  p-2 bg-transparent border-t border-[#e9ecef]">
              <a
                href="#"
                className="w-full py-2 rounded-[0.375rem] text-center px-[0.5rem] text-[0.78515625rem] text-[#081D35] bg-[#e9ecef] transition-all hover:bg-[#dee2e6]"
              >
                Check Details
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 col-span-12">
          <div className="card rounded-[.75rem] border border-[#e9ecef]">
            <div className="card-header p-3 border-b border-[#e9ecef]">
              <h3 className="text-[.9375rem] font-medium">Supply Analysis</h3>
            </div>
            <div
              className="flex flex-col p-4 gap-12"
              style={{ background: 'linear-gradient(228.9deg,rgba(240,228,255,.7) 15%,#fafafa 75%)' }}
            >
              <div className="flex gap-1 items-center">
                <h3 className="text-[.9375rem] font-medium">Data Unavailable</h3>
              </div>
              <div className="my-auto text-[14.4992px] font-normal">
                No bubble map snapshot available to perform supply analysis
              </div>
              <div className="flex items-center text-[12.6868px] gap-2 mt-auto">
                Powered by
                <span class="flex items-center font-bold uppercase gap-1">
                  <img class="rounded-circle" width="20" src="/assets/bubblemaps.webp" alt="" />
                  BUBBLEMAPS
                </span>
              </div>
            </div>
            <div className="card-footer flex gap-2  p-2 bg-transparent border-t border-[#e9ecef]">
              <a
                href="#"
                className="w-full py-2 rounded-[0.375rem] text-center px-[0.5rem] text-[0.78515625rem] text-[#081D35] bg-[#e9ecef] transition-all hover:bg-[#dee2e6]"
              >
                View Other Maps
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 col-span-12">
          <div className="card rounded-[.75rem] border border-[#e9ecef] h-100">
            <div className="card-header p-3 border-b border-[#e9ecef]">
              <h3 className="text-[.9375rem] font-medium">Your Custom Card</h3>
            </div>
            <div className="flex items-center justify-center cursor-pointer min-h-[212px] h-full  ">
              <div className="text-center text-[#6c757d]">
                <div className="text-[1.875rem]">+</div>
                <div className="text-[14.4992px]">Add Your Card</div>
              </div>
            </div>
            <div className="card-footer flex gap-2  p-2 bg-transparent border-t border-[#e9ecef]">
              <a
                href="#"
                className="w-full py-2 rounded-[0.375rem] text-center px-[0.5rem] text-[0.78515625rem] text-[#081D35] bg-[#e9ecef] transition-all hover:bg-[#dee2e6]"
              >
                Add Your Card
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <img src="/assets/idea.png" alt="" />
        <span className="text-[12.5625px] " style={{ color: 'rgb(108, 117, 125)' }}>
          A token is a representation of an on-chain or off-chain asset. The token page shows information such as price,
          total supply, holders, transfers and social links. Learn more about this page in our{' '}
          <a href="#" className="text-[#0784c3]">
            Knowledge Base
          </a>
          .
        </span>
      </div>
    </div>
  );
};
