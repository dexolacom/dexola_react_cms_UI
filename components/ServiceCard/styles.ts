import styled from 'styled-components';

export const ImageItem = styled.div`
position: relative;
overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 275px;
  height: 355px;
  margin-bottom: 24px;
  background: #272A2E;
`
export const ImageItemHover = styled.div`
position: absolute;
top: 275px;
width: 275px;
height: 355px;
margin-bottom: 24px;
background: #272A2E;

&:hover {
top: 75px;
}
`
// --- for CardHover ---
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 275px;
  height: 355px;
  padding: 32px 40px 8px 24px;
  background: #272A2E;

  & ul {
    padding-left: 16px;
    font-family: var(--font-roboto-mono);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    letter-spacing: 0.02em;
    color: #C0C0C0;
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