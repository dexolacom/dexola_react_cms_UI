'use client';
import "../../src/app/globals.css";

import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import Web3Solutions from './web3Solutions';

export default function WhiteLabelWeb3() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <Web3Solutions />
      <Footer />
    </>
  );
}
