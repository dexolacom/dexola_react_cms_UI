'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import ArrowGoBack from '../ArrowAnime/ArrowBack';

import styles from './pageContainer.module.css';
import { useMyContext } from '../../context/AppContext';

const PageContainer = ({
  title,
  link,
  id,
  children,
  isArrow = false,
}: {
  title: string;
  link?: string;
  id?: string;
  isArrow: boolean;
  children: JSX.Element | JSX.Element[];
}) => {
  const { setIsHoveredLink } = useMyContext();
  const [isHovered, onHoverChange] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleMouseEnter = () => {
    onHoverChange(true);
    setIsHoveredLink(true);
  };

  const handleMouseLeave = () => {
    onHoverChange(false);
    setIsHoveredLink(false);
  };

  return (
    <div className={styles.blockWrapper} id={id}>
      <div className={styles.sidebar}>
        <div className={styles.titleBlock}>
          {isArrow && (
            <button
              onClick={handleGoBack}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.btnGoBack}>
              <div className={styles.imageContainer}>
                <AnimatePresence initial={false}>
                  <ArrowGoBack isHovered={isHovered} />
                </AnimatePresence>
              </div>
            </button>
          )}
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={isHovered ? styles.contentBoxHover : styles.contentBox}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
