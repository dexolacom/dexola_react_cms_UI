import styled from 'styled-components';
import { FlexRowBlock, MainRobotoParagraph } from '../components/PageContainer/styles';

export const AboutSubtitle = styled.p`
  margin-bottom: 12px;
  font-family: var(--font-kanit);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
/* identical to box height, or 120% */
  letter-spacing: 0.02em;
  color: #FFFFFF;
`

export const AdvertWrapper = styled(FlexRowBlock)`
  flex-wrap: wrap; 
  padding: 32px 0;
`

export const AdvertBlock = styled.div`
  flex-basis: 50%;
  margin-bottom: 32px; 
`

export const AdvertAmount = styled.p`
  margin-buttom: 8px; 
  font-family: var(--font-kanit);
  font-style: normal;
  font-weight: 275;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height, or 117% */
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #FFFFFF;
`

export const AdvertText = styled(MainRobotoParagraph)`
  width: 274px;   
`