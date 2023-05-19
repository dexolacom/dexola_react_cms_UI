'use client';

import { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { ContentText } from '../../components/PageContainer/styles';
import TypeItem from './typeItem';

interface ITypeItem {
  title: string;
  text: string;
}

const TYPE_COMPANIES_INFO: ITypeItem[] = [
  {
    title: 'Crypto Marketing Agencies',
    text: 'By partnering with Dexola, marketing agencies can offer their clients robust and secure blockchain solutions, enhancing the overall effectiveness of their marketing campaigns and solidifying their position as an all-in-one crypto marketing provider.',
  },
  {
    title: 'Funds and Accelerators',
    text: 'Other test text #2 must be here.',
  },
  {
    title: 'Software Development Companies',
    text: 'Other test text #3 must be here.',
  },
  {
    title: 'Companies Providing Crypto Legal Services',
    text: 'Other test text #4 must be here.',
  },
  {
    title: 'Blockchain Consultancies',
    text: 'Other test text #5 must be here.',
  },
  {
    title: 'Data Security and Privacy Firms',
    text: 'Other test text #6 must be here.',
  },
  {
    title: 'Token Economics and Tokenomics Specialists',
    text: 'Other test text #7 must be here.',
  },
];
const INIT_TYPE_STATUS = Array(7).fill(false);

const Partnership = () => {
  const [typeStatus, setTypeStatus] = useState<boolean[]>(INIT_TYPE_STATUS);

  const clickHandler = (e: React.SyntheticEvent) => {
    const id = +e?.currentTarget?.id;
    if (typeStatus.length > 0) {
      const newStatusArray = typeStatus.map((el, idx) =>
        idx === id && !el ? true : false,
      );
      setTypeStatus(newStatusArray);
    }
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
      <>
        {TYPE_COMPANIES_INFO &&
          TYPE_COMPANIES_INFO.length > 0 &&
          TYPE_COMPANIES_INFO.map((item, idx) => (
            <TypeItem
              index={idx}
              title={item.title}
              text={item.text}
              clickHandler={clickHandler}
              showStatus={typeStatus[idx]}
            />
          ))}
      </>
    </PageContainer>
  );
};

export default Partnership;
