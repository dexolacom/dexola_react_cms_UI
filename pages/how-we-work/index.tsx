'use client';

import "../../src/app/globals.css";

import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../footer/footer';
import HowWeWork from './howWeWork';

export default function HowWork() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <HowWeWork />
      <Footer />
    </>
  );
}
