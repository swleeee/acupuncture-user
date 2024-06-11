import { useEffect } from "react";

import { useDevice, useOnClickOutside, useSidebar } from "@/hooks";
import * as S from "./MobileHeaderSidebar.styled";

const MobileHeaderSidebar = () => {
  const { isMobile } = useDevice();
  const { sidebarRef, sidebar, closeSidebar } = useSidebar();
  useOnClickOutside(sidebarRef, closeSidebar);

  const isLogin = false;

  useEffect(() => {
    if (isMobile || !sidebar.isShow) return;

    closeSidebar();
  }, [isMobile, sidebar.isShow, closeSidebar]);

  return (
    // TODO: 추후 수정
    <S.Sidebar ref={sidebarRef} isShow={sidebar.isShow}>
      <div>
        <span>프로필</span>
        <button type="button" aria-label="Close sidebar" onClick={closeSidebar}>
          닫기
        </button>
      </div>
    </S.Sidebar>
  );
};

export default MobileHeaderSidebar;
