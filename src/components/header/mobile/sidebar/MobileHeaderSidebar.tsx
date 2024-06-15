import { useEffect, useState } from "react";

import { useDevice, useOnClickOutside, useSidebar } from "@/hooks";
import PersonIcon from "@/assets/icon/ic_person.svg";
import CloseIcon from "@/assets/icon/ic_close.svg";
import * as S from "./MobileHeaderSidebar.styled";

const MobileHeaderSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { isMobile } = useDevice();
  const { sidebarRef, sidebar, closeSidebar } = useSidebar();
  useOnClickOutside(sidebarRef, closeSidebar);

  const isLogin = false;

  const handleParentMenuClick = (index: number) => () => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  useEffect(() => {
    if (isMobile || !sidebar.isShow) return;

    closeSidebar();
  }, [isMobile, sidebar.isShow, closeSidebar]);

  return (
    // TODO: 추후 수정
    <S.Sidebar ref={sidebarRef} isShow={sidebar.isShow}>
      <S.MenuWrapper>
        <S.ProfileLink aria-label="User profile" href="/user">
          <PersonIcon />
        </S.ProfileLink>
        <S.CloseButton
          type="button"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        >
          <CloseIcon />
        </S.CloseButton>
      </S.MenuWrapper>
      <nav>
        <ul>
          <S.MainNavItem>
            <S.Button type="button" onClick={handleParentMenuClick(0)}>
              이침 교육
            </S.Button>
            <S.SubNavList isActive={activeIndex === 0}>
              <li>
                <S.SubNavLink href="/">주요 강의</S.SubNavLink>
              </li>
              <li>
                <S.SubNavLink href="/">Q&A</S.SubNavLink>
              </li>
            </S.SubNavList>
          </S.MainNavItem>
          <S.MainNavItem>
            <S.Button onClick={handleParentMenuClick(1)}>이침 소개</S.Button>
            <S.SubNavList isActive={activeIndex === 1}>
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
          <S.MainNavItem>
            <S.Button type="button" onClick={handleParentMenuClick(2)}>
              협회 소개
            </S.Button>
            <S.SubNavList isActive={activeIndex === 2}>
              <li>
                <S.SubNavLink
                  href="/company/about/introduction"
                  onClick={closeSidebar}
                >
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
          <S.MainNavItem>
            <S.NavLink href="/login" onClick={closeSidebar}>
              자료 판매
            </S.NavLink>
          </S.MainNavItem>
        </ul>
      </nav>
    </S.Sidebar>
  );
};

export default MobileHeaderSidebar;
