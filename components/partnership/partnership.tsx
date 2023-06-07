'use client';

import PageContainer from '../PageContainer/PageWrapper';
import TypeItem from './typeItem';
import { TYPE_COMPANIES_INFO } from '../../constants/textConstants';
import styles from '../../components/PageContainer/pageContainer.module.css';
import { useTypeStatus } from '../../utils/utils';

const Partnership = () => {
  const { typeStatus, clickHandler } = useTypeStatus(7);

  return (
    <PageContainer title={'Partnership'} id="Partnership">
      <p className={styles.contentText}>
        By forging strategic partnerships, Dexola aims to create a robust
        network of industry-leading professionals committed to delivering the
        best possible solutions and services to our clients. Together, we can
        drive innovation, foster growth, and contribute to the ongoing success
        of the blockchain and cryptocurrency industry.
      </p>
      <p className={styles.contentText}>
        We are actively seeking to establish mutually beneficial relationships
        with various types of businesses, working together to provide
        comprehensive, holistic services to our clients.
      </p>
      <p className={styles.contentText}>
        We are eager to partner with the following types of companies:
      </p>
      <>
        {TYPE_COMPANIES_INFO &&
          TYPE_COMPANIES_INFO.length > 0 &&
          TYPE_COMPANIES_INFO.map((item, idx) => (
            <TypeItem
              index={idx}
              key={item.title}
              title={item.title}
              text={item.text}
              clickHandler={clickHandler}
              showStatus={typeStatus[idx]}
            />
          ))}
      </>
    </PageContainer>
  );
};

export default Partnership;
