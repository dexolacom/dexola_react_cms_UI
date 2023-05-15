'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { ContentText } from '../../components/PageContainer/styles';
import { CompanyTypesItem, TypesTitle } from './styles';

const Partnership = () => {
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
      <CompanyTypesItem>
        <TypesTitle>Crypto Marketing Agencies</TypesTitle>
        <Image src={'/plus.svg'} alt="plus" width={24} height={24} priority />
      </CompanyTypesItem>
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
