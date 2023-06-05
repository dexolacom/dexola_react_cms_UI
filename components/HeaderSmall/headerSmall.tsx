'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const HeaderSmall = ({ isWhite }: { isWhite: boolean }) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuHandler = () => {
    setIsMenu(prev => !prev);
  };

  const logoHandler = () => {
    console.log('Logo clicked!!!');
  };

  const imgSrc = isWhite
    ? isMenu
      ? '/close.svg'
      : '/menu_short_white.svg'
    : isMenu
    ? '/close_black.svg'
    : '/menu_short_black.svg';
  return (
    <div className={styles.topBox}>
      <Link href={'/'}>
        <div className={styles.imageBox} onClick={logoHandler}>
          <Image
            src={isWhite ? '/logo-white.svg' : '/logo.svg'}
            alt="Logo"
            width={64}
            height={14}
            priority
          />
        </div>
      </Link>
      <div className={styles.imageBox} onClick={menuHandler}>
        <Image src={imgSrc} alt="menu" width={18} height={14} priority />
      </div>
    </div>
  );
};

export default HeaderSmall;
