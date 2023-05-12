"use client";
import styled from "styled-components";

interface IProps {
  marker: string;
}

export const Container = styled.ul`
  font-family: var(--font-roboto), sans-serif;
  width: var(--content-width);
  background-color: var(--bg-color);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
  &:hover {
    background-color: #212325;
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  padding: 30px;
`;

export const PaltfornName = styled.h2`
  color: var(--white);
  font-size: 20px;
  line-height: 2.4;
  font-family: var(--font-kanit);
`;
export const Description = styled.p`
  color: var(--preset-color);
  margin-top: 25px;
  font-family: var(--font-roboto);
  font-size: 16px;
`;

export const TechnologyContainer = styled.div`
  flex-basis: calc(5%);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechnologyItem = styled.span<IProps>`
  color: var(--preset-color);
  padding: 7px 12px;
  border: 1px solid var(--grey);
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-roboto);
  font-size: 16px;

  &:before {
    content: "";
    display: inline-block;
    background-color: ${(props) => (props.marker ? props.marker : "")};
    width: 6px;
    height: 6px;
  }

  &:hover {
    color: var(--black);
    background-color: var(--white);
  }
`;
