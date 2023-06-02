'use client';
import "../../src/app/globals.css";

import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../footer/footer';
import DevelopContract from './development';

export default function Development() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <DevelopContract />
      <Footer />
    </>
  );
}
