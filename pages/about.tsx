'use client';

import {
  AboutSubtitle,
  AdvertWrapper,
  AdvertBlock,
  AdvertAmount,
  AdvertText,
} from './about.styles';

import { ContentText } from '../components/PageContainer/styles';
import PageContainer from '../components/PageContainer/PageWrapper';
import { ADVERT_INFO } from '../constants/textConstants';

const About = () => {
  return (
    <PageContainer title={'About'}>
      <AboutSubtitle>About Dexola</AboutSubtitle>
      <ContentText>
        Dexola is an autonomous blockchain software development branch of
        Trinetix, a globally trusted digital partner serving enterprise clients.
        Dexola focuses on startups and helps them build their blockchains and
        ecosystem applications by providing the same level of consulting and
        delivery services enterprise clients are used to.
      </ContentText>
      <ContentText>
        The autonomy of Dexola as a separate company and brand allows for an
        agile approach, proper mindset and culture suitable for small and medium
        businesses.
      </ContentText>

      <AdvertWrapper>
        {ADVERT_INFO &&
          ADVERT_INFO.length &&
          ADVERT_INFO.map(el => (
            <AdvertBlock key={el.description}>
              <AdvertAmount>{el.amount}</AdvertAmount>
              <AdvertText>{el.description}</AdvertText>
            </AdvertBlock>
          ))}
      </AdvertWrapper>

      <AboutSubtitle>Synergy with Trinetix</AboutSubtitle>
      <ContentText>
        Dexola is deeply integrated with Trinetix Group. Thus we have our own
        certified development and design teams that focus on blockchain, this
        strategic partnership gives us access to more than 800 professionals in
        other areas of development, design, legal and operations that we can
        also offer as a part of our service.
        <br /> As a part of this collaboration as a supplementary service we
        offer mobile and web apps development, intelligent automation and
        digital assistants, cloud enablement and user experience design.
      </ContentText>
    </PageContainer>
  );
};

export default About;
