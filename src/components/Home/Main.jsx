import React from 'react';
import { Header } from './Header';
// import { ContentSection } from './ContentSection';
// import { TabsSection } from './TabsSection';
import { Explorer } from '../MainPage/Explorer';
import { PricesSection } from '../MainPage/PricesSection';
import { TransacstionsSection } from '../MainPage/TransacstionsSection';
import Dropdown from '../ui/Dropdown';

export const Main = () => {
  return (
    <>
      <div className=" bg-[#121212] 2xl:container md:px-[20px] mx-auto px-[15px]  ">
        <div className="">
          <Header />
        </div>
      </div>
      <Explorer />
      <Dropdown/>
      <div className="pb-20 2xl:container md:px-[20px] mx-auto px-[15px]">
        {/* <ContentSection /> */}
        {/* <TabsSection /> */}
        <PricesSection />
        <TransacstionsSection/>
      </div>
    </>
  );
};
