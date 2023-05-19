import styled from 'styled-components';
import { FlexColumnBlock, FlexRowBlock, MainKatinParagraph, MainRobotoParagraph } from '../../components/PageContainer/styles';

interface IProps {
  show: boolean;
}

export const TypesItemWrapper = styled(FlexColumnBlock)`
  border-bottom: 1px solid #36383C;
`

export const CompanyTypesItem = styled(FlexRowBlock)`
  align-items: center;
  height: 64px;
  cursor: pointer;
`

export const TypesTitle = styled(MainKatinParagraph)`
  font-weight: 600;
  letter-spacing: 0.08em;
`

export const SignBlock = styled.div  <IProps>`
  width: 16px;
  height: ${(props) => (props.show ? '2px' : '16px')};
  background-image: url(/plus_v.svg), url(/plus_h.svg);
  background-repeat: no-repeat;
  background-position: center;
  transition: height 0.2s ease-out;
`

export const TypesText = styled(MainRobotoParagraph) <IProps>`
  margin-bottom:  ${(props) => (props.show ? '16px' : "0")};
height: ${(props) => (props.show ? '100%' : 0)};
opacity: ${(props) => (props.show ? 1 : 0)};
transition: opacity 0.2s ease-out, height 0.25s ease-out, margin-bottom 0.2s ease-out;
`