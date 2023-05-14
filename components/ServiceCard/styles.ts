import styled from 'styled-components';
import { FlexColumnBlock } from '../PageContainer/styles';

export const ImageItem = styled(FlexColumnBlock)`
  position: relative;
  width: 275px;
  height: 355px;
  margin-bottom: 24px;
  background: #272A2E;
  overflow: hidden;
  cursor: pointer;

  &:hover .infoHover {
    top: 0px; 
    padding-top: 32px;
    
    & ul {
      opacity: 1;
    }
  }

  &:hover .linkArrow {    
    transform: rotate(-45deg);
  }
`

export const ArrowBlock = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 13px;
  height: 13px;  
  background-image: url(/arrow_rb.svg);
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.2s linear;
  transform: rotate(0deg); 
 `
// --- for CardHover ---
export const CardWrapper = styled(FlexColumnBlock)`
  position: absolute;
  top: 275px;
  width: 275px;
  height: 355px;
  padding: 32px 40px 8px 24px;
  padding: 17px 40px 8px 24px;
  background: #272A2E;
  transition: top 0.3s linear 0s, padding-top 0.03s linear 0s;

  & ul {
    padding: 0 0 0 16px;
    font-family: var(--font-roboto-mono);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    letter-spacing: 0.02em;
    color: #C0C0C0;
    opacity: 0;
  }

  & li {
    margin-bottom: 4px;
  }
`

export const ServiceDescription = styled.div`
position: relative;
padding-left: 16px;
margin-bottom: 16px;
font-family: var(--font-kanit);
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */
letter-spacing: 0.02em;
color: #FFFFFF;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -4px;
    top: 7px;
    background-color: ${(props) => (props.color ? props.color : 'white')}; 
    width: 8px;
    height: 8px;
  } 
`