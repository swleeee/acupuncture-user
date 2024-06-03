import React from "react";

import { Layout, Tab } from "@/components";
import { COMPANY_ABOUT_TABS } from "@/constants";

const Page = () => {
  return <div>협회 소개</div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      <Tab tabs={COMPANY_ABOUT_TABS}>{page}</Tab>
    </Layout>
  );
};

export default Page;
