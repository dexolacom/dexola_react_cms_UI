'use client';

import PageContainer from '../../components/PageContainer/PageWrapper';
import { HowWeWork_INFO } from '../../constants/textConstants';
import styles from './styles.module.css';
import styles2 from '../../components/PageContainer/pageContainer.module.css';

const HowWeWork = () => {
  return (
    <PageContainer title={'How we work'} link={'/#Services'}>
      <p className={styles2.contentText}>
        At Dexola, our approach to working with clients is rooted in
        collaboration, adaptability, and a dedication to delivering outstanding
        results. Our services are designed to fit seamlessly with your business
        processes and goals, ensuring the success of your blockchain project.
      </p>
      <div className={styles.textBlockWrapper}>
        <>
          {HowWeWork_INFO &&
            HowWeWork_INFO.length > 0 &&
            HowWeWork_INFO.map(el => (
              <div className={styles.rowBlock} key={el[0].title}>
                <div className={styles.textBlock}>
                  <p className={styles.blockTitle}>{el[0].title}</p>
                  <p className={styles.blockText}>{el[0].text}</p>
                </div>

                {el[1] ? (
                  <div className={styles.textBlock}>
                    <p className={styles.blockTitle}>{el[1].title}</p>
                    <p className={styles.blockText}>{el[1].text}</p>
                  </div>
                ) : undefined}
              </div>
            ))}
        </>
      </div>
    </PageContainer>
  );
};

export default HowWeWork;
