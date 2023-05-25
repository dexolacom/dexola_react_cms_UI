'use client';

import { IFooterInfo } from '../../interfaces/interfaces';
import styles from './footer.module.css';

const FooterRow = ({ footerInfo }: { footerInfo: IFooterInfo }) => {
  const { title, firstColumn, secondColumn } = footerInfo;
  return (
    <div className={styles.footerRow}>
      <div className={styles.techItemColumn}>
        <p className={styles.columnTitle}>{title}</p>
      </div>
      <div className={styles.techItemColumn}>
        {firstColumn &&
          firstColumn.length > 0 &&
          firstColumn.map(el => (
            <div key={el}>
              <p className={styles.columnText}>{el}</p>
              <div className={styles.arrowBlock}></div>
            </div>
          ))}
      </div>
      <div className={styles.techItemColumn}>
        {secondColumn &&
          secondColumn.length > 0 &&
          secondColumn.map(el => (
            <div key={el}>
              <p className={styles.columnText}>{el}</p>
              <div className={styles.arrowBlock}></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterRow;
