"use client";

import React, { useEffect, useState } from "react";

import { PlatformData, PlatformItem } from "../../types";
import st from "./cases.module.css";
import { getPlatform } from "../../api/api";
import TechnologiList from "../Technology/TechnologiList";
import PageContainer from "../PageContainer/PageWrapper";

const CasesSection = () => {
  const [platform, setPlatform] = useState<PlatformData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlatform();

      const result = response?.map((item: PlatformItem) => ({
        id: item.id,
        ...item.attributes.data,
      }));

      setPlatform(result);
    };

    fetchData();
  }, []);

  return (
    <PageContainer title={"Case Studies"}>
      <div className={st.container}>
        {platform?.length > 0
          ? platform?.map((item: any) => (
              <TechnologiList data={[item]} key={item.id} />
            ))
          : "Loading ..... "}
      </div>
    </PageContainer>
  );
};

export default CasesSection;
