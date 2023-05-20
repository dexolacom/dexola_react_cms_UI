'use client';

import Image from 'next/image';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBox}>
        <Image src="/logo.svg" alt="Logo" width={64} height={14} priority />
        <Image src="/menu.svg" alt="menu" width={40} height={40} priority />
      </div>
      <div className={styles.description}>
        <p className={styles.headerTitle}>
          Cracking
          <br /> the Innovation Code<span className={styles.blank}>_</span>
        </p>
        <div className={styles.subTitle}>
          Dexola is a blockchain development
        </div>
        <div className={styles.subTitle}>
          consultancy, empowered by
          <div className={styles.logoTrinetix} />
        </div>
        <Image src="/line_63.svg" alt="Line" width={12} height={80} priority />
      </div>
      <p className={styles.ourAddress}>
        210 Middleton st, Nashville Tennessee 37210, US
      </p>
    </div>
  );
};

export default Header;
