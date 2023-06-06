// 'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { SERVICES_CONTENT_INF0 } from '../../constants/textConstants';
import AuditCardItem from '../smart-contract-audits/auditsCardItem';
import styles from '../smart-contract-audits/styles.module.css';

const AnaliticsTools = () => {
  const ANALITICSTOOLS_CONTENT_ARRAY =
    SERVICES_CONTENT_INF0[
      'Blockchain analytics and crypto trading automation tools'
    ];
  return (
    <PageContainer
      title={'Blockchain analytics and crypto trading automation tools'}
      link={'/#Services'}
      isArrow={true}>
      <figure className={styles.imageWrapper}>
        <Image
          src={'/Img_3_1-3-768x768.png'}
          alt="Analitics"
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </figure>
      <p className={styles.auditsText}>
        Dexola creates advanced crypto trading solutions and blockchain
        analytics tools to help our clients maximize their potential in the
        digital asset market.
      </p>
      <>
        {ANALITICSTOOLS_CONTENT_ARRAY &&
          ANALITICSTOOLS_CONTENT_ARRAY.length > 0 &&
          ANALITICSTOOLS_CONTENT_ARRAY.map(el => (
            <AuditCardItem content={el} key={el.title} />
          ))}
      </>
    </PageContainer>
  );
};

export default AnaliticsTools;
