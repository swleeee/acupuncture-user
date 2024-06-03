import Link from "next/link";
import Image from "next/image";

import logoSrc from "@/assets/image/logo.png";
import { useNavigationHover } from "./hooks/useNavigationHover";
import * as S from "./Header.styled";

const Header = () => {
  const { parentRef, states, setRef } = useNavigationHover();

  const isAllInactive = states.every((state) => !state);

  return (
    <S.Header>
      <S.InnerWrapper>
        <Link href="/">
          <Image src={logoSrc} alt="logo" width={243} height={54} />
        </Link>
        <S.Navbar>
          <ul ref={parentRef}>
            <S.MainNavItem
              ref={setRef(0)}
              isActive={states[0] || isAllInactive}
            >
              <S.NavLink href="/education">이침 교육</S.NavLink>
              <S.SubNavList isActive={states[0]}>
                <li>
                  <S.SubNavLink href="/">주요 강의</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">Q&A</S.SubNavLink>
                </li>
              </S.SubNavList>
            </S.MainNavItem>
            <S.MainNavItem
              ref={setRef(1)}
              isActive={states[1] || isAllInactive}
            >
              <S.NavLink href="/">이침 소개</S.NavLink>
              <S.SubNavList isActive={states[1]}>
                <li>
                  <S.SubNavLink href="/">이침소개</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">이침이란?</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">이침의 유래와 역사</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">이침 맛보기</S.SubNavLink>
                </li>
              </S.SubNavList>
            </S.MainNavItem>
            <S.MainNavItem
              ref={setRef(2)}
              isActive={states[2] || isAllInactive}
            >
              <S.NavLink href="/">협회 소개</S.NavLink>
              <S.SubNavList isActive={states[2]}>
                <li>
                  <S.SubNavLink href="/company/about/introduction">
                    협회 소개
                  </S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">공지사항</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">문의하기</S.SubNavLink>
                </li>
                <li>
                  <S.SubNavLink href="/">언론에서 본 협회</S.SubNavLink>
                </li>
              </S.SubNavList>
            </S.MainNavItem>
            <S.MainNavItem
              ref={setRef(3)}
              isActive={states[3] || isAllInactive}
            >
              <S.NavLink href="/">자료 판매</S.NavLink>
            </S.MainNavItem>
          </ul>
        </S.Navbar>
        {/* TODO: 추후 수정 예정 */}
        <Link href="/login">로그인</Link>
      </S.InnerWrapper>
    </S.Header>
  );
};

export default Header;
