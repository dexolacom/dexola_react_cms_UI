"use client";
// import Link from "next/image";
// import { useRouter } from "next/router";
// import { useRouter } from 'next/navigation'

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
  // const router = useRouter();
  // console.log('routes', router)
  return (
    <Container>
      {data?.map((el: IAttributesItem) => (
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
      ))}
      <DivImageContainer>
        <DivImage></DivImage>
      </DivImageContainer>
    </Container>
  );
};

export default TechnologiList;
