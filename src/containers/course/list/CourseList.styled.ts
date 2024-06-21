import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CourseList = styled.section`
  ${({ theme }) => css`
    display: grid;
    column-gap: 8px;
    row-gap: 24px;
    border-radius: 4px;
    padding: 20px 16px;
    background-color: ${theme.color.gray_50};

    @media ${theme.device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.device.laptop} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const CourseItem = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CourseThumbnail = styled(Image)`
  width: 100%;
  max-height: 180px;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  object-fit: cover;
`;

export const CourseTitle = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_20};
    margin-bottom: 24px;
  `}
`;

export const CourseDescription = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    flex: 1;
    margin-bottom: 32px;
    color: ${theme.color.gray_900};
  `}
`;

export const DetailLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.medium_16};
    align-self: center;
    width: 120px;
    border-radius: 30px;
    padding: 6px 0;
    text-align: center;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
  `}
`;
