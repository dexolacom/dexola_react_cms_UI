'use client';

import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import VideoBG from '../VideoBG/VideoBG';
import HeaderSmall from '../HeaderSmall/headerSmall';
import styles from './styles.module.css';

const variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.headerWrapper}
        initial="hidden"
        whileInView="visible">
        <VideoBG opacity={0.1} />

        <motion.div className={styles.description} variants={variants}>
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
          <Image
            src="/line-63.svg"
            alt="Line"
            width={12}
            height={80}
            priority
          />
        </motion.div>

        <p className={styles.ourAddress}>
          210 Middleton st, Nashville Tennessee 37210, US
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
