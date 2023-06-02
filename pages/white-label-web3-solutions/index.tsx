'use client';

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import Web3Solutions from './web3Solutions';

export default function WhiteLabelWeb3() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <Web3Solutions />
      <Footer />
    </RootLayout>
  );
}
