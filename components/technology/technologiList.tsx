"use client";

import Link from "next/link";

import { CasesListProps, IAttributesItem } from "../../types";
import TechnoList from "./TechnoList/TechnoList";

import st from "./technoList.module.css";

const TechnologiList = ({ data }: CasesListProps) => {
  return (
    <ul className={st.container}>
      {data?.map((el: IAttributesItem) => (
        <Link href={`/platform/${el.id}`} key={el.id}>
          <TechnoList
            heading={el.paltfornName}
            description={el.description}
            technology={el.technology}
          />
        </Link>
      ))}
      <div className={st.imageContainer}>
        <div className={st.imageDiv}></div>
      </div>
    </ul>
  );
};

export default TechnologiList;
