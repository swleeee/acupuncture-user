import React from "react";

import ContactsInfo from "./info/ContactsInfo";
import * as S from "./Contacts.styled";

export const Contacts = () => {
  return (
    <S.Section>
      <S.SectionTitle>
        편하게 문의 주세요.
        <br />
        24시간 이내 답변드리겠습니다.
      </S.SectionTitle>
      <S.ContentWrapper>
        <ContactsInfo />
      </S.ContentWrapper>
    </S.Section>
  );
};
