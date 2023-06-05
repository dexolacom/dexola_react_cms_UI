"use client";

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import AnaliticsTools from './analiticsTools';

export default function Analitics() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <AnaliticsTools />
      <Footer />
    </>
  );
}
