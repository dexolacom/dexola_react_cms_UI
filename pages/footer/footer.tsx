'use client';

import Image from 'next/image';
import PageContainer from '../../components/PageContainer/PageWrapper';
import RunningLine from '../../components/RunningLine/RunningLine';
import FooterRow from './FooterRow';
import { IFooterInfo } from '../../interfaces/interfaces';
import styles from './footer.module.css';

const TEMP_FOOTER_INFO: IFooterInfo[] = [
  {
    title: 'About',
    firstColumn: ['About Dexola'],
    secondColumn: ['Synergy with Trinetix'],
  },
  {
    title: 'Services',
    firstColumn: [
      'Smart Contracts Devel...',
      'Analytics and Crypto...',
      'How we Work',
    ],
    secondColumn: ['Smart Contract Audit', 'R&D', 'Our Process'],
  },
  {
    title: 'Cases',
    firstColumn: ['Featured Case 1', 'Featured Case 3'],
    secondColumn: ['Featured Case 2', 'All Cases'],
  },
];

const Footer = () => {
  return (
    <>
      <RunningLine />
      <PageContainer title={''}>
        <div className={styles.footerRow}>
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={64}
            height={14}
            priority
          />
        </div>

        <>
          {TEMP_FOOTER_INFO &&
            TEMP_FOOTER_INFO.length > 0 &&
            TEMP_FOOTER_INFO?.map((item: IFooterInfo, idx) => (
              <FooterRow key={`${idx}`} footerInfo={item} />
            ))}
        </>

        <div className={styles.footerRow}>
          <div className={styles.addressColumn}>
            <p className={styles.columnTitle}>
              210 Middleton st, Nashville Tennessee 37210, US
            </p>
          </div>
          <div className={styles.addressColumn}>
            <p className={styles.columnText}>© 2023</p>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Footer;
