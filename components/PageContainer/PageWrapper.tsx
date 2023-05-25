"use client";

import styles from "./pageContainer.module.css";

const PageContainer = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.sidebar}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.contentBox}>{children}</div>
    </div>
  );
};

export default PageContainer;
