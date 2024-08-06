import React, { useState } from 'react';
import { Transaction } from './Transaction';
import { TokenTransfer } from './TokenTransfer';
import { Events } from './Events';
import { MultichainPortfolio } from './MultichainPortfolio';
import { Analytics } from './Analytics';
import { Contract } from './Contract';

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('Transactions');

  const renderContent = () => {
    switch (activeTab) {
      case 'Transactions':
        return <Transaction />;
      case 'TokenTransfers':
        return <TokenTransfer />;
      case 'Contract':
        return <Contract />;
      case 'Events':
        return <Events />;
      case 'Analytics':
        return <Analytics />;
      case 'MultichainPortfolio':
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
            onClick={() => setActiveTab('Transactions')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Transactions' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Transactions</span>
          </button>
          <button
            onClick={() => setActiveTab('TokenTransfers')}
            className={`py-[.3rem] px-[.75rem] text-nowrap ${
              activeTab === 'TokenTransfers' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Token Transfers (ERC-20)</span>
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
            onClick={() => setActiveTab('Events')}
            className={`py-[.3rem] px-[.75rem] ${
              activeTab === 'Events' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Events</span>
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
            onClick={() => setActiveTab('MultichainPortfolio')}
            className={`py-[.3rem] text-nowrap px-[.75rem] ${
              activeTab === 'MultichainPortfolio' ? 'text-white bg-[#0784c3]' : 'text-[#081D35] bg-[#e9ecef]'
            } rounded-[0.375rem] text-[12.5625px] transition-all hover:bg-[#dee2e6]`}
          >
            <span className="font-medium">Multichain Portfolio</span>
          </button>
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};
