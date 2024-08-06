import React from 'react';
import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { TabsSection } from './TabsSection';

export const Token = () => {
  return (
    <>
      <div className=" bg-[#FAFBFD] 2xl:container md:px-[20px] mx-auto px-[15px]  ">
        <Header />
        <div className="pt-2 pb-12">
          <ContentSection />
          <TabsSection />
        </div>
      </div>
    </>
  );
};
