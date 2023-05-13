'use client';

import {
  AboutSubtitle,
  AdvertWrapper,
  AdvertBlock,
  AdvertAmount,
  AdvertText,
} from './about.styles';

import {
  BlockWrapper,
  ContentBox,
  ContentText,
  Sidebar,
  Title,
} from './styles';

const About = () => {
  return (
    <BlockWrapper>
      <Sidebar>
        <Title>About</Title>
      </Sidebar>
      <ContentBox>
        <AboutSubtitle>About Dexola</AboutSubtitle>
        <ContentText>
          Dexola is an autonomous blockchain software development branch of
          Trinetix, a globally trusted digital partner serving enterprise
          clients. Dexola focuses on startups and helps them build their
          blockchains and ecosystem applications by providing the same level of
          consulting and delivery services enterprise clients are used to.
        </ContentText>
        <ContentText>
          The autonomy of Dexola as a separate company and brand allows for an
          agile approach, proper mindset and culture suitable for small and
          medium businesses.
        </ContentText>

        <AdvertWrapper>
          <AdvertBlock>
            <AdvertAmount>40+</AdvertAmount>
            <AdvertText>Success Projects</AdvertText>
          </AdvertBlock>
          <AdvertBlock>
            <AdvertAmount>30+</AdvertAmount>
            <AdvertText>Experienced Developers</AdvertText>
          </AdvertBlock>
          <AdvertBlock>
            <AdvertAmount>5</AdvertAmount>
            <AdvertText>Years of excellence</AdvertText>
          </AdvertBlock>
          <AdvertBlock>
            <AdvertAmount>800+</AdvertAmount>
            <AdvertText>
              Development and design professionals in Trinetix
            </AdvertText>
          </AdvertBlock>
        </AdvertWrapper>

        <AboutSubtitle>Synergy with Trinetix</AboutSubtitle>
        <ContentText>
          Dexola is deeply integrated with Trinetix Group. Thus we have our own
          certified development and design teams that focus on blockchain, this
          strategic partnership gives us access to more than 800 professionals
          in other areas of development, design, legal and operations that we
          can also offer as a part of our service.
          <br /> As a part of this collaboration as a supplementary service we
          offer mobile and web apps development, intelligent automation and
          digital assistants, cloud enablement and user experience design.
        </ContentText>
      </ContentBox>
    </BlockWrapper>
  );
};

export default About;
