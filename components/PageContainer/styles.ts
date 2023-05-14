import styled from 'styled-components';

export const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `

export const FlexColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `

export const MainRobotoParagraph = styled.p`
  font-family: var(--font-roboto-mono);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #B3B3B3;
  `
export const MainKatinParagraph = styled(MainRobotoParagraph)`
  font-family: var(--font-kanit);
  color: #FFFFFF;
  `
// --- - ---
export const BlockWrapper = styled(FlexRowBlock)`
  background-color: #aaa;
  width: 100vw; 
   /* height: 100vh; */
  height: fit-content;
`

export const Sidebar = styled.div`
  width: 420px; 
   /* height: 100vh; */
  padding: 80px 0 0 100px;
  background-image: url(LH_BG_2.png);
  background-size: cover; 
`

export const Title = styled.p`
  font-family: var(--font-kanit);
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 48px;
  /* identical to box height, or 133% */
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #FFFFFF;
  `

export const ContentBox = styled(FlexColumnBlock)`
  width: calc(100vw - 420px); 
  height: fit-content;;
  padding: 92px 114px 92px 135px;
  background: #17191D;
`

export const ContentText = styled(MainRobotoParagraph)`
  margin-bottom: 16px;
`