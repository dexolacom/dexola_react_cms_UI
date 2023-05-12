"use client";

import React, { useEffect, useState } from "react";

import CasesList from "../technology/technologiList";
import { getAllPlatform } from "../../services/api";

import { IAttributesItem } from "../../types";

import { Container } from "./styles";

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
      {platform.length > 0
        ? platform.map((item: IAttributesItem) => (
            <CasesList data={[item]} key={item.id} />
          ))
        : "Loading ..... "}
    </Container>
  );
};

export default CasesSection;
