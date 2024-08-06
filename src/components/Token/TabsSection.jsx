import React, { useState } from 'react';
import { Transaction } from './Transaction';
import { TokenTransfer } from './TokenTransfer';
import { Events } from './Events';
import { MultichainPortfolio } from './MultichainPortfolio';
import { Analytics } from './Analytics';
import { Contract } from './Contract';

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('Transfers');

  const renderContent = () => {
    switch (activeTab) {
      case 'Transfers':
        return <Transaction />;
      case 'Holders':
        return <TokenTransfer />;
      case 'Info':
        return <Events />;
      case 'Contract':
        return <Contract />;
      case 'Analytics':
        return <Analytics />;
      case 'Cards':
        return <MultichainPortfolio />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex pb-3 items-center flex-wrap">
        <div className="overflow-x-auto gap-2 pt-4 flex flex-nowrap flex-grow w-full">
          <button
            onClick={() => setActiveTab('Transfers')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Transfers' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Transfers</span>
          </button>
          <button
            onClick={() => setActiveTab('Holders')}
            className={`py-[.3rem] px-[.75rem] text-nowrap ${
              activeTab === 'Holders' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Holders</span>
          </button>
          <button
            onClick={() => setActiveTab('Info')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Info' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Info</span>
          </button>
          <button
            onClick={() => setActiveTab('Contract')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Contract' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Contract</span>
          </button>

          <button
            onClick={() => setActiveTab('Analytics')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Analytics' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab('Cards')}
            className={`py-[.3rem] text-nowrap px-[.75rem] ${
              activeTab === 'Cards' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Cards</span>
          </button>
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};
