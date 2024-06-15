import Link from "next/link";
import styled from "@emotion/styled";
import { css, keyframes, Theme } from "@emotion/react";

const openSidebar = keyframes` 
  0% { left: 100% }
  100% { left: 20% }
`;
const closeSidebar = keyframes`
  0% { left: 20% }
  100% { left: 100% }
`;

export const Sidebar = styled.aside<{ isShow: boolean }>`
  ${({ theme, isShow }) => css`
    position: fixed;
    top: 0;
    width: 80%;
    height: 100vh;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.SIDEBAR};
    animation: ${isShow ? openSidebar : closeSidebar} 0.5s forwards;
    transition: all 0.3s cubic-bezier(0.93, 0.635, 0.65, 0.97);
  `}
`;

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    background-color: ${theme.color.primary};
  `}
`;

const iconStyle = (theme: Theme) => css`
  & > svg > g > path {
    fill: ${theme.color.white};
  }
`;

// TODO: SVG 수정
export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${iconStyle(theme)};
  `}
`;

export const ProfileLink = styled(Link)`
  ${({ theme }) => css`
    ${iconStyle(theme)};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.color.white};
    border-radius: 50%;
  `}
`;

export const MainNavItem = styled.li`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.gray_200};
  `}
`;

const open = (theme: Theme) => keyframes`
  0% {
    display: none;
    height: 0px;
    border-top: 0;
    padding: 0 15px;
    overflow: hidden;
  }

  // TODO: 임시로 200px 설정 (추후 자식 요소의 height에 맞게 늘어날 수 있도록 수정 필요)
  100% {
    display: block;
    height: 200px;
    border-top: 1px solid ${theme.color.gray_200};
    padding: 10px 15px;
    overflow: visible;
  }
`;

const close = (theme: Theme) => keyframes`
  0% {
    display: block;
    height: 200px;
    border-top: 1px solid ${theme.color.gray_200};
    padding: 10px 15px;
    overflow: visible;
  }

  100% {
    display: none;
    height: 0;
    border-top: 0;
    padding: 0 15px;
    overflow: hidden;
  }
`;

export const SubNavList = styled.ul<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    display: ${!isActive && "none"};
    background-color: ${theme.color.gray_100};
    transition: 0.5s;
    animation: ${isActive ? open(theme) : close(theme)} 0.2s ease-out forwards;

    & > li {
      display: flex;
      align-items: center;
      height: 30px;
    }
  `}
`;

const parentNavStyle = (theme: Theme) => css`
  ${theme.font.regular_14};
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  color: ${theme.color.black};
`;

export const Button = styled.button`
  ${({ theme }) => css`
    ${parentNavStyle(theme)};
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    ${parentNavStyle(theme)};
  `}
`;

export const SubNavLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_900};
  `}
`;
