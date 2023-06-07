'use client';

import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Contact from './contact';

import '../../src/app/globals.css';
import { MyContextProvider } from '../../context/AppContext';

export default function HowWork() {
  return (
    <MyContextProvider>
      <Contact />
      <HeaderSmall isWhite={true} isFormOpen={true} />
    </MyContextProvider>
  );
}
