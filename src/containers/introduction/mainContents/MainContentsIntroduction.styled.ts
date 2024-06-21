import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    min-height: 450px;
    padding: 30px 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1920px;
      height: 100%;
      margin-left: -960px;
      background-color: ${theme.color.gray_900};
      z-index: -1;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.extrabold_42};
    color: ${theme.color.white};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.font.medium_20};
    color: ${theme.color.white};
  `}
`;
