'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IAuditsContent } from '../../interfaces/interfaces';
import styles from './styles.module.css';

const AuditCardItem = ({ content }: { content: IAuditsContent }) => {
  const { title, text, links } = content;
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const clickHandler = () => {
    setShowStatus(prev => !prev);
  };

  const blockStyles = () => {
    const result = showStatus
      ? { height: '100%', opacity: 1 }
      : { height: '0', opacity: 0, padding: 0 };
    return result;
  };

  return (
    <div className={styles.auditsCard}>
      <div>
        <p className={styles.auditsSubtitle}>{title}</p>
        <p className={styles.auditsCardText}>{text}</p>
      </div>
      <div className={styles.auditsCardLink}>
        <div
          className={styles.auditsCardLinkItem}
          onClick={clickHandler}
          style={{ paddingBottom: showStatus ? '0px' : '24px' }}>
          <p className={styles.linkItemTitle}>Related cases</p>
          <div
            className={styles.signBlock}
            style={{ height: showStatus ? '2px' : '16px' }}
          />
        </div>
        {links &&
          links.length > 0 &&
          links.map(el => (
            <div
              className={styles.linkItemBlock}
              key={el}
              style={blockStyles()}>
              <p className={styles.linkItemText}>{el}</p>
              <Image
                src={'/arrow_tr_8x8.svg'}
                alt="Arrow"
                width={8}
                height={8}
                priority
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AuditCardItem;
