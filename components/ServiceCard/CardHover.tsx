'use client';

import { SERVICES_CONTENT_INF0 } from '../../constants/textConstants';
import styles from './serviceCard.module.css';

const CardHover = ({ title, color }: { title: string; color: string }) => {
  const cardHoverInfo = SERVICES_CONTENT_INF0[title];
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
        {cardHoverInfo &&
          cardHoverInfo?.length > 0 &&
          cardHoverInfo.map(el => <li key={el.title}>{el.title}</li>)}
      </ul>
    </div>
  );
};

export default CardHover;
