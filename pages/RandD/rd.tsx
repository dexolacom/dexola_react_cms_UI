'use client';

import PageContainer from '../../components/PageContainer/PageWrapper';
import { RandD_INFO } from '../../constants/textConstants';
import styles from './styles.module.css';
import styles2 from '../../components/PageContainer/pageContainer.module.css';
import { useState } from 'react';
import TypeItem from '../partnership/typeItem';

// --- it's like as in Partnership !!! ---
const INIT_TYPE_STATUS = Array(5).fill(false);

const RandD = () => {
  // --- same as in Partnership !!! ---
  const [typeStatus, setTypeStatus] = useState<boolean[]>(INIT_TYPE_STATUS);

  const clickHandler = (e: React.SyntheticEvent) => {
    const id = +e?.currentTarget?.id;
    if (typeStatus.length > 0) {
      const newStatusArray = typeStatus.map((el, idx) =>
        idx === id && !el ? true : false,
      );
      setTypeStatus(newStatusArray);
    }
  };
  // --- / same as in Partnership !!! ---
  return (
    <PageContainer title={'R&D'} link={'some link'}>
      <p className={styles2.contentText}>
        Our Research and Development team constantly explores emerging
        technology areas and creates proof-of-concept projects to stay updated
        with innovations. We may not have direct experience with customer
        projects in certain domains, but our extensive research keeps us
        knowledgeable in these fields.
      </p>
      <p className={styles2.contentText}>
        Currently, our R&D team is working on the following topics:
      </p>
      <div>
        {RandD_INFO &&
          RandD_INFO.length > 0 &&
          RandD_INFO.map((item, idx) => (
            <TypeItem
              index={idx}
              key={item.title}
              title={item.title}
              text={item.text}
              clickHandler={clickHandler}
              showStatus={typeStatus[idx]}
            />
          ))}
      </div>
      <p className={styles.contentTextLast}>
        Through our ongoing R&D efforts, Dexola remains at the cutting edge of
        technology trends, ensuring we consistently provide our clients with the
        most advanced and innovative blockchain solutions. By staying ahead of
        the curve, we can anticipate and address the evolving needs of
        businesses in the rapidly changing blockchain landscape.
      </p>
    </PageContainer>
  );
};

export default RandD;
