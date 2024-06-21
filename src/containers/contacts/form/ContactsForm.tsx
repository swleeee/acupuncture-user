import React from "react";

import * as S from "./ContactsForm.styled";
import useContactsForm from "./hooks/useContactsForm";

const REQUIRED_MESSAGE = "필수 값입니다.";

const ContactsForm = () => {
  const { errors, register, handleInquire } = useContactsForm();

  return (
    <S.Container>
      <S.Title>문의하기</S.Title>
      <S.Description>
        이침 교육에 대한 수강, 세미나 특강 의뢰 등 국제이침협회에 궁금한 점을
        남겨주세요.
      </S.Description>
      <form onSubmit={handleInquire}>
        <S.ElementWrapper mb={32}>
          <S.Label htmlFor="name">성함</S.Label>
          <S.Input
            id="name"
            hasError={!!errors.name?.message}
            placeholder="성함을 입력해주세요."
            {...register("name", { required: REQUIRED_MESSAGE })}
          />
          {errors.name?.message && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.ElementWrapper>
        <S.ElementWrapper mb={32}>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            id="email"
            hasError={!!errors.email?.message}
            placeholder="이메일을 입력해주세요."
            {...register("email", { required: REQUIRED_MESSAGE })}
          />
          {errors.email?.message && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.ElementWrapper>
        <S.ElementWrapper mb={32}>
          <S.Label htmlFor="phone">연락처</S.Label>
          <S.Input
            id="phone"
            hasError={!!errors.phone?.message}
            placeholder="010-1234-5678"
            {...register("phone", { required: REQUIRED_MESSAGE })}
          />
          {errors.phone?.message && (
            <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>
          )}
        </S.ElementWrapper>
        <S.ElementWrapper mb={48}>
          <S.Label htmlFor="content">내용</S.Label>
          <S.Textarea
            id="content"
            hasError={!!errors.content?.message}
            placeholder="메시지를 입력해주세요."
            {...register("content", { required: REQUIRED_MESSAGE })}
          />
          {errors.content?.message && (
            <S.ErrorMessage>{errors.content.message}</S.ErrorMessage>
          )}
        </S.ElementWrapper>
        <S.Button>메시지 보내기</S.Button>
      </form>
    </S.Container>
  );
};

export default ContactsForm;
