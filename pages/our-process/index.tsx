'use client';

import "../../src/app/globals.css";

import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import OurProcess from './ourProcess';

export default function HowWork() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <OurProcess />
      <Footer />
    </>
  );
}
