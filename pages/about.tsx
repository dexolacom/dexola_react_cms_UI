'use client';
import { Title } from './styles';
import styled from 'styled-components';

export const Title1 = styled.h1`
  font-family: var(--font-roboto), sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const About = () => {
  return <Title>about NEW</Title>;
};

export default About;
