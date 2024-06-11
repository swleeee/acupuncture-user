import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SidebarButton = styled.button<{ isShow: boolean }>`
  ${({ isShow }) => css``}
`;
