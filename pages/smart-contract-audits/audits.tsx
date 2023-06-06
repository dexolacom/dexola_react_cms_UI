// 'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';

import styles from './styles.module.css';
import AuditCardItem from './auditsCardItem';
import { SERVICES_CONTENT_INF0 } from '../../constants/textConstants';

const Audits = () => {
  const AUDITS_CONTENT_ARRAY = SERVICES_CONTENT_INF0['Smart Contract Audits'];
  return (
    <PageContainer
      title={'Smart contract audits'}
      link={'/#Services'}
      isArrow={true}>
      <figure className={styles.imageWrapper}>
        <Image
          src={'/Img_2_1-3-768x768.png'}
          alt="Audits"
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </figure>
      <p className={styles.auditsText}>
        To add an extra layer of security and give you peace of mind, we
        carefully audit smart contracts to make sure your blockchain projects
        are secure and reliable. We pay close attention to details and find
        vulnerabilities, check that the code complies with industry standards,
        and evaluate how well it works overall.
      </p>
      <p className={styles.auditsTitle}>Services</p>
      <>
        {AUDITS_CONTENT_ARRAY &&
          AUDITS_CONTENT_ARRAY.length > 0 &&
          AUDITS_CONTENT_ARRAY.map(el => (
            <AuditCardItem content={el} key={el.title} />
          ))}
      </>
    </PageContainer>
  );
};

export default Audits;
