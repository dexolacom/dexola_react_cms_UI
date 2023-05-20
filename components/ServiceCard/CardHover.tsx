'use client';

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
      <div className={styles.descriptionBlock}>
        <div
          className={styles.colorMarker}
          style={{ backgroundColor: color ? color : 'white' }}
        />
        <div className={styles.serviceDescription}>{title}</div>
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
