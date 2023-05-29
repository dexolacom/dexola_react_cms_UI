'use client';

import styles from './styles.module.css';

const ProcessItem = ({ title, text }: { title: string; text: string }) => {
  const textDevider = () => {
    if (text.includes('<br>')) {
      const textArr = text.split('<br>');
      return (
        <>
          <p className={styles.itemText} style={{ marginBottom: '16px' }}>
            {textArr[0]}
          </p>
          <p className={styles.itemText}>{textArr[1]}</p>
        </>
      );
    } else {
      return <p className={styles.itemText}>{text}</p>;
    }
  };

  return (
    <div className={styles.item}>
      <p className={styles.itemTitle}>{title}</p>
      {textDevider()}
    </div>
  );
};

export default ProcessItem;
