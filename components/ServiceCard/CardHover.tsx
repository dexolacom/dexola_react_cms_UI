'use client';

// import Image from 'next/image';
import { CardWrapper, ServiceDescription } from './styles';
import styles from './serviceCard.module.css';

const CardHover = ({ title, color }: { title: string; color: string }) => {
  // --- !TEMP -
  const textArray = [
    'Custom Security Testing',
    'Wallets and Custodian Solutions',
    'Formal Verification',
  ];

  return (
    <div className={styles.cardWrapper}>
      <div
        className={styles.serviceDescription}
        style={{ backgroundColor: color ? color : 'white' }}
        // color={color}
      >
        {title}
      </div>
      <ul>
        {textArray &&
          textArray.length > 0 &&
          textArray.map(el => <li key={el}>{el}</li>)}
      </ul>
    </div>
  );
};

export default CardHover;

// return (
//   <CardWrapper className="infoHover">
//     <ServiceDescription color={color}>{title}</ServiceDescription>
//     <ul>
//       {textArray &&
//         textArray.length > 0 &&
//         textArray.map(el => <li key={el}>{el}</li>)}
//     </ul>
//   </CardWrapper>
// );
