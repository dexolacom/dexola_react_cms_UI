import styled from 'styled-components';

export const HeaderWrapper = styled.div`
background-color: #aaa;
width: 100vw; 
height: 100vh;
background-image: url(Dexola_BG_1.png);
background-size: cover;
`

export const Logo = styled.div`
padding: 34px 0 0 32px;
`

export const HeaderTitle = styled.p`
font-family: var(--font-kanit);
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
/* or 112% */
letter-spacing: 0.02em;
text-transform: capitalize;
color: #17191D;
`

export const Blank = styled.span`
  position: relative;
  bottom: 8px;
  animation: blink 2s infinite;
  @keyframes blink {
      from { opacity: 1; }
      to { opacity: 0; }
  }
`
