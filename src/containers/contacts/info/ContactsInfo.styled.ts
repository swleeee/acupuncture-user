import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.article`
  width: 70%;
  margin: 0 auto;
`;

export const DataWrapper = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 32px;
  margin-top: 16px;
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
