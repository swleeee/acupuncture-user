import React from "react";

import courseThumbnail1 from "@/assets/image/Course Images.png";
import courseThumbnail2 from "@/assets/image/Course Images2.png";
import courseThumbnail3 from "@/assets/image/Course Images3.png";
import courseThumbnail4 from "@/assets/image/Course Images4.png";
import * as S from "./CourseList.styled";

export const CourseList = () => {
  const COURSE_LIST = [
    {
      key: "public",
      thumbnail: courseThumbnail1,
      title: "공개강좌",
      description:
        "공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. 공개강좌에 대한 내용입니다. ",
      hasDetail: false,
    },
    {
      key: "main",
      thumbnail: courseThumbnail2,
      title: "본강좌",
      description:
        "본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. 본강좌에 대한 내용입니다. ",
      hasDetail: true,
    },
    {
      key: "advanced",
      thumbnail: courseThumbnail3,
      title: "심화강좌",
      description:
        "심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. 심화강좌에 대한 내용입니다. ",
      hasDetail: true,
    },
    {
      key: "workshop",
      thumbnail: courseThumbnail4,
      title: "워크샵",
      description:
        "워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. 워크샵에 대한 내용입니다. ",
      hasDetail: true,
    },
  ];

  return (
    <S.CourseList>
      {COURSE_LIST.map((course) => (
        <S.CourseItem key={course.key}>
          <S.CourseThumbnail
            src={course.thumbnail}
            alt={`${course.title} thumbnail`}
          />
          <S.CourseTitle>{course.title}</S.CourseTitle>
          <S.CourseDescription>{course.description}</S.CourseDescription>
          {course.hasDetail && (
            <S.DetailLink href="#">자세히 보기</S.DetailLink>
          )}
        </S.CourseItem>
      ))}
    </S.CourseList>
  );
};
