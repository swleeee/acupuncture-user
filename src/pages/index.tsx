import React from "react";

import {
  ContactForm,
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
      <ContactForm />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
