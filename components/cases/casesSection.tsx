"use client";

import React, { useEffect, useState } from "react";

import { PlatformData, PlatformItem } from "../../types";
import st from "./cases.module.css";
import TechnologiList from "../Technology/TechnologiList";
import { getPlatform } from "../../api/api";

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
    <div className={st.container}>
      {platform?.length > 0
        ? platform?.map((item: any) => (
            <TechnologiList data={[item]} key={item.id} />
          ))
        : "Loading ..... "}
    </div>
  );
};

export default CasesSection;
