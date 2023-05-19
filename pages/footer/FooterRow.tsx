'use client';

import { IFooterInfo } from '../../interfaces/interfaces';
import {
  ArrowBlock,
  ColumnText,
  ColumnTitle,
  FooterRow,
  TechItemColumn,
} from './styles';

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
            <div key={el}>
              <ColumnText>{el}</ColumnText>
              <ArrowBlock className="linkArrow"></ArrowBlock>
            </div>
          ))}
      </TechItemColumn>
      <TechItemColumn>
        {secondColumn &&
          secondColumn.length > 0 &&
          secondColumn.map(el => (
            <div key={el}>
              <ColumnText>{el}</ColumnText>
              <ArrowBlock className="linkArrow"></ArrowBlock>
            </div>
          ))}
      </TechItemColumn>
    </FooterRow>
  );
};

export default FooterRow1;
