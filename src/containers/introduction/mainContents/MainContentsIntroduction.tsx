import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useCountUp, useDevice, useInterval } from "@/hooks";
import ArrowLeftIcon from "@/assets/icon/ic_arrow_left.svg";
import ArrowRightIcon from "@/assets/icon/ic_arrow_right.svg";
import AutoPlayIcon from "@/assets/icon/ic_play_arrow.svg";
import AutoPauseIcon from "@/assets/icon/ic_pause.svg";
import AnimatedHeartImg from "@/assets/image/wired-outline-20-love-heart.gif";
import AnimatedTimeImg from "@/assets/image/wired-outline-45-clock-time.gif";
import AnimatedConsultationImg from "@/assets/image/wired-outline-981-consultation.gif";
import AnimatedLayerImg from "@/assets/image/wired-outline-12-layers.gif";
import * as S from "./MainContentsIntroduction.styled";

const INTRODUCTION_TEXTS = [
  `이침협회는 CAGR(복합 연간 성장률)이\n120%가 넘는 IT 서비스 기업으로\n시장을 선도하고 있습니다.`,
  "이침협회는 축적된 사업 수행 경험과\n역량을 기반으로 귀사의 성공적인\n비즈니스를 지원합니다.",
  "이침협회는 여러분들의 비즈니스에\n최적화된 품질보증(QA) 서비스와\n개발 서비스를 제공합니다.",
  "이침협회는 비즈니스 도메인과\n개발 단계에 맞는 테스트 방법을\n제시하고 실행하여 실질적이고 효과적으로\n목표를 달성할 수 있도록 지원합니다.",
];

const CARDS = [
  {
    title: "완료 프로젝트",
    icon: AnimatedLayerImg,
    maxCount: 1000,
    unit: "건",
  },
  {
    title: "전문 엔지니어",
    icon: AnimatedConsultationImg,
    maxCount: 250,
    unit: "명",
  },
  {
    title: "엔지니어 평균 경력",
    icon: AnimatedTimeImg,
    maxCount: 6.7,
    unit: "년",
  },
  {
    title: "고객사 재방문률",
    icon: AnimatedHeartImg,
    maxCount: 97,
    unit: "%",
  },
];

export const MainContentsIntroduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  const { isMobile, isTablet, isLaptop } = useDevice();

  const countProjectCompletion = useCountUp(CARDS[0].maxCount);
  const countEngineers = useCountUp(CARDS[1].maxCount);
  const countAvgExperience = useCountUp(CARDS[2].maxCount, 1);
  const countCustomerReturnRate = useCountUp(CARDS[3].maxCount);

  const counts = [
    countProjectCompletion,
    countEngineers,
    countAvgExperience,
    countCustomerReturnRate,
  ];

  const changeIndex = (offset: number) => () => {
    const newIndex =
      (currentIndex + offset + INTRODUCTION_TEXTS.length) %
      INTRODUCTION_TEXTS.length;
    setCurrentIndex(newIndex);
  };

  const toggleAutoPlayMode = (flag: boolean) => () => {
    setIsAutoPlayEnabled(flag);
  };

  useInterval(() => {
    if (!isAutoPlayEnabled) return;

    changeIndex(1)();
  }, 3000);

  useEffect(() => {
    if (isMobile || isTablet) {
      setIsAutoPlayEnabled(true);
    }
  }, [isMobile, isTablet]);

  return (
    <S.Section>
      <S.Introduction>{INTRODUCTION_TEXTS[currentIndex]}</S.Introduction>
      {isLaptop && (
        <S.SlickContainer>
          <S.SlickCounterWrapper>
            <S.SlickCounter isCurrentStep>0{currentIndex + 1}</S.SlickCounter>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <S.SlickCounter>0{INTRODUCTION_TEXTS.length}</S.SlickCounter>
          </S.SlickCounterWrapper>

          <S.SlickController>
            <button type="button" aria-label="next" onClick={changeIndex(-1)}>
              <ArrowLeftIcon css={S.iconStyle} />
            </button>
            {isAutoPlayEnabled ? (
              <button
                type="button"
                aria-label="manual-play"
                onClick={toggleAutoPlayMode(false)}
              >
                <AutoPauseIcon css={S.iconStyle} />
              </button>
            ) : (
              <button
                type="button"
                aria-label="auto-play"
                onClick={toggleAutoPlayMode(true)}
              >
                <AutoPlayIcon css={S.iconStyle} />
              </button>
            )}
            <button type="button" aria-label="next" onClick={changeIndex(1)}>
              <ArrowRightIcon css={S.iconStyle} />
            </button>
          </S.SlickController>
        </S.SlickContainer>
      )}
      <S.CardContainer>
        {CARDS.map((card, i) => (
          <S.Card key={card.title}>
            <S.CardTitle>{card.title}</S.CardTitle>
            <Image src={card.icon} alt="icon" width={64} height={64} />
            <S.CardCount>
              + {counts[i]} {card.unit}
            </S.CardCount>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Section>
  );
};
