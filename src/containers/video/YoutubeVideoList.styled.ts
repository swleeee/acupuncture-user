import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 30px 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1920px;
      height: 100%;
      margin-left: -960px;
      background-color: ${theme.color.gray_500};
      z-index: -1;
    }

    @media ${theme.device.tablet} {
      flex-direction: row;
      column-gap: 15px;
      row-gap: 0;
    }
  `}
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const VideoTitle = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_14};

    @media ${theme.device.laptop} {
      ${theme.font.extrabold_20};
    }
  `}
`;

export const VideoFrame = styled.iframe`
  border: 0;
`;
