import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.article`
  flex: 1;
`;

export const Map = styled.div`
  ${({ theme }) => css`
    ${theme.font.extrabold_54};
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 150px; */
    height: 300px;
    margin-bottom: 40px;
    color: ${theme.color.white};
    background-color: #3f3a01;
  `}
`;

export const DataWrapper = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 32px;
`;

export const Term = styled.dt`
  ${({ theme }) => css`
    ${theme.font.medium_20};
    color: ${theme.color.primary};
  `}
`;

export const Description = styled.dd`
  ${({ theme }) => css`
    ${theme.font.regular_16};
    color: ${theme.color.black};
  `}
`;
