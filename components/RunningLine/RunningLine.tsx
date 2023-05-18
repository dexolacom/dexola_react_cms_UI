'use client';

import styled from 'styled-components';
import { BlockWrapper, Sidebar } from '../PageContainer/styles';

export const TransparentBlock = styled(Sidebar)`
  padding: 0;
`;

export const ColorfulBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: white;
  /* --- */
  width: calc(100vw - 420px);
  height: 40px;
  padding-left: 420px;
  background: linear-gradient(
    90deg,
    #eb3795 3.67%,
    #42b3cf 28.84%,
    #42b3cf 35.46%,
    #8961df 63.98%,
    #8961df 68.78%,
    #eb3795 97.12%
  );
`;

const RunningLine = () => {
  return (
    <BlockWrapper>
      <TransparentBlock />
      <ColorfulBlock>Drop us a line</ColorfulBlock>
    </BlockWrapper>
  );
};

export default RunningLine;
