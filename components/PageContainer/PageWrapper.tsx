'use client';

import styles from './pageContainer.module.css';

const PageContainer = ({
  title,
  link,
  children,
}: {
  title: string;
  link?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const isLink = true;
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.sidebar}>
        <div className={styles.titleBlock}>
          <div
            className={styles.linkBlock}
            style={{ display: link ? 'block' : 'none' }}
          />
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={styles.contentBox}>{children}</div>
    </div>
  );
};

export default PageContainer;
