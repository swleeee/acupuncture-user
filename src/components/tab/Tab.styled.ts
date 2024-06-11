import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const TabList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    margin: 50px 0; // TODO: 삭제 예정
    border: 1px solid ${theme.color.gray_100};
    border-radius: 34px;

    @media ${theme.device.tablet} {
      margin: 70px 0; // TODO: 삭제 예정
    }

    @media ${theme.device.laptop} {
      margin: 100px 0; // TODO: 삭제 예정
    }
  `}
`;

export const TabItem = styled.li`
  width: 100%;
`;

export const TabLink = styled(Link)<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    ${theme.font.medium_14};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 42px;
    margin: -1px;
    border-radius: 34px;
    color: ${selected ? theme.color.white : theme.color.gray_300};
    background-color: ${selected ? theme.color.primary : "transparent"};

    @media ${theme.device.tablet} {
      ${theme.font.medium_16};
      height: 68px;
    }

    @media ${theme.device.laptop} {
      ${theme.font.medium_20};
      height: 68px;
    }
  `}
`;
