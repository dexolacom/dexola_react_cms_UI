"use client";

import Link from "next/link";

import { CasesListProps, IAttributesItem } from "../../types";
import {
  Container,
  ListItem,
  PaltfornName,
  TechnologyContainer,
  TechnologyItem,
  Description,
  DivImage,
  DivImageContainer,
} from "./styles";

const TechnologiList = ({ data }: CasesListProps) => {
  return (
    <Container>
      {data?.map((el: IAttributesItem) => (
        <Link href={`/platform/${el.id}`} key={el.id}>
          <ListItem key={el.id}>
            <PaltfornName>{el.paltfornName}</PaltfornName>
            {el.technology ? (
              <TechnologyContainer>
                {el.technology.map((item, idx) => (
                  <TechnologyItem marker={item.marker} key={idx}>
                    {item.name}
                  </TechnologyItem>
                ))}
              </TechnologyContainer>
            ) : null}

            <Description>{el.description}</Description>
          </ListItem>
          /
        </Link>
      ))}
      <DivImageContainer>
        <DivImage></DivImage>
      </DivImageContainer>
    </Container>
  );
};

export default TechnologiList;
