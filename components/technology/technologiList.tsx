import { CasesListProps, IAttributesItem } from "../../types";
import {
  Container,
  Description,
  ListItem,
  PaltfornName,
  TechnologyContainer,
  TechnologyItem,
} from "./styles";

const CasesList = ({ data }: CasesListProps) => {
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
    </Container>
  );
};

export default CasesList;
