import styled from 'styled-components';
import { FlexColumnBlock, FlexRowBlock, MainKatinParagraph, MainRobotoParagraph } from '../../components/PageContainer/styles';

export const TypesItemWrapper = styled(FlexColumnBlock)`
  border-bottom: 1px solid #36383C;
`

export const CompanyTypesItem = styled(FlexRowBlock)`
  align-items: center;
  height: 64px;
  /* border-bottom: 1px solid #36383C; */
  cursor: pointer;
`

export const TypesTitle = styled(MainKatinParagraph)`
/* font-family: 'Georama'; ??? */
  font-weight: 600;
  letter-spacing: 0.08em;
`
interface IProps {
  show: boolean;
}

export const TypesText = styled(MainRobotoParagraph) <IProps>`
  margin-bottom:  ${(props) => (props.show ? '16px' : "0")};
height: ${(props) => (props.show ? '100%' : 0)};
opacity: ${(props) => (props.show ? 1 : 0)};
transition: height 0.25s ease-out, opacity 0.2s ease-out, margin-bottom 0.2s ease-out;
`