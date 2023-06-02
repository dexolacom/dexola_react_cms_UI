'use client';

import PageContainer from '../../components/PageContainer/PageWrapper';
import { ADVERT_INFO } from '../../constants/textConstants';
import styles from './styles.module.css';

const About = () => {
  return (
    <PageContainer title={'About'}>
      <p className={styles.aboutSubtitle}>About Dexola</p>
      <p className={styles.aboutText}>
        Dexola is an autonomous blockchain software development branch of
        Trinetix, a globally trusted digital partner serving enterprise clients.
        Dexola focuses on startups and helps them build their blockchains and
        ecosystem applications by providing the same level of consulting and
        delivery services enterprise clients are used to.
      </p>
      <p className={styles.aboutText}>
        The autonomy of Dexola as a separate company and brand allows for an
        agile approach, proper mindset and culture suitable for small and medium
        businesses.
      </p>

      <div className={styles.advertWrapper}>
        {ADVERT_INFO &&
          ADVERT_INFO.length &&
          ADVERT_INFO.map((el, idx) => (
            <div key={`${idx}`} className={styles.advertBlock}>
              <p className={styles.advertAmount}>{el.amount}</p>
              <p className={styles.advertText}>{el.description}</p>
            </div>
          ))}
      </div>

      <p className={styles.aboutSubtitle}>Synergy with Trinetix</p>
      <p className={styles.aboutText}>
        Dexola formed a strategic partnership with Trinetix Group. While our own
        certified development and design teams focus on blockchain, Trinetix
        gives us access to more than 800 professionals in other areas of
        development, design, legal, and operations. As part of this
        collaboration, we can offer supplementary services such as mobile and
        web app development, intelligent automation and digital assistants,
        cloud enablement, chatbots, AI, and VR solutions.
      </p>
      <p className={styles.aboutText}>
        Trinetix is known for its exceptional expertise in user experience and
        user interface design, with over a quarter of the workforce dedicated to
        UX/UI. Dexola clients can also benefit from this pool of talent,
        enabling us to consistently deliver a world-class user experience.
      </p>
    </PageContainer>
  );
};

export default About;
