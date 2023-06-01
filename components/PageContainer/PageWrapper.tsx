'use client';

import Link from 'next/link';
import styles from './pageContainer.module.css';

const PageContainer = ({
  title,
  link,
  id,
  children,
}: {
  title: string;
  link?: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const isLink = true;
  return (
    <div className={styles.blockWrapper} id={id}>
      <div className={styles.sidebar}>
        <div className={styles.titleBlock}>
          <Link href={`${link}`}>
            <div
              className={styles.linkBlock}
              style={{ display: link ? 'block' : 'none' }}
            />
          </Link>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={styles.contentBox}>{children}</div>
    </div>
  );
};

export default PageContainer;
