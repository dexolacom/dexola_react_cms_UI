import styled from 'styled-components';
import { FlexColumnBlock, FlexRowBlock, MainRobotoParagraph } from '../../components/PageContainer/styles';

export const FooterRow = styled(FlexRowBlock)`
  padding: 18px 0;
  border-bottom: 1px solid #36383C;

  &:last-of-type {
    border-bottom: none;
  }
`

export const TechItemColumn = styled(FlexColumnBlock)`
  & > div {
    cursor: pointer;
    position: relative;
    & > p {
      width: 172px;
    }
  
    &:hover .linkArrow {
        transform: rotate(-45deg);
      color: #f00;
    }
  }

`

export const ColumnTitle = styled(MainRobotoParagraph)`
  padding: 6px 0 0;
  margin-bottom: 6px;
  font-size: 13px;
  letter-spacing: -0.03em;
  text-align: left;
`

export const ColumnText = styled(ColumnTitle)`
  text-align: right;
  color: #FFFFFF;
`

export const AddressColumn = styled(FlexColumnBlock)`
  & > p {
    width: 100%;
  }

  & > p:last-of-type {
    color: #B3B3B3;
  }
`

export const ArrowBlock = styled.div`
    position: absolute;
    bottom: 15px;
    right: -12px;
    width: 6px;
    height: 7px;
    background-image: url(/arrow_small.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    transition: transform 0.2s linear;
    transform: rotate(0deg);
 `
