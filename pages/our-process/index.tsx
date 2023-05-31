'use client';

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import OurProcess from './OurProcess';

export default function Home3() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <OurProcess />
      <Footer />
    </RootLayout>
  );
}