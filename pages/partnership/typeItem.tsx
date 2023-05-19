'use client';

import {
  CompanyTypesItem,
  SignBlock,
  TypesItemWrapper,
  TypesText,
  TypesTitle,
} from './styles';

const TypeItem = ({
  index,
  title,
  text,
  clickHandler,
  showStatus,
}: {
  index: number;
  title: string;
  text: string;
  clickHandler: (e: React.SyntheticEvent) => void;
  showStatus: boolean;
}) => {
  return (
    <TypesItemWrapper>
      <CompanyTypesItem id={`${index}`} onClick={e => clickHandler(e)}>
        <TypesTitle>{title}</TypesTitle>
        <SignBlock show={showStatus} />
      </CompanyTypesItem>
      <TypesText show={showStatus}>{text}</TypesText>
    </TypesItemWrapper>
  );
};

export default TypeItem;
