import React from "react";

import { Layout } from "@/components";
import { CourseList } from "@/containers";

const Page = () => {
  return (
    <>
      <CourseList />
    </>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
