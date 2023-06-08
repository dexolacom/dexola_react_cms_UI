'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import Arrow from '../ArrowAnime/Arrow';
import CardHover from './CardHover';
import { variants, variantsImage } from '../../Variants/Variants';

import styles from './serviceCard.module.css';

const ServiceCard = ({ imgPath, title, color, id }: IServiceCard) => {
  const [hoveredId, setHoveredId] = useState<number | null>();

  const convertTitleToLink = () => title.toLowerCase().replaceAll(' ', '-');

  return (
    <motion.div
      className={styles.imageItem}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <Link href={`/${convertTitleToLink()}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key="image"
            initial="visible"
            animate={hoveredId === id ? 'hidden' : 'visible'}
            exit="visible"
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              variants={variantsImage}
              initial="visible"
              animate={hoveredId === id ? 'hidden' : 'visible'}
              exit="visible"
            >
              <Image
                key="image"
                src={imgPath}
                alt="Service1"
                width={275}
                height={275}
              />
            </motion.div>
          </motion.div>
          <CardHover
            title={title}
            color={color}
            hoveredId={hoveredId}
            id={id}
          />
        </AnimatePresence>
        <div className={styles.svgContainer}>
          <Arrow hoveredId={hoveredId} elenId={id} duration={0.2} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
