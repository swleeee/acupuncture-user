import styled from "@emotion/styled";
import { css } from "@emotion/react";

import projectImg from "@/assets/image/project-background.png";
import { Theme } from "@emotion/react";

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
      z-index: -1;
      background: no-repeat center url(${projectImg.src});
    }
  `}
`;

export const Introduction = styled.p`
  ${({ theme }) => css`
    ${theme.font.extrabold_34};
    max-width: 837px;
    height: 200px;
    color: ${theme.color.white};
    white-space: pre-wrap;
  `}
`;

export const SlickContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 36px;
`;

export const SlickCounterWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.font.extrabold_24};
    color: ${theme.color.white};
  `}
`;

export const SlickCounter = styled.span<{ isCurrentStep?: boolean }>`
  ${({ theme, isCurrentStep }) => css`
    color: ${isCurrentStep ? theme.color.blue_500 : theme.color.white};
  `}
`;

export const SlickController = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const iconStyle = (theme: Theme) => css`
  width: 24px;
  height: 24px;

  & > g > path {
    fill: ${theme.color.white};
  }
`;

export const CardContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    column-gap: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px 0;
    height: 140px;

    @media ${theme.device.laptop} {
      height: inherit;
      padding-left: 0;
      background-color: transparent;
    }
  `}
`;

export const Card = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    color: ${theme.color.white};

    & > svg {
      flex: 1;
    }

    @media ${theme.device.laptop} {
      height: 300px;
      border: 1px solid ${theme.color.white};
      border-radius: 30px;
      padding: 45px 0;
    }
  `}
`;

export const CardTitle = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_14};

    @media ${theme.device.laptop} {
      ${theme.font.bold_21};
    }
  `}
`;

export const CardCount = styled.div`
  ${({ theme }) => css`
    ${theme.font.medium_16};

    @media ${theme.device.laptop} {
      ${theme.font.extrabold_30};
    }
  `}
`;
