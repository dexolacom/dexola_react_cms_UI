'use client';

import styles from './styles.module.css';

const TypeItem = ({
  index,
  title,
  text,
  clickHandler,
  showStatus,
}: {
  index: number;
  title: string;
  text: string;
  clickHandler: (e: React.SyntheticEvent) => void;
  showStatus: boolean;
}) => {
  const textStyles = () => {
    const result = showStatus
      ? { marginBottom: '16px', height: '100%', opacity: 1 }
      : { margiBottom: '0', height: '0', opacity: 0 };
    return result;
  };

  return (
    <div className={styles.typesItemWrapper}>
      <div
        className={styles.companyTypesItem}
        id={`${index}`}
        onClick={e => clickHandler(e)}>
        <p className={styles.typesTitle}>{title}</p>
        <div
          className={styles.signBlock}
          style={{ height: showStatus ? '2px' : '16px' }}
        />
      </div>
      <p className={styles.typesText} style={textStyles()}>
        {text}
      </p>
    </div>
  );
};

export default TypeItem;
