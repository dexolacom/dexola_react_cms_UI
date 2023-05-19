import { GetStaticProps } from "next";
import { Suspense } from "react";

import TechnoList from "../../components/Technology/TechnoList/TechnoList";

import { getDetails, getDetailsID } from "../../api/api";
import { PlatformDetailData } from "../../types";

import st from "./id.module.css";

export const getStaticPaths = async () => {
  try {
    const response = await getDetails();

    const paths = response?.data?.data?.map((detail) => ({
      params: { id: String(detail.id) },
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
      // throw new Error("Invalid params ID getStaticProps");
      console.error("Invalid params ID getStaticProps");
      return {
        props: {
          platformDetails: [],
        },
      };
    }
    const { id } = params;

    const response = await getDetailsID(id);

    const platformDetails = response?.data?.data;

    return {
      props: {
        platformDetails,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        platformDetails: [],
      },
    };
  }
};

const PlatformDetails = ({
  platformDetails,
}: {
  platformDetails: PlatformDetailData | null;
}) => {
  if (!platformDetails) {
    return <div>Loading...</div>;
  }

  const { id, attributes } = platformDetails;
  const { data, image, createdAt, updatedAt, publishedAt } = attributes;

  return (
    <Suspense fallback={"Loading ......"}>
      <div className={st.container}>
        <TechnoList
          key={id}
          heading={data.paltfornName}
          description={data.summary}
          technology={data.technology}
        />
      </div>
    </Suspense>
  );
};

export default PlatformDetails;
