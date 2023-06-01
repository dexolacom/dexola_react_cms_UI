'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import { SERVICES_CONTENT_INF0 } from '../../constants/textConstants';
import AuditCardItem from '../smart-contract-audits/auditsCardItem';
import styles from '../smart-contract-audits/styles.module.css';

const Web3Solutions = () => {
  const WEB3SOLUTIONS_CONTENT_ARRAY =
    SERVICES_CONTENT_INF0['Web3 White Label Solutions'];
  return (
    <PageContainer title={'White-label Web3 Solutions'} link={'/#Services'}>
      <figure className={styles.imageWrapper}>
        <Image
          src={'/Img_4_1-2-768x768.png'}
          alt="Web3 Solutions"
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </figure>
      <p className={styles.auditsText}>
        Dexola offers a suite of ready-to-use solutions designed to let your
        business enter the web3 market immediately. Our team developed 3
        cutting-edge platforms that can be easily customized to match your brand
        identity and specific requirements.
      </p>
      <>
        {WEB3SOLUTIONS_CONTENT_ARRAY &&
          WEB3SOLUTIONS_CONTENT_ARRAY.length > 0 &&
          WEB3SOLUTIONS_CONTENT_ARRAY.map(el => (
            <AuditCardItem content={el} key={el.title} />
          ))}
      </>
    </PageContainer>
  );
};

export default Web3Solutions;
