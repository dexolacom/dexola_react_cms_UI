'use client';

import Image from 'next/image';
import CardHover from './CardHover';
import styles from './serviceCard.module.css';

const ServiceCard = ({
  imgPath,
  title,
  color,
}: {
  imgPath: string;
  title: string;
  color: string;
}) => {
  return (
    <div className={styles.imageItem}>
      <Image src={imgPath} alt="Service1" width={275} height={275} priority />
      <CardHover title={title} color={color} />
      <div className={styles.arrowBlock}></div>
    </div>
  );
};

export default ServiceCard;
