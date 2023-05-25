'use client';

import PageContainer from '../../components/PageContainer/PageWrapper';
import styles from './contactForm.module.css';
import styles2 from '../../components/PageContainer/pageContainer.module.css';

const RandD = () => {
  return (
    <PageContainer title={'R&D'}>
      <p className={styles2.contentText}>
        Our Research and Development team is continually exploring emerging
        technology areas and building proof-of-concept projects to stay at the
        forefront of innovation. While we may not have direct experience with
        real-life projects in certain domains, our extensive internal research
        ensures that we are well-versed in these fields.
      </p>
    </PageContainer>
  );
};

export default RandD;
