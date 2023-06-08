'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { custom2Variants, variantsHome } from '../../Variants/Variants';

import st from './animeContainer.module.css';
import styles from '../PageContainer/pageContainer.module.css';

const AnimePageWrapper = ({
  title,
  children,
  id,
}: {
  title: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.blockWrapper}
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        <div className={st.sidebar}>
          <div className={styles.titleBlock}>
            <motion.p
              className={styles.title}
              variants={variantsHome}
              custom={2}
            >
              {title}
            </motion.p>
          </div>
        </div>

        <motion.div
          custom={1}
          variants={custom2Variants}
          className={st.contentBox}
        >
          <motion.div variants={variantsHome} custom={2}>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimePageWrapper;
