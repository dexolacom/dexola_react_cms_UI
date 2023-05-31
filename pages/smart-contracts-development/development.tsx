'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { DEVELOPMENT_CONTENT_ARRAY } from '../../constants/textConstants';
import AuditCardItem from '../smart-contract-audits/auditsCardItem';
import styles from '../smart-contract-audits/styles.module.css';

const DevelopContract = () => {
  return (
    <PageContainer title={'Smart Contracts Development'} link={'/#Services'}>
      <figure className={styles.imageWrapper}>
        <Image
          src={'/Img_1_1-3-768x768.png'}
          alt="Audits"
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </figure>
      <>
        {DEVELOPMENT_CONTENT_ARRAY &&
          DEVELOPMENT_CONTENT_ARRAY.length > 0 &&
          DEVELOPMENT_CONTENT_ARRAY.map(el => (
            <AuditCardItem content={el} key={el.title} />
          ))}
      </>
    </PageContainer>
  );
};

export default DevelopContract;
