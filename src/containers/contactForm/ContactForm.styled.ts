import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.article`
  ${({ theme }) => css`
    flex: 1;
    padding: 40px;
    background-color: ${theme.color.white};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.font.extrabold_24};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-bottom: 32px;
    color: ${theme.color.gray_300};
  `}
`;

export const ElementWrapper = styled.div<{ mb: number }>`
  ${({ mb }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-bottom: ${mb}px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.regular_16};
  `}
`;

const textInputStyle = (theme: Theme, hasError: boolean) => css`
  ${theme.font.regular_14};
  border: 1px solid ${hasError ? theme.color.red_100 : theme.color.gray_100};
  padding: 11px 13px;

  &::placeholder {
    color: ${theme.color.gray_500};
  }
`;

export const Input = styled.input<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    ${textInputStyle(theme, hasError)}
  `}
`;

export const Textarea = styled.textarea<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    ${textInputStyle(theme, hasError)}
    height:112px;
    resize: none;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.font.semibold_18};
    height: 52px;
    padding: 0 32px;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    ${theme.font.medium_14};
    position: absolute;
    top: calc(100% + 4px);
    color: ${theme.color.red_100};
  `}
`;
