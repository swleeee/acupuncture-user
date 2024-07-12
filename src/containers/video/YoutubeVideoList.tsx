import React from "react";

import * as S from "./YoutubeVideoList.styled";

export const YoutubeVideoList = () => {
  const youtubeVideos = [
    {
      title:
        "[기초반 2주차 강의] 골격계 침점과 귀 모양 사례별 증상 [국제이침협회]",
      src: "https://www.youtube.com/embed/du1DmhdHaao?si=gmucOS7FbgyjZJGo",
    },
    {
      title: "열이 나는 것은 이상이 있다는 증거",
      src: "https://www.youtube.com/embed/7S9__DbhStY?si=XWLg29L6pSYexH8X",
    },
  ];

  return (
    <S.Section>
      {youtubeVideos.map(({ title, src }) => (
        <S.VideoWrapper key={src}>
          <S.VideoTitle>{title}</S.VideoTitle>
          <S.VideoFrame
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </S.VideoWrapper>
      ))}
    </S.Section>
  );
};
