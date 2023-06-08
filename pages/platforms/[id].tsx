import "../../src/app/globals.css";

import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import { getPlatform, getPlatformId } from "../../Api/api";

import CustomReactMarkdown from "../../components/CustomMarkdown/CustomReactMarkdown";
import CustomMarkdown from "../../components/CustomMarkdown/CustomIDMarkdown";

import { getImageUrlFromMarkdown } from "../../lib/getImageUrlFromMarkdown";
import { removeImageLinksFromMarkdown } from "../../lib/removeImageLinksFromMarkdown";
import RenderListTechnology from "../../lib/RenderListTechnology";

import style from "../../components/commonStyles/commonStyles.module.css";
import markdownStyle from "../../components/CustomMarkdown/mardown.module.css";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import PageContainer from "../../components/PageContainer/PageWrapper";
import Footer from "../../components/footer/footer";

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

  const technologies = [
    { arr: network, title: "Network" },
    { arr: backEnd, title: "Back-End" },
    { arr: database, title: "Database" },
    { arr: blockchain, title: "Blockchain" },
    { arr: frontEnd, title: "Front-End" },
    { arr: infrastructure, title: "Infrastructure" },
  ];

  // get Link Image
  const imageUrl = getImageUrlFromMarkdown(summary);
  // remove Link Image from text
  const removeLinlImage = removeImageLinksFromMarkdown(summary);

  return (
    <>
      <PageContainer isArrow={true} title={paltformName}>
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
            {technologies.map((tech, index) => {
              if (tech.arr && tech.arr.length > 0) {
                return (
                  <RenderListTechnology
                    key={index}
                    arr={tech.arr}
                    title={tech.title}
                  />
                );
              }
              return null;
            })}
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
              {platformLink}
              <div className={style.imageDivArrowA}></div>
            </Link>
          ) : (
            <></>
          )}
        </Suspense>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PlatformDetails;
