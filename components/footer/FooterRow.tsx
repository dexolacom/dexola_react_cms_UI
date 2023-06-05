'use client';

import Link from 'next/link';
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
            <div key={el.title}>
              <Link href={`/${el.text}`}>
                <p className={styles.columnText}>{el.title}</p>
                <div className={styles.arrowBlock}></div>
              </Link>
            </div>
          ))}
      </div>
      <div className={styles.techItemColumn}>
        {secondColumn &&
          secondColumn.length > 0 &&
          secondColumn.map(el => (
            <div key={el.title}>
              <Link href={`/${el.text}`}>
                <p className={styles.columnText}>{el.title}</p>
                <div className={styles.arrowBlock}></div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterRow;
