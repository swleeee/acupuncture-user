import React from "react";

import { MainContentsIntroduction } from "@/containers";
import { Layout } from "@/components";

const Page = () => {
  return (
    <>
      <MainContentsIntroduction />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
