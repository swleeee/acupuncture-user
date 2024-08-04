import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    min-height: 1000px;
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

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.font.extrabold_54};
    color: ${theme.color.white};
    margin-bottom: 130px;
    text-align: center;
  `}
`;

export const ServiceList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    row-gap: 15px;
    flex-direction: column;

    @media ${theme.device.laptop} {
      flex-direction: row;
      column-gap: 15px;
    }
  `}
`;

export const ServiceItem = styled.li`
  ${({ theme }) => css`
    flex: 1;
    height: 500px;

    @media ${theme.device.laptop} {
      height: 600px;
    }
  `}
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;

  & > img {
    height: 400px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);

    & > h3 {
      display: none;
    }

    & > p {
      display: block;
    }
  }
`;

export const ServiceTitle = styled.h3`
  ${({ theme }) => css`
    ${theme.font.extrabold_34};
    color: ${theme.color.white};
    margin-bottom: 15px;
  `}
`;

export const ServiceDescription = styled.p`
  ${({ theme }) => css`
    ${theme.font.bold_21};
    display: none;
    margin-top: 45px;
    text-align: center;
    color: ${theme.color.white};
  `}
`;
