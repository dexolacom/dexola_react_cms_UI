'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      {/* <Link href={`/services/${title}`}> */}
      {/* <Link href={`/Audits`}> */}
      <div className={styles.arrowBlock}></div>
      {/* </Link> */}
    </div>
  );
};

export default ServiceCard;
