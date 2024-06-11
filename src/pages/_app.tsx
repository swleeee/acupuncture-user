import { ReactElement, ReactNode } from "react";
import { NextComponentType, NextPage } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";

import { SidebarPortal } from "@/components";
import { queryClient } from "@/services";
import { globalStyles, theme } from "@/styles";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <SidebarPortal />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
