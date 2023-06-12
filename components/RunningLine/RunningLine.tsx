'use client';

import styles from './styles.module.css';
import styles1 from '../PageContainer/pageContainer.module.css';

const RunningLine = () => {
  return (
    <div className={styles1.blockWrapper}>
      <div className={styles.transparentBlock} />
      <div className={styles.colorfulBlock}></div>
    </div>
  );
};

export default RunningLine;
