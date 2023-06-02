'use client';

import "../../src/app/globals.css";

import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Audits from './audits';
import Footer from '../footer/footer';

export default function ContractAudits() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <Audits />
      <Footer />
    </>
  );
}
