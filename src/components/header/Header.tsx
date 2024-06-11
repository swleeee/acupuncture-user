import { useDevice } from "@/hooks";
import HeaderDesktop from "./desktop/HeaderDesktop";
import HeaderMobile from "./mobile/HeaderMobile";
import * as S from "./Header.styled";

const Header = () => {
  const { isMobile } = useDevice();

  return <S.Header>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</S.Header>;
};

export default Header;
