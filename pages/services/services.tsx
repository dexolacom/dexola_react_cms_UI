'use client';

import Image from 'next/image';
import {
  ContentText,
  MainKatinParagraph,
} from '../../components/PageContainer/styles';
import { ImagesWrapper, ImagesColumn, LinksBlock, LinkItem } from './styles';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import PageContainer from '../../components/PageContainer/PageWrapper';

const Services = () => {
  return (
    <PageContainer title={'Services'}>
      <ContentText>
        Our experience covers most areas of DeFi as the underlying technologies
        of most dApps are pieces of the same puzzle. We specialize in
        EVM-compatible blockchains and have extensive experience in Ethereum,
        Binance Chain, Fantom and Polygon.
      </ContentText>
      <ContentText>
        Our R&D team is busy exploring newly emerging technology areas and
        building sample projects based on them. While we may not have direct
        experience with real-life projects in certain domains, our extensive
        internal research ensures that we are well-versed in these fields.
      </ContentText>
      <ImagesWrapper>
        <ImagesColumn>
          <ServiceCard
            imgPath={'/img_1_1_3.png'}
            title={'Smart Contracts Development'}
            color={'#EB3795'}
          />
          <ServiceCard
            imgPath={'/img_3_1_3.png'}
            title={'Analytics and Crypto Trading Tools'}
            color={'#269EC1'}
          />
        </ImagesColumn>
        <ImagesColumn>
          <ServiceCard
            imgPath={'/img_2_1_3.png'}
            title={'Smart Contract Audits'}
            color={'#8642CA'}
          />
          <ServiceCard
            imgPath={'/img_4_1_3.png'}
            title={'Web3 White Label Solutions'}
            color={'#2CC0A6'}
          />
        </ImagesColumn>
      </ImagesWrapper>
      <LinksBlock>
        <LinkItem>
          <MainKatinParagraph>R&D</MainKatinParagraph>
          <Image
            src={'/arrow_rb.svg'}
            alt="arrow"
            width={13}
            height={13}
            priority
          />
        </LinkItem>
        <LinkItem>
          <MainKatinParagraph>How we Work</MainKatinParagraph>
          <Image
            src={'/arrow_rb.svg'}
            alt="arrow"
            width={13}
            height={13}
            priority
          />
        </LinkItem>
        <LinkItem>
          <MainKatinParagraph>Our Process</MainKatinParagraph>
          <Image
            src={'/arrow_rb.svg'}
            alt="arrow"
            width={13}
            height={13}
            priority
          />
        </LinkItem>
      </LinksBlock>
    </PageContainer>
  );
};

export default Services;
