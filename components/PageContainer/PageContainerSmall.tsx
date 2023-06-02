'use client';

import '../../src/app/globals.css';

import ContactButton from '../../components/ContactUs/ContactUs';
import Footer from '../../components/footer/footer';
import VideoBG from '../../components/VideoBG/VideoBG';

export default function SmallContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContactButton />
      <VideoBG opacity={0.1} isWhite={true} />
      {children}
      <Footer />
    </>
  );
}
