import { useRouter } from "next/router";

import type { SelectOptionType } from "@/types";
import * as S from "./Tab.styled";

interface TabProps {
  children: React.ReactNode;
  tabs: SelectOptionType[];
}

const Tab = ({ children, tabs }: TabProps) => {
  const router = useRouter();

  return (
    <>
      <S.TabList role="tablist">
        {tabs.map((tab) => {
          const isSelected = router.pathname.split("/").at(-1) === tab.key;

          return (
            <S.TabItem key={tab.key} role="presentation">
              <S.TabLink
                id={`tab-${tab.key}`}
                role="tab"
                aria-controls={`panel-${tab.key}`}
                aria-selected={isSelected}
                selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                href={tab.key}
              >
                {tab.label}
              </S.TabLink>
            </S.TabItem>
          );
        })}
      </S.TabList>
      {tabs.map((tab) => (
        <section
          key={tab.key}
          id={`panel-${tab.key}`}
          tabIndex={0}
          role="tabpanel"
          aria-labelledby={`tab-${tab.key}`}
          hidden={router.pathname.split("/").at(-1) !== tab.key}
        >
          {router.pathname.split("/").at(-1) === tab.key ? children : null}
        </section>
      ))}
    </>
  );
};

export default Tab;
