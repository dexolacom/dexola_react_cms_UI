'use client';

import Image from 'next/image';
import { HeaderWrapper, Blank, HeaderTitle, Logo } from './header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Logo>
          <Image src="/logo.svg" alt="Logo" width={23} height={12} priority />
        </Logo>
        <HeaderTitle>
          Cracking
          <br /> the Innovation Code<Blank>_</Blank>
        </HeaderTitle>
        <p>Dexola is a blockchain development consultancy, empowered by </p>
        <p>210 Middleton st, Nashville Tennessee 37210, US</p>
      </div>
      <button>Contact us</button>
    </HeaderWrapper>
  );
};

export default Header;
