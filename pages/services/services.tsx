'use client';

import {
  BlockWrapper,
  ContentBox,
  ContentText,
  Sidebar,
  Title,
} from '../styles';

const Services = () => {
  return (
    <BlockWrapper>
      <Sidebar>
        <Title>Services</Title>
      </Sidebar>
      <ContentBox>
        <ContentText>
          Our experience covers most areas of DeFi as the underlying
          technologies of most dApps are pieces of the same puzzle. We
          specialize in EVM-compatible blockchains and have extensive experience
          in Ethereum, Binance Chain, Fantom and Polygon.
        </ContentText>
        <ContentText>
          Our R&D team is busy exploring newly emerging technology areas and
          building sample projects based on them. While we may not have direct
          experience with real-life projects in certain domains, our extensive
          internal research ensures that we are well-versed in these fields.
        </ContentText>
      </ContentBox>
    </BlockWrapper>
  );
};

export default Services;
