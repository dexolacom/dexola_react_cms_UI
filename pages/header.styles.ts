import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #aaa;
  width: 100vw; 
  height: 100vh;
  background-image: url(Dexola_BG_1.png);
  background-size: cover;
`
export const TopBox = styled.div`
  position: fixed; 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 34px 32px 0 32px;
`

export const Logo = styled.div`
  padding: 34px 0 0 32px;
  cursor: pointer;
`

export const Description = styled.div`
  padding: 168px 0 0 116px;
  padding-top: 26vh;
  /* padding-left: 9vh; */
`

export const HeaderTitle = styled.p`
  margin-bottom: 32px;
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

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  width: 370px;
  font-family: var(--font-roboto-mono);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  /* or 180% */
  letter-spacing: -0.02em;
  color: #17191D;
`
export const LogoTrinetix = styled.div`
  display: inline-block;
  width: 100px;
  height: 32px;
  background: #17191D;
  border-radius: 2px;
  background-image: url(logo-trinetix.svg);
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
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
export const OurAddress = styled.p`
  padding-bottom: 28px;
  padding-left: 116px;
  font-family: var(--font-roboto-mono);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  letter-spacing: -0.01em;
  color: #000000;
`