import Link from "next/link";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const Header = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.HEADER};
  `}
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Navbar = styled.nav`
  display: flex;
  flex: 1;
  margin: 0 24px;
`;

export const MainNavItem = styled.li<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    position: relative;
    display: inline-block;
    padding: 8px 20px;

    & > a {
      color: ${isActive ? theme.color.black : theme.color.gray_200};
    }
  `}
`;

const fadeIn = keyframes`
  0% {
    top: 100%;
    opacity: 0;
    visibility: hidden;
  }
  
  100% {
    top: calc(100% + 16px);
    opacity: 1;
    visibility: visible;
  }
`;

const activeStyle = css`
  animation: ${fadeIn} 0.3s linear forwards;
`;

export const SubNavList = styled.ul<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    ${isActive && activeStyle}
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    width: max-content;
    height: 52px;
    border-radius: 10px;
    padding: 6px 7px;
    background-color: ${theme.color.black};
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

    &::after {
      content: "";
      position: absolute;
      top: -16px;
      left: 0;
      display: block;
      width: 100%;
      height: 16px;
    }

    & > li {
      display: inline-flex;
      align-items: center;
      width: 156px;
      border-radius: 6px;
      color: ${theme.color.white};
      transition: 0.3s;

      &:hover {
        background-color: ${theme.color.white};

        & > a {
          color: ${theme.color.black};
        }
      }
    }
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.bold_21};
    color: ${theme.color.black};
  `}
`;

export const SubNavLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.medium_16};
    width: 100%;
    color: ${theme.color.white};
    text-align: center;
    transition: 0.3s;
  `}
`;
