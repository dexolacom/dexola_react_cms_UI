'use client';

import styles from './styles.module.css';

const AuditCardItem = ({
  // index,
  title,
}: // text,
// clickHandler,
// showStatus,
{
  // index: number;
  title: string;
  // text: string;
  // clickHandler: (e: React.SyntheticEvent) => void;
  // showStatus: boolean;
}) => {
  // const textStyles = () => {
  //   const result = showStatus
  //     ? { marginBottom: '16px', height: '100%', opacity: 1 }
  //     : { margiBottom: '0', height: '0', opacity: 0 };
  //   return result;
  // };

  return (
    <div className={styles.auditsCard}>
      <p className={styles.auditsTitle}>{title}</p>
      <p className={styles.auditsText}>
        Conducting specialized security tests, including stress testing,
        penetration testing, and attack simulations, to identify potential
        vulnerabilities and ensure robustness.
      </p>
      <div className={styles.auditsCardLink}>
        <p>Related cases</p>
        <p>Related cases</p>
      </div>
    </div>
    // ------
    // <div className={styles.typesItemWrapper}>
    //   <div
    //     className={styles.companyTypesItem}
    //     id={`${index}`}
    //     onClick={e => clickHandler(e)}>
    //     <p className={styles.typesTitle}>{title}</p>
    //     <div
    //       className={styles.signBlock}
    //       style={{ height: showStatus ? '2px' : '16px' }}
    //     />
    //   </div>
    //   <p className={styles.typesText} style={textStyles()}>
    //     {text}
    //   </p>
    // </div>
  );
};

export default AuditCardItem;
