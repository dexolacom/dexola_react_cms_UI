'use client';

import Image from 'next/image';
import VideoBG from '../../components/VideoBG/VideoBG';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <VideoBG opacity={0.1} />
      {/* <HeaderSmall isWhite={false} /> */}
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
