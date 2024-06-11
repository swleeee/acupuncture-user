import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

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
