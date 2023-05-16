'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import {
  AddressColumn,
  // ArrowBlock,
  ColumnText,
  ColumnTitle,
  FooterRow,
  TechItemColumn,
} from './styles';
import RunningLine from '../../components/RunningLine/RunningLine';

const Footer = () => {
  return (
    <>
      <RunningLine />
      <PageContainer title={''}>
        <FooterRow>
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={64}
            height={14}
            priority
          />
        </FooterRow>
        <FooterRow>
          <TechItemColumn>
            <ColumnTitle>About</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>About Dexola</ColumnText>
            {/* <ArrowBlock className="linkArrow"></ArrowBlock> */}
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Synergy with Trinetix</ColumnText>
          </TechItemColumn>
        </FooterRow>
        <FooterRow>
          <TechItemColumn>
            <ColumnTitle>Services</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Smart Contracts Devel...</ColumnText>
            <ColumnText>Analytics and Crypto...</ColumnText>
            <ColumnText>How we Work</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Smart Contract Audit</ColumnText>
            <ColumnText>R&D</ColumnText>
            <ColumnText>Our Process</ColumnText>
          </TechItemColumn>
        </FooterRow>
        <FooterRow>
          <TechItemColumn>
            <ColumnTitle>Cases</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Featured Case 1</ColumnText>
            <ColumnText>Featured Case 3</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Featured Case 2</ColumnText>
            <ColumnText>All Cases</ColumnText>
          </TechItemColumn>
        </FooterRow>
        <FooterRow>
          <AddressColumn>
            <ColumnTitle>
              210 Middleton st, Nashville Tennessee 37210, US
            </ColumnTitle>
          </AddressColumn>
          <AddressColumn>
            <ColumnText>© 2023</ColumnText>
          </AddressColumn>
        </FooterRow>
      </PageContainer>
    </>
  );
};

export default Footer;
