'use client';

import Image from 'next/image';
import styles from './styles.module.css';

const HeaderSmall = ({ isWhite }: { isWhite: boolean }) => {
  return (
    <div className={styles.topBox}>
      <Image
        src={isWhite ? '/logo-white.svg' : '/logo.svg'}
        alt="Logo"
        width={64}
        height={14}
        priority
      />
      <Image
        src={isWhite ? '/menu_short_white.svg' : '/menu_short_black.svg'}
        alt="menu"
        width={18}
        height={14}
        priority
      />
    </div>
    // </div>
  );
};

export default HeaderSmall;
