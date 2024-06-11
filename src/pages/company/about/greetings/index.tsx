import React from "react";

import { Layout, TabLayout } from "@/components";
import ProfileSrc from "@/assets/image/profile3.png";
import { COMPANY_ABOUT_TABS } from "@/constants";
import * as S from "./index.styled";

const Page = () => {
  return (
    <section>
      <S.PageTitle>인사말</S.PageTitle>
      <S.Container>
        <S.GreetingWrapper>
          <S.GreetingSummary>
            <strong>이침협회</strong>는 소외된 이웃들을 위해 배려와 나눔을
            실천합니다.
          </S.GreetingSummary>
          <S.GreetingText hasMarginBottom>
            이침협회는 친환경 나눔가게 운영인 ‘기빙플러스’를 통해 지역사회
            나눔문화를 활성화시키고 장애인을 비롯하여 고령자, 다문화, 실직자,
            희귀난치성질환자 등 활성화시키고 장애인을 비롯하여 고령자, 다문화,
            실직자, 희귀난치성질환자 등
          </S.GreetingText>
          <S.GreetingText hasMarginBottom>
            기빙플러스는 이침협회와 뿌리를 같이하고 있는 이침협회재단에서 2017년
            처음 시작하였습니다. 기업 재고상품을 기부 받아 판매하는 과정에서
            취업 취약 계층에게 일자리를 제공하고,소비자는 구매를 통해 나눔을
            실천하고, 기업은 사회공헌을 실천하고, 버려지고 태워질 수 있는 물품을
            판매함으로써 환경까지 보호하고 있습니다.
          </S.GreetingText>
          <S.GreetingText hasMarginBottom>
            이렇게 좋은 취지의 기빙플러스 사업이 확대되면서 사회복지법인이
            운영하기 어려운 단점을 보완하면서도 사회적경제사업의 전문성을
            강화하고자 2022년 이침협회를 설립하게 되었습니다.
          </S.GreetingText>
          <S.GreetingText hasMarginBottom>
            이침협회가 걸어온 길처럼 이침협회는 모든 사업을 투명하고 정직하게
            운영하고, 도움이 필요한 사회적 약자를 가장 최우선으로
            생각하겠습니다.
          </S.GreetingText>
          <S.GreetingText hasMarginBottom>
            이침협회를 지원해주시는 많은 기업과 봉사자, 후원자 여러분들의 마음을
            잊지 않고 한 알의 이침이 싹을 틔우고 많은 열매를 맺도록 한결같은
            마음으로 배려와 나눔을 실천하겠습니다.
          </S.GreetingText>
          <S.GreetingText>감사합니다.</S.GreetingText>
        </S.GreetingWrapper>
        <S.PersonInfoWrapper>
          <S.Image src={ProfileSrc.src} alt="representative image" />
          <S.WorkPosition>국제이침협회 대표</S.WorkPosition>
          <S.Signature>김영숙</S.Signature>
        </S.PersonInfoWrapper>
      </S.Container>
    </section>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      <TabLayout tabs={COMPANY_ABOUT_TABS}>{page}</TabLayout>
    </Layout>
  );
};

export default Page;
