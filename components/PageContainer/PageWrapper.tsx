'use client';

import { BlockWrapper, ContentBox, Sidebar, Title } from './styles';

const PageContainer = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <BlockWrapper>
      <Sidebar>
        <Title>{title}</Title>
      </Sidebar>
      <ContentBox>{children}</ContentBox>
    </BlockWrapper>
  );
};

export default PageContainer;
