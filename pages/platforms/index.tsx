// " use client";
import '../../src/app/globals.css';
import Link from 'next/link';

import { getPlatform } from '../../Api/api';

import { removeImageLinksFromMarkdown } from '../../lib/removeImageLinksFromMarkdown';

import PageContainer from '../../components/PageContainer/PageWrapper';
import Footer from '../../components/footer/footer';

import st from './index.module.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import CustomPlatformsMarkdown from '../../components/CustomMarkdown/CustomPlatfromsMarkdown';
// import ArrowAllCases from '../../components/ArrowAnime/ArrowAllCases';

export async function getStaticProps() {
  try {
    const response = await getPlatform();
    const transformData = response?.map((item: IItem) => ({
      services: item?.attributes?.services,
      summary: item?.attributes?.summary
        ? removeImageLinksFromMarkdown(item.attributes.summary)
        : null,
      id: item?.id,
    }));

    return {
      props: {
        platforms: transformData,
      },
    };
  } catch (error) {
    console.error('getStaticProps ERROR', error);
    return {
      props: {
        platforms: [],
      },
    };
  }
}

const AllPlatforms = ({ platforms }: { platforms: IPlatfrom[] }) => {
  const [hoveredId, setHoveredId] = useState<number | null>();

  return (
    <>
      <PageContainer title={'All Case Studies'} isArrow={true}>
        <p className={st.desc}>
          Discover how we develop sophisticated, user-friendly blockchain
          solutions for clients in various industries. These projects showcase
          our commitment to building top-notch applications that help businesses
          succeed and contribute to the broader adoption of blockchain.
        </p>
        <div className={st.container}>
          {platforms
            ?.sort((a: IPlatfrom, b: IPlatfrom) => a.id - b.id)
            .map((el) => (
              <Link href={`/platforms/${el?.id}`} key={el.id}>
                <div
                  key={el.id}
                  className={`${st.content} ${
                    hoveredId === el.id ? st.hovered : ''
                  }`}
                  onMouseEnter={() => setHoveredId(el.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <AnimatePresence>
                    {/* <ArrowAllCases
                      hoveredCard={hoveredId}
                      platformId={el?.id}
                      key={el?.id}
                    /> */}

                    <CustomPlatformsMarkdown
                      hoveredCard={hoveredId}
                      technology={el?.services}
                      platformId={el.id}
                    >
                      {el?.summary}
                    </CustomPlatformsMarkdown>
                  </AnimatePresence>
                </div>
              </Link>
            ))}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default AllPlatforms;
