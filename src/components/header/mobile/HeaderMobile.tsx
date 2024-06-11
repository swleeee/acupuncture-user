import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useSidebar } from "@/hooks";
import logoSrc from "@/assets/image/logo.png";
import HamburgerIcon from "@/assets/icon/ic_hamburger.svg";
import MobileHeaderSidebar from "./sidebar/MobileHeaderSidebar";
import * as S from "./HeaderMobile.styled";

const HeaderMobile = () => {
  const { sidebar, openSidebar } = useSidebar();

  return (
    <S.InnerWrapper>
      <Link href="/">
        <Image src={logoSrc} alt="logo" width={147} height={37} />
      </Link>
      <S.SidebarButton
        type="button"
        aria-label="Open sidebar"
        isShow={sidebar.isShow}
        onClick={openSidebar(<MobileHeaderSidebar />)}
      >
        <HamburgerIcon />
      </S.SidebarButton>
    </S.InnerWrapper>
  );
};

export default HeaderMobile;
