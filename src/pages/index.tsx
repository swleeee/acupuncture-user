import React from "react";

import {
  ContactForm,
  Contacts,
  MainContentsIntroduction,
  ServiceInfo,
  YoutubeVideoList,
} from "@/containers";
import { Layout } from "@/components";

const Page = () => {
  return (
    <>
      <MainContentsIntroduction />
      <Contacts />
      <ServiceInfo />
      <YoutubeVideoList />
      <ContactForm />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
