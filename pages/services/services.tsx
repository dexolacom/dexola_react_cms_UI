'use client';

import ServiceCard from '../../components/ServiceCard/ServiceCard';
import PageContainer from '../../components/PageContainer/PageWrapper';
import styles from './styles.module.css';
import styles2 from '../../components/PageContainer/pageContainer.module.css';
import Link from 'next/link';

const SERVICES_TITLES: ITypeItem[] = [
  {
    title: 'R&D',
    text: 'rd',
  },
  { title: 'How we Work', text: 'how-we-work' },
  { title: 'Our Process', text: 'our-process' },
];

const Services = () => {
  return (
    <PageContainer title={'Services'} id="Services">
      <p className={styles2.contentText}>
        Our experience covers most areas of DeFi as the underlying technologies
        of most dApps are pieces of the same puzzle. We specialize in
        EVM-compatible blockchains and have extensive experience in Ethereum,
        Binance Chain, Fantom and Polygon.
      </p>
      <p className={styles2.contentText}>
        Our R&D team is busy exploring newly emerging technology areas and
        building sample projects based on them. While we may not have direct
        experience with real-life projects in certain domains, our extensive
        internal research ensures that we are well-versed in these fields.
      </p>
      <div className={styles.imagesWrapper}>
        <div className={styles.imagesColumn}>
          <ServiceCard
            imgPath={'/img_1_1_3.png'}
            title={'Smart Contracts Development'}
            color={'#EB3795'}
          />
          <ServiceCard
            imgPath={'/img_3_1_3.png'}
            title={'Analytics and Crypto Trading Tools'}
            color={'#269EC1'}
          />
        </div>
        <div className={styles.imagesColumn}>
          <ServiceCard
            imgPath={'/img_2_1_3.png'}
            title={'Smart Contract Audits'}
            color={'#8642CA'}
          />
          <ServiceCard
            imgPath={'/img_4_1_3.png'}
            title={'Web3 White Label Solutions'}
            color={'#2CC0A6'}
          />
        </div>
      </div>
      <div className={styles.linksBlock}>
        <>
          {SERVICES_TITLES &&
            SERVICES_TITLES.length &&
            SERVICES_TITLES.map((el, idx) => (
              <Link href={`/${el.text}`} key={`${idx}`}>
                <div className={styles.linkItem}>
                  <p className={styles2.mainKatinParagraph}>{el.title}</p>
                  <div className={styles.arrowBlockServ}></div>
                </div>
              </Link>
            ))}
        </>
      </div>
    </PageContainer>
  );
};

export default Services;
