import styled from 'styled-components';
import { FlexColumnBlock, FlexRowBlock } from '../../components/PageContainer/styles';

export const ImagesWrapper = styled(FlexRowBlock)`
  justify-content: center;
  padding-top: 24px;
  margin-bottom: 39px;
  /* width: 100vw; */
`

export const ImagesColumn = styled(FlexColumnBlock)`
  margin-right: 32px;

  &:nth-of-type(2) {
    padding-top: 80px;
  }
`
export const LinksBlock = styled(FlexColumnBlock)`
`
export const LinkItem = styled(FlexRowBlock)`
  align-items: center;
  height: 64px;
  padding-right: 10px;
  border-bottom: 1px solid #36383C;
  cursor: pointer;

  & .linkArrow {    
    position: static;
  }
  
  &:hover .linkArrow {    
    transform: rotate(-45deg);
  }
`