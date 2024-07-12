import React from "react";

import {
  Contacts,
  MainContentsIntroduction,
  YoutubeVideoList,
} from "@/containers";
import { Layout } from "@/components";

const Page = () => {
  return (
    <>
      <MainContentsIntroduction />
      <Contacts />
      <YoutubeVideoList />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
