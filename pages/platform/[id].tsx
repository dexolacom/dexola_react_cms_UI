import "../../src/app/globals.css";

import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import { getPlatform, getPlatformId } from "../../api/api";

import PageContainerItem from "./ContainerPage";
import CustomReactMarkdown from "../../components/CustomMarkdown/CustomReactMarkdown";
import CustomMarkdown from "../../components/CustomMarkdown/CustomIDMarkdown";

import { getImageUrlFromMarkdown } from "../../lib/getImageUrlFromMarkdown";
import { removeImageLinksFromMarkdown } from "../../lib/removeImageLinksFromMarkdown";
import RenderListTechnology from "../../lib/RenderListTechnology";

import st from "./id.module.css";

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
  } = attributes;

  // get Link Image
  const imageUrl = getImageUrlFromMarkdown(summary);
  // remove Link Image from text
  const removeLinlImage = removeImageLinksFromMarkdown(summary);

  return (
    <PageContainerItem title={paltformName} isGoBack={true}>
      <Suspense fallback={"Loading ... . . ."}>
        <CustomReactMarkdown
          technology={services}
          heading={"Services"}
          subHeading={"Summary"}
        >
          {removeLinlImage}
        </CustomReactMarkdown>
        <div style={{ width: "100%" }}>
          {imageUrl && (
            <Image
              src={`${process.env.BASE_URL + imageUrl}`}
              alt="wer"
              width={825}
              height={525}
              sizes="100vw"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>
        <ul>
          <h3 className={st.headText}>Technology Stack</h3>
          <RenderListTechnology arr={network} title={"Network"} />
          <RenderListTechnology arr={backEnd} title={"Back-End"} />
          <RenderListTechnology arr={database} title={"Database"} />
          <RenderListTechnology arr={blockchain} title={"Blockchain"} />
          <RenderListTechnology arr={frontEnd} title={"Front-End"} />
          <RenderListTechnology arr={infrastructure} title={"Infrastructure"} />
        </ul>
        <CustomMarkdown>{description}</CustomMarkdown>
        {platformLink !== null ? (
          <Link
            href={platformLink}
            className={st.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={st.container}>
              {platformLink}
              <div className={st.imageContainer}>
                <div className={st.imageDiv}></div>
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
