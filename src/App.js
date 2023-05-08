import React, { useState, useEffect } from 'react';


import './styles.css';
import ItemPage from './ItemPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {
//   "link": "https://nimbusplatform.io/",
//   "categories": [
//     "Swap",
//     "Staking",
//     "NFT",
//     "P2P",
//     "DeX",
//     "Ethereum",
//     "Binance"
//   ],
//   "summary": "Nimbus Platform, a DeFi solutions provider, strives to build a user-friendly platform that combines multiple financial instruments. Our team developed smart contracts, backend and frontend solutions, and performed full product testing. We delivered over a dozen products, including affiliate programs, a swap engine, staking scenarios, governance, lending/borrowing ecosystem, cross-chain token wrapping, P2P exchange, financial derivative NFT token, and cash flow analytics. As a result, Nimbus Platform received a comprehensive DeFi platform that outperforms many big competitors in functionality and continues to evolve successfully.",
//   "situation": "Nimbus Platform, a DeFi solutions provider, strives to build a user-friendly platform that combines multiple financial instruments. Our team developed smart contracts, backend and frontend solutions, and performed full product testing. We delivered over a dozen products, including affiliate programs, a swap engine, staking scenarios, governance, lending/borrowing ecosystem, cross-chain token wrapping, P2P exchange, financial derivative NFT token, and cash flow analytics. As a result, Nimbus Platform received a comprehensive DeFi platform that outperforms many big competitors in functionality and continues to evolve successfully.",
//   "task": "Nimbus Platform, a DeFi solutions provider, strives to build a user-friendly platform that combines multiple financial instruments. Our team developed smart contracts, backend and frontend solutions, and performed full product testing. We delivered over a dozen products, including affiliate programs, a swap engine, staking scenarios, governance, lending/borrowing ecosystem, cross-chain token wrapping, P2P exchange, financial derivative NFT token, and cash flow analytics. As a result, Nimbus Platform received a comprehensive DeFi platform that outperforms many big competitors in functionality and continues to evolve successfully.",
//   "action": "Nimbus Platform, a DeFi solutions provider, strives to build a user-friendly platform that combines multiple financial instruments. Our team developed smart contracts, backend and frontend solutions, and performed full product testing. We delivered over a dozen products, including affiliate programs, a swap engine, staking scenarios, governance, lending/borrowing ecosystem, cross-chain token wrapping, P2P exchange, financial derivative NFT token, and cash flow analytics. As a result, Nimbus Platform received a comprehensive DeFi platform that outperforms many big competitors in functionality and continues to evolve successfully.",
//   "result": "As a result of our efforts, Nimbus Platform successfully operates their comprehensive DeFi platform with a wider range of functionality than many big competitors. The platform continues to evolve based on the foundation laid by our efforts. By addressing both the technical and business challenges, we helped Nimbus to achieve their goal to make an intuitive and versatile platform that caters to various users in the crypto market.",
//   "actionList": [
//     "three types of affiliate programs,",
//     "a swap engine with a supporting project affiliate program,",
//     "staking family (up to 10 different staking scenarios),",
//     "governance,",
//     "lending/borrowing ecosystem,",
//     "cross-chain token wrapping,",
//     "projects P2P exchange,",
//     "financial derivative NFT token,",
//     "admin dashboard, and",
//     "full project’s cash flow analytics.",
//     "Upon request, we also prepared the documentation package."
//   ],
//   "technology_stack": {
//     "backend": [
//       "Node.js,",
//       "web3.js,",
//       "Sequelize,",
//       "Apollo-Client,",
//       "GraphQL,",
//       "LogDNA,"
//     ],
//     "network": [
//       "Ethereum",
//       "Binance"
//     ],
//     "database": [
//       "PostgreSQL"
//     ],
//     "blockchain": [
//       "Solidity",
//       "Hardhat",
//       "Node.js",
//       "ethers.js"
//     ],
//     "frontend": [
//       "React.js",
//       "web3.js"
//     ],
//     "infrastructure": [
//       "GitHub"
//     ]
//   }
// }
