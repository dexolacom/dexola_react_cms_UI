'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import {
  AddressColumn,
  ArrowBlock,
  ColumnText,
  ColumnTitle,
  FooterRow,
  TechItemColumn,
} from './styles';
import RunningLine from '../../components/RunningLine/RunningLine';
import FooterRow1 from './FooterRow';

interface IFooterInfo {
  title: string;
  firstColumn: string[];
  secondColumn: string[];
}

const TEMP_FOOTER_INFO: IFooterInfo[] | [] = [
  {
    title: 'About',
    firstColumn: ['About Dexola'],
    secondColumn: ['Synergy with Trinetix'],
  },
  {
    title: 'Services',
    firstColumn: [
      'Smart Contracts Devel...',
      'Analytics and Crypto...',
      'How we Work',
    ],
    secondColumn: ['Smart Contract Audit', 'R&D', 'Our Process'],
  },
  {
    title: 'Cases',
    firstColumn: ['Featured Case 1', 'Featured Case 3'],
    secondColumn: ['Featured Case 2', 'All Cases'],
  },
];

const Footer = () => {
  const insert = () =>
    TEMP_FOOTER_INFO &&
    TEMP_FOOTER_INFO.length > 0 &&
    TEMP_FOOTER_INFO.map((item, idx) => (
      <FooterRow1 key={`${idx}`} footerInfo={item} />
    ));

  console.log('first -> ', insert());
  // insert();

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
        <>
          {TEMP_FOOTER_INFO &&
            TEMP_FOOTER_INFO.length > 0 &&
            TEMP_FOOTER_INFO?.map((item: IFooterInfo, idx) => (
              <FooterRow1 key={`${idx}`} footerInfo={item} />
            ))}
        </>
        <FooterRow>
          <TechItemColumn>
            <ColumnTitle>About</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>About Dexola</ColumnText>
            <ArrowBlock className="linkArrow"></ArrowBlock>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Synergy with Trinetix</ColumnText>
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
