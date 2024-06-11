import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Dim = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: ${theme.zIndex.SIDEBAR};
  `}
`;
