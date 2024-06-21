import React from "react";

import { Contacts, MainContentsIntroduction } from "@/containers";
import { Layout } from "@/components";

const Page = () => {
  return (
    <>
      <MainContentsIntroduction />
      <Contacts />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
