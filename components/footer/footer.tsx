"use client";

import Image from 'next/image';
import PageContainer from '../PageContainer/PageWrapper';
import RunningLine from '../RunningLine/RunningLine';
import FooterRow from './FooterRow';
import styles from './footer.module.css';
import { TEMP_FOOTER_INFO } from '../../constants/textConstants';

const Footer = () => {
  return (
    <>
      <RunningLine />
      <PageContainer title={""} isArrow={false}>
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
