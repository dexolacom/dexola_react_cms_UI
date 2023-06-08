'use client';

import Link from 'next/link';
import React, { useEffect, useState, Suspense } from 'react';

import { AnimatePresence } from 'framer-motion';

import { getPlatform } from '../../api/api';

import { removeImageLinksFromMarkdown } from '../../lib/removeImageLinksFromMarkdown';

import PageContainer from '../PageContainer/PageWrapper';
import CustomReactMarkdown from '../CustomMarkdown/CustomReactMarkdown';

import st from './cases.module.css';
import style from '../commonStyles/commonStyles.module.css';
import Arrow from '../ArrowAnime/Arrow';

const CasesSection = () => {
  const [platforms, setPlatforms] = useState<IPlatfrom[]>();
  const [hoveredId, setHoveredId] = useState<number | null>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlatform();

      const transformData = response?.map((item: IItem) => ({
        services: item?.attributes?.services,
        summary: removeImageLinksFromMarkdown(item?.attributes?.summary),
        id: item?.id,
      }));

      const filteredPlatforms = transformData?.filter((platform: IPlatfrom) =>
        [1, 2, 3].includes(platform.id),
      );
      setPlatforms(filteredPlatforms);
    };

    fetchData();
  }, []);

  return (
    <PageContainer title={'Case Studies'} id="Cases" isArrow={false}>
      <Suspense fallback={'Loading ......'}>
        <div className={st.container}>
          {platforms
            ?.sort((a: IPlatfrom, b: IPlatfrom) => a.id - b.id)
            .map(el => (
              <Link href={`/platforms/${el.id}`} key={el.id}>
                <div
                  className={style.wrapper}
                  key={el.id}
                  onMouseEnter={() => setHoveredId(el.id)}
                  onMouseLeave={() => setHoveredId(null)}>
                  <CustomReactMarkdown technology={el?.services}>
                    {el?.summary}
                  </CustomReactMarkdown>
                  <AnimatePresence>
                    <div className={st.svgContainer}>
                      <Arrow
                        hoveredId={hoveredId}
                        elenId={el.id}
                        duration={0.4}
                      />
                    </div>
                  </AnimatePresence>
                </div>
              </Link>
            ))}
        </div>
      </Suspense>
      <Link href="/platforms" className={st.button}>
        <span>Browse All Case Studies</span>
      </Link>
    </PageContainer>
  );
};

export default CasesSection;
