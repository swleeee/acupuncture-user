import React from "react";

import { Footer, Header } from "@/components";
import * as S from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default Layout;
