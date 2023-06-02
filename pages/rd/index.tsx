'use client';

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../footer/footer';
import RandD from './RandD';

export default function HowWork() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <RandD />
      <Footer />
    </RootLayout>
  );
}
