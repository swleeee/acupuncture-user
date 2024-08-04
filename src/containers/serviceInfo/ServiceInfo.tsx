import React from "react";

import infoImg1 from "@/assets/image/animated-info1.gif";
import infoImg2 from "@/assets/image/animated-info2.gif";
import * as S from "./ServiceInfo.styled";

/*
  NOTE: 하기 사항 참고
    b2b -> pdf
    b2c -> 다른 URl 이미지
*/
export const ServiceInfo = () => {
  return (
    <S.Section>
      <S.Title>
        서비스 소개글 서비스 소개글 서비스 소개글 서비스 소개글 서비스 소개글
      </S.Title>
      <S.ServiceList>
        <S.ServiceItem>
          <S.Button>
            <S.ServiceTitle>Quality Assurance Service</S.ServiceTitle>
            <img src={infoImg1.src} alt="assurance service" />
            <S.ServiceDescription>
              멀티스페셜리스트 엔지니어가 프로젝트 완성도를 한층 높여드립니다.
            </S.ServiceDescription>
          </S.Button>
        </S.ServiceItem>
        <S.ServiceItem>
          <S.Button>
            <S.ServiceTitle>IT Engineering Service</S.ServiceTitle>
            <img src={infoImg2.src} alt="engineering service" />
            <S.ServiceDescription>
              다년간 다양한 분야의 개발/운영 경험으로 고객의 요구사항을 완벽히
              충족시켜드립니다.
            </S.ServiceDescription>
          </S.Button>
        </S.ServiceItem>
      </S.ServiceList>
    </S.Section>
  );
};
