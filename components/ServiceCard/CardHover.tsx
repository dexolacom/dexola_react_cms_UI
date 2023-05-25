'use client';

import { AUDITS_CONTENT_ARRAY } from '../../constants/textConstants';
import styles from './serviceCard.module.css';

const CardHover = ({ title, color }: { title: string; color: string }) => {
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
        {AUDITS_CONTENT_ARRAY &&
          AUDITS_CONTENT_ARRAY.length > 0 &&
          AUDITS_CONTENT_ARRAY.map(el => <li key={el.title}>{el.title}</li>)}
      </ul>
    </div>
  );
};

export default CardHover;
