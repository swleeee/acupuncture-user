import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    height: 50px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.HEADER};

    @media ${theme.device.tablet} {
      height: 95px;
    }
  `}
`;
