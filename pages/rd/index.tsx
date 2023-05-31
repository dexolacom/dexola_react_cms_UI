'use client';

import RootLayout from '../../src/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../../components/footer/footer';
import RandD from './RandD';
import Home from '../../src/app/page';

function RD() {
  return (
    // <RootLayout>
    //   <>
    //     <ContactButton />
    //     <HeaderSmall isWhite={true} />
    //     <RandD />
    //     <Footer />
    //   </>
    // </RootLayout>
    <Home>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <RandD />
      <Footer />
    </Home>
  );
}

export default RD;
