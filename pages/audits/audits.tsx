'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';

import styles from './styles.module.css';
import AuditCardItem from './auditsCardItem';

const Audits = () => {
  return (
    <PageContainer title={'Smart contract audits'}>
      {/* - ??? - */}
      <Image
        src={'/Img_2_1-3-768x768.png'}
        alt="Audits"
        width={582}
        height={300} // ?
        priority
      />
      <p className={styles.auditsText}>
        We take a meticulous approach to smart contract audits, ensuring the
        utmost security and reliability for your blockchain projects. Our expert
        team thoroughly examines smart contracts, even those previously
        developed by other teams, to provide an additional layer of security and
        peace of mind. With a keen eye for detail, we identify vulnerabilities,
        verify compliance with industry standards, and assess overall
        performance.
      </p>
      {/* ------- */}
      <p className={styles.auditsTitle}>Services</p>
      <AuditCardItem title={'Custom Security Testing'} />
    </PageContainer>
  );
};

export default Audits;
