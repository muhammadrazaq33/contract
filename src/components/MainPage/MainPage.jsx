import React from 'react';
import { Explorer } from './Explorer';
import { PricesSection } from './PricesSection';
import { TransacstionsSection } from './TransacstionsSection';

export const MainPage = () => {
  return (
    <>
      <div>
        <Explorer />
        <div className="pb-20 2xl:container md:px-[20px] mx-auto px-[15px]  ">
          <PricesSection />
          <TransacstionsSection />
        </div>
      </div>
    </>
  );
};
