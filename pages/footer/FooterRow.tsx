'use client';

import {
  ArrowBlock,
  ColumnText,
  ColumnTitle,
  FooterRow,
  TechItemColumn,
} from './styles';

interface IFooterInfo {
  title: string;
  firstColumn: string[];
  secondColumn: string[];
}

const FooterRow1 = ({ footerInfo }: { footerInfo: IFooterInfo }) => {
  const { title, firstColumn, secondColumn } = footerInfo;
  return (
    <FooterRow>
      <TechItemColumn>
        <ColumnTitle>{title}</ColumnTitle>
      </TechItemColumn>
      <TechItemColumn>
        {firstColumn &&
          firstColumn.length > 0 &&
          firstColumn.map(el => (
            <>
              <ColumnText key={el}>{el}</ColumnText>
              <ArrowBlock className="linkArrow"></ArrowBlock>
            </>
          ))}
      </TechItemColumn>
      <TechItemColumn>
        {secondColumn &&
          secondColumn.length > 0 &&
          secondColumn.map(el => <ColumnText key={el}>{el}</ColumnText>)}
      </TechItemColumn>
    </FooterRow>
  );
};

export default FooterRow1;
