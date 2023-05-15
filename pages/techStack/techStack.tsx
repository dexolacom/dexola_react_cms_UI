'use client';

import PageContainer from '../../components/PageContainer/PageWrapper';
import { FlexColumnBlock } from '../../components/PageContainer/styles';
import { ColumnText, ColumnTitle, TechItem, TechItemColumn } from './styles';

const TechStack = () => {
  return (
    <PageContainer title={'Technology Stack'}>
      <FlexColumnBlock>
        <TechItem>
          <TechItemColumn>
            <ColumnTitle>Native platforms</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>JavaScript</ColumnText>
            <ColumnText>Vue.js</ColumnText>
            <ColumnText>Solidity</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>React.js</ColumnText>
            <ColumnText>Node.js</ColumnText>
            <ColumnText>Rust</ColumnText>
          </TechItemColumn>
        </TechItem>
        <TechItem>
          <TechItemColumn>
            <ColumnTitle>Cloud development</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>AWS</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Google Cloud</ColumnText>
          </TechItemColumn>
        </TechItem>
        <TechItem>
          <TechItemColumn>
            <ColumnTitle>Blockchain development</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Ethereum</ColumnText>
            <ColumnText>Stellar</ColumnText>
            <ColumnText>Fantom</ColumnText>
            <ColumnText>Tron</ColumnText>
            <ColumnText>Solidity</ColumnText>
            <ColumnText>Web3</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Binance</ColumnText>
            <ColumnText>Solana</ColumnText>
            <ColumnText>Polygon</ColumnText>
            <ColumnText>Multichain</ColumnText>
            <ColumnText>Rust</ColumnText>
            <ColumnText>Hardhat</ColumnText>
          </TechItemColumn>
        </TechItem>
        <TechItem>
          <TechItemColumn>
            <ColumnTitle>Additional tools</ColumnTitle>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Apollo Client</ColumnText>
            <ColumnText>Express.js</ColumnText>
            <ColumnText>GpaphQL</ColumnText>
          </TechItemColumn>
          <TechItemColumn>
            <ColumnText>Apollo Server</ColumnText>
            <ColumnText>OAuth</ColumnText>
            <ColumnText>SQL & NoSQL</ColumnText>
          </TechItemColumn>
        </TechItem>
      </FlexColumnBlock>
    </PageContainer>
  );
};

export default TechStack;
