import styled from 'styled-components';
import { FlexColumnBlock, FlexRowBlock, MainRobotoParagraph } from '../../components/PageContainer/styles';

export const TechItem = styled(FlexRowBlock)`
  height: auto;
  padding: 18px 0;
  border-bottom: 1px solid #36383C;

  &:last-of-type {
    border-bottom: none;
  }
`

export const TechItemColumn = styled(FlexColumnBlock)`
  & > p {
    width: 172px;
  }
`

export const ColumnText = styled(MainRobotoParagraph)`
  padding: 6px 0;
  text-align: right;
  color: #FFFFFF;
`

export const ColumnTitle = styled(MainRobotoParagraph)`
  padding: 6px 0;
  text-align: left;
`