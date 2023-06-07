// 'use client';

import '../../src/app/globals.css';

import { MyContextProvider } from '../../context/AppContext';
import ContactButton from '../../components/ContactUs/ContactUs';
import Footer from '../../components/footer/footer';
import VideoBG from '../../components/VideoBG/VideoBG';
import HeaderSmall from '../HeaderSmall/headerSmall';

export default function SmallContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isWhite = true; // TEMP!!
  return (
    <MyContextProvider>
      <HeaderSmall isWhite={isWhite} />
      <ContactButton />
      <VideoBG opacity={0.1} />
      {children}
      <Footer />
    </MyContextProvider>
  );
}
