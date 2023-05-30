'use client';

import RootLayout from '@/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';

import Footer from '../footer/footer';
import RandD from './RandD';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';

export default function Home() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <RandD />
      <Footer />
    </RootLayout>
  );
}
