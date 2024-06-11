import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: 300px; // TODO: 추후 수정 예정
    color: ${theme.color.white};
    background-color: ${theme.color.black};
  `}
`;
