'use client';

import PageContainer from '../PageContainer/PageWrapper';
import styles from './styles.module.css';
import styles1 from '../../components/PageContainer/pageContainer.module.css';

const TechStack = () => {
  return (
    <PageContainer title={'Technology Stack'}>
      <div className={styles1.flexColumnBlock}>
        <div className={styles.techItem}>
          <div className={styles.techItemColumn}>
            <p className={styles.columnTitle}>Native platforms</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>JavaScript</p>
            <p className={styles.columnText}>Vue.js</p>
            <p className={styles.columnText}>Solidity</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>React.js</p>
            <p className={styles.columnText}>Node.js</p>
            <p className={styles.columnText}>Rust</p>
          </div>
        </div>
        <div className={styles.techItem}>
          <div className={styles.techItemColumn}>
            <p className={styles.columnTitle}>Cloud development</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>AWS</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>Google Cloud</p>
          </div>
        </div>
        <div className={styles.techItem}>
          <div className={styles.techItemColumn}>
            <p className={styles.columnTitle}>Blockchain development</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>Ethereum</p>
            <p className={styles.columnText}>Stellar</p>
            <p className={styles.columnText}>Fantom</p>
            <p className={styles.columnText}>Tron</p>
            <p className={styles.columnText}>Solidity</p>
            <p className={styles.columnText}>Web3</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>Binance</p>
            <p className={styles.columnText}>Solana</p>
            <p className={styles.columnText}>Polygon</p>
            <p className={styles.columnText}>Multichain</p>
            <p className={styles.columnText}>Rust</p>
            <p className={styles.columnText}>Hardhat</p>
          </div>
        </div>
        <div className={styles.techItem}>
          <div className={styles.techItemColumn}>
            <p className={styles.columnTitle}>Additional tools</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>Apollo Client</p>
            <p className={styles.columnText}>Express.js</p>
            <p className={styles.columnText}>GpaphQL</p>
          </div>
          <div className={styles.techItemColumn}>
            <p className={styles.columnText}>Apollo Server</p>
            <p className={styles.columnText}>OAuth</p>
            <p className={styles.columnText}>SQL & NoSQL</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TechStack;
