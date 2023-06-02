'use client';

import Link from 'next/link';
import React, { useEffect, useState, Suspense } from 'react';

import { getPlatform } from '../../Api/api';

import { removeImageLinksFromMarkdown } from '../../lib/removeImageLinksFromMarkdown';

import PageContainer from '../PageContainer/PageWrapper';
import CustomReactMarkdown from '../CustomMarkdown/CustomReactMarkdown';

import st from './cases.module.css';
import style from '../commonStyles/commonStyles.module.css';

const CasesSection = () => {
  const [platforms, setPlatforms] = useState<IPlatfrom[]>();

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
    <PageContainer title={'Case Studies'} id="Cases">
      <Suspense fallback={'Loading ......'}>
        <div className={st.container}>
          {platforms
            ?.sort((a: IPlatfrom, b: IPlatfrom) => a.id - b.id)
            .map(el => (
              <Link href={`/platforms/${el.id}`} key={el.id}>
                <div className={style.wrapper} key={el.id}>
                  <CustomReactMarkdown technology={el?.services}>
                    {el.summary}
                  </CustomReactMarkdown>
                  <div className={style.imageContainerCases}>
                    <div className={style.imageDivArrowA}></div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Suspense>
      <Link href="/platforms" className={st.button}>
        Browse All Case Studies
      </Link>
    </PageContainer>
  );
};

export default CasesSection;
