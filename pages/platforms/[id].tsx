import "../../src/app/globals.css";

import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import { getPlatform, getPlatformId } from "../../api/api";

import PageContainerItem from "./PageContainer/ContainerPage";
import CustomReactMarkdown from "../../components/CustomMarkdown/CustomReactMarkdown";
import CustomMarkdown from "../../components/CustomMarkdown/CustomIDMarkdown";

import { getImageUrlFromMarkdown } from "../../lib/getImageUrlFromMarkdown";
import { removeImageLinksFromMarkdown } from "../../lib/removeImageLinksFromMarkdown";
import RenderListTechnology from "../../lib/RenderListTechnology";

import st from "./id.module.css";
import style from "../../components/commonStyles/commonStyles.module.css";
import markdownStyle from "../../components/CustomMarkdown/mardown.module.css";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export const getStaticPaths = async () => {
  try {
    const response = await getPlatform();

    const paths = response?.map((platform: { id: number }) => ({
      params: { id: String(platform.id) },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params || typeof params.id !== "string") {
      console.error("Invalid params ID getStaticProps");
      return {
        props: {
          platformDetails: [],
        },
      };
    }
    const { id } = params;

    const response = await getPlatformId(id);

    const platformDetails = response;

    return {
      props: {
        platformDetails,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        platformDetails: {},
      },
    };
  }
};

const PlatformDetails = ({
  platformDetails,
}: {
  platformDetails: PlatformData;
}) => {
  if (!platformDetails) {
    return <div>Loading...</div>;
  }
  const { attributes } = platformDetails;

  const {
    services,
    summary,
    network,
    backEnd,
    database,
    blockchain,
    frontEnd,
    infrastructure,
    platformLink,
    description,
    paltformName,
    videoLink,
  } = attributes;

  // get Link Image
  const imageUrl = getImageUrlFromMarkdown(summary);
  // remove Link Image from text
  const removeLinlImage = removeImageLinksFromMarkdown(summary);

  return (
    <PageContainerItem title={paltformName}>
      <Suspense fallback={"Loading ... . . ."}>
        <CustomReactMarkdown
          technology={services}
          heading={"Services"}
          subHeading={"Summary"}
        >
          {removeLinlImage}
        </CustomReactMarkdown>
        <div style={{ width: "100%", marginTop: "30px" }}>
          {imageUrl && (
            <Image
              src={`${process.env.BASE_URL + imageUrl}`}
              alt="platform Image"
              // rel="preload"
              width={825}
              height={525}
              sizes="100vw"
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          )}
        </div>
        <ul>
          <h3 className={markdownStyle.headText}>Technology Stack</h3>
          {network && network.length > 0 && (
            <RenderListTechnology arr={network} title={"Network"} />
          )}
          {backEnd && backEnd.length > 0 && (
            <RenderListTechnology arr={backEnd} title={"Back-End"} />
          )}
          {database && database.length > 0 && (
            <RenderListTechnology arr={database} title={"Database"} />
          )}
          {blockchain && blockchain.length > 0 && (
            <RenderListTechnology arr={blockchain} title={"Blockchain"} />
          )}
          {frontEnd && frontEnd.length > 0 && (
            <RenderListTechnology arr={frontEnd} title={"Front-End"} />
          )}
          {infrastructure && infrastructure.length > 0 && (
            <RenderListTechnology
              arr={infrastructure}
              title={"Infrastructure"}
            />
          )}
        </ul>
        <CustomMarkdown>{description}</CustomMarkdown>
        {videoLink !== null ? <VideoPlayer videoLink={videoLink} /> : <></>}

        {platformLink !== null ? (
          <Link
            href={platformLink}
            className={style.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={st.container}>
              {platformLink}
              <div className={style.imageContainerItem}>
                <div className={style.imageDivArrowA}></div>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}
      </Suspense>
    </PageContainerItem>
  );
};

export default PlatformDetails;
