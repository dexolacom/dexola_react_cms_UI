import styled from 'styled-components';

export const ContactButton = styled.button`
position: fixed;
width: 128px;
height: 40px;
  right: 32px;
  bottom: 32px;

background-image: url(Rectangle3002.svg);
animation: back 5s linear infinite;
  @keyframes back {
      from { background-position-x: left; }
      to { background-position-x: right; }
  }

outline: none;
border: none;
border-radius: 20px;
font-family: var(--font-roboto-mono);
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

letter-spacing: 0.02em;

color: #FFFFFF;

text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
cursor: pointer;
`