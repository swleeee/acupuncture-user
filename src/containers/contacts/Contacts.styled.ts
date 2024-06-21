import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    /* height: 450px; */
    padding: 30px 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1920px;
      height: 100%;
      margin-left: -960px;
      background-color: ${theme.color.gray_200};
      z-index: -1;
    }
  `}
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_21};
    margin-bottom: 40px;
    text-align: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media ${theme.device.tablet} {
      flex-direction: row;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 136px;
      row-gap: 0;
    }

    @media ${theme.device.laptop} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
