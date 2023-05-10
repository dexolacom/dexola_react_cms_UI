'use client';

import Image from 'next/image';
import {
  HeaderWrapper,
  Blank,
  HeaderTitle,
  Logo,
  OurAddress,
  Description,
} from './header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Image src="/logo.svg" alt="Logo" width={64} height={14} priority />
      </Logo>
      <Description>
        <HeaderTitle>
          Cracking
          <br /> the Innovation Code<Blank>_</Blank>
        </HeaderTitle>
        <p>Dexola is a blockchain development consultancy, empowered by </p>
      </Description>
      <OurAddress>210 Middleton st, Nashville Tennessee 37210, US</OurAddress>
    </HeaderWrapper>
  );
};

export default Header;
