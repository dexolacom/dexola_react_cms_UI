'use client';

import styles from './styles.module.css';
// ---
import { motion } from 'framer-motion';

const TypeItem = ({
  index,
  title,
  text,
  clickHandler,
  showStatus,
}: {
  index: number;
  title: string;
  text: string;
  clickHandler: (e: React.SyntheticEvent) => void;
  showStatus: boolean;
}) => {
  const variants = {
    open: {
      height: '100%',
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    },
    closed: {
      height: '0',
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.typesItemWrapper}>
      <div
        className={styles.companyTypesItem}
        id={`${index}`}
        onClick={e => clickHandler(e)}>
        <p className={styles.typesTitle}>{title}</p>
        <div
          className={styles.signBlock}
          style={{ height: showStatus ? '2px' : '16px' }}
        />
      </div>
      <motion.p
        animate={showStatus ? 'open' : 'closed'}
        variants={variants}
        className={styles.typesText}>
        {text}
      </motion.p>
    </div>
  );
};

export default TypeItem;
