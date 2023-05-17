'use client';

import Image from 'next/image';
import { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { ContentText } from '../../components/PageContainer/styles';
import {
  CompanyTypesItem,
  TypesItemWrapper,
  TypesText,
  TypesTitle,
} from './styles';

const Partnership = () => {
  const [blockId, setBlockId] = useState<string>('');
  const clickHandler = (e: React.SyntheticEvent) => {
    const id = e?.currentTarget?.id;
    console.log('e.currentTarget -> ', id);
    setBlockId(id);
  };

  return (
    <PageContainer title={'Partnership'}>
      <ContentText>
        By forging strategic partnerships, Dexola aims to create a robust
        network of industry-leading professionals committed to delivering the
        best possible solutions and services to our clients. Together, we can
        drive innovation, foster growth, and contribute to the ongoing success
        of the blockchain and cryptocurrency industry.
      </ContentText>
      <ContentText>
        We are actively seeking to establish mutually beneficial relationships
        with various types of businesses, working together to provide
        comprehensive, holistic services to our clients.
      </ContentText>
      <ContentText>
        We are eager to partner with the following types of companies:
      </ContentText>
      <TypesItemWrapper>
        <CompanyTypesItem id={'1'} onClick={e => clickHandler(e)}>
          <TypesTitle>Crypto Marketing Agencies</TypesTitle>
          <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
        </CompanyTypesItem>
        <TypesText show={false}>
          By partnering with Dexola, marketing agencies can offer their clients
          robust and secure blockchain solutions, enhancing the overall
          effectiveness of their marketing campaigns and solidifying their
          position as an all-in-one crypto marketing provider.
        </TypesText>
      </TypesItemWrapper>
      <CompanyTypesItem>
        <TypesTitle>Funds and Accelerators</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
      <CompanyTypesItem>
        <TypesTitle>Software Development Companies</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
      <CompanyTypesItem>
        <TypesTitle>Companies Providing Crypto Legal Services</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
      <CompanyTypesItem>
        <TypesTitle>Blockchain Consultancies</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
      <CompanyTypesItem>
        <TypesTitle>Data Security and Privacy Firms</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
      <CompanyTypesItem>
        <TypesTitle>Token Economics and Tokenomics Specialists</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
    </PageContainer>
  );
};

export default Partnership;
