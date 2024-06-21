import React from "react";

import * as S from "./ContactsInfo.styled";

const ContactsInfo = () => {
  return (
    <S.Container>
      <S.Map>MAP</S.Map>
      <S.DataWrapper>
        <S.Term>주소</S.Term>
        <S.Description>전라북도 군산시 은파순환길 174 2층</S.Description>
        <S.Term>전화번호</S.Term>
        <S.Description>(+82) 010-6531-5577</S.Description>
        <S.Term>이메일</S.Term>
        <S.Description>fca2008@naver.com</S.Description>
      </S.DataWrapper>
    </S.Container>
  );
};

export default ContactsInfo;
