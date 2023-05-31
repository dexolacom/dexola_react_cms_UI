'use client';

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Audits from './audits';
import Footer from '../footer/footer';

export default function Home3() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <Audits />
      <Footer />
    </RootLayout>
  );
}
