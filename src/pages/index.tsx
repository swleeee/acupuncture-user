import React from "react";

import { Layout } from "@/components";

const Page = () => {
  return <div>Home</div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
