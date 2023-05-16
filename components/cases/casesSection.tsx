"use client";

import React, { useEffect, useState } from "react";

import { getAllPlatform } from "../../Api/api";

import { IAttributesItem } from "../../types";
import { Container } from "./styles";
import TechnologiList from "../technology/technologiList";

const CasesSection = () => {
  const [platform, setPlatform] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const platformData = await getAllPlatform();
      setPlatform(platformData);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {platform?.length > 0
        ? platform?.map((item: IAttributesItem) => (
            <TechnologiList data={[item]} key={item.id} />
          ))
        : "Loading ..... "}
    </Container>
  );
};

export default CasesSection;
