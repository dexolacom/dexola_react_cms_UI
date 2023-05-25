'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <figure className={styles.videoWrapper}>
        <video autoPlay muted loop poster="/Dexola_BG_1.png" playsInline>
          <source
            src="/backgr_video.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            {/* <source src="/backgr_video.mp4" type="video/mp4"> */}
          </source>
          Your browser does not support the video tag.
        </video>
      </figure>
      <HeaderSmall isWhite={false} />
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
