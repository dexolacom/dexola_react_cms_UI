'use client';

import Image from 'next/image';
import {
  HeaderWrapper,
  Blank,
  HeaderTitle,
  SubTitle,
  // Logo,
  OurAddress,
  Description,
  TopBox,
  LogoTrinetix,
} from './header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <TopBox>
        {/* <Logo> */}
        <Image src="/logo.svg" alt="Logo" width={64} height={14} priority />
        {/* </Logo> */}
        {/* </Menu> */}
        <Image src="/menu.svg" alt="menu" width={40} height={40} priority />
        {/* </Menu> */}
      </TopBox>
      <Description>
        <HeaderTitle>
          Cracking
          <br /> the Innovation Code<Blank>_</Blank>
        </HeaderTitle>
        <SubTitle>Dexola is a blockchain development</SubTitle>
        <SubTitle>
          consultancy, empowered by
          <LogoTrinetix />
        </SubTitle>
        <Image src="/line_63.svg" alt="Line" width={12} height={80} priority />
      </Description>
      <OurAddress>210 Middleton st, Nashville Tennessee 37210, US</OurAddress>
    </HeaderWrapper>
  );
};

export default Header;
