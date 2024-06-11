import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageTitle = styled.h3`
  ${({ theme }) => css`
    ${theme.font.extrabold_24}
    margin-bottom: 35px;
    text-align: center;

    @media ${theme.device.tablet} {
      ${theme.font.extrabold_34};
      margin-bottom: 45px;
    }

    @media ${theme.device.laptop} {
      ${theme.font.extrabold_54};
      margin-bottom: 70px;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media ${theme.device.laptop} {
      flex-direction: row;
      column-gap: 24px;
    }
  `}
`;

export const GreetingWrapper = styled.div`
  margin-bottom: 40px;

  @media ${({ theme }) => theme.device.laptop} {
    margin-bottom: 0;
  }
`;

export const GreetingSummary = styled.p`
  ${({ theme }) => css`
    ${theme.font.extrabold_20};
    position: relative;
    margin-bottom: 20px;
    padding-top: 15px;

    & > strong {
      color: ${theme.color.primary};
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 4px;
      background-color: ${theme.color.primary};
    }

    @media ${theme.device.tablet} {
      ${theme.font.extrabold_30};
      margin-bottom: 40px;
      padding-top: 25px;
    }

    @media ${theme.device.laptop} {
      ${theme.font.extrabold_42};
      margin-bottom: 70px;
      padding-top: 55px;
    }
  `}
`;

export const GreetingText = styled.p<{ hasMarginBottom?: boolean }>`
  ${({ theme, hasMarginBottom = false }) => css`
    ${theme.font.medium_14};
    margin-bottom: ${hasMarginBottom && "10px"};
    color: ${theme.color.gray_500};

    @media ${theme.device.tablet} {
      ${theme.font.medium_16};
      margin-bottom: ${hasMarginBottom && "15px"};
    }

    @media ${theme.device.laptop} {
      ${theme.font.medium_20};
      margin-bottom: ${hasMarginBottom && "30px"};
    }
  `}
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }

  @media ${({ theme }) => theme.device.laptop} {
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;

    @media ${theme.device.tablet} {
      width: 600px;
      height: 100%;
    }
  `}
`;

export const WorkPosition = styled.b`
  ${({ theme }) => css`
    ${theme.font.medium_14};
    display: block;
    margin: 30px 0 10px;
    color: ${theme.color.gray_500};
    text-align: center;

    @media ${theme.device.tablet} {
      ${theme.font.medium_16};
      margin: 35px 0 20px;
    }

    @media ${theme.device.laptop} {
      ${theme.font.medium_20};
      margin: 60px 0 30px;
      text-align: right;
    }
  `}
`;

// TODO: 추후 서명 이미지로 대체
export const Signature = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_14};
    display: block;
    color: ${theme.color.black};
    text-align: center;

    @media ${theme.device.tablet} {
      ${theme.font.medium_16};
    }

    @media ${theme.device.laptop} {
      ${theme.font.medium_20};
      text-align: right;
    }
  `}
`;
