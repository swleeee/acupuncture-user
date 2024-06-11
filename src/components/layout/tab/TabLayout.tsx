import React from "react";

import { Tab } from "@/components";
import type { SelectOptionType } from "@/types";
import * as S from "./TabLayout.styled";

interface TabLayoutProps {
  children: React.ReactNode;
  tabs: SelectOptionType[];
}

const TabLayout = ({ children, tabs }: TabLayoutProps) => {
  return <Tab tabs={tabs}>{children}</Tab>;
};

export default TabLayout;
