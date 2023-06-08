'use client';

import CasesSection from '../../components/cases/casesSection';
import ContactButton from '../../components/ContactUs/ContactUs';
import About from '../../components/about/about';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Partnership from '../../components/partnership/partnership';
import Services from '../../components/services/services';
import TechStack from '../../components/techStack/techStack';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import { useEffect, useState } from 'react';

export default function Landing() {
  const [isWhite, setIsWhite] = useState<boolean>(false);
  const { innerHeight } = window;
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.scrollY || window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (innerHeight - scrollPosition < 44 && !isWhite) {
      setIsWhite(true);
    }

    if (innerHeight - scrollPosition > 44 && isWhite) {
      setIsWhite(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={isWhite} />
      <Header />
      <About />
      <Services />
      <CasesSection />
      <TechStack />
      <Partnership />
      <Footer />
    </>
  );
}
