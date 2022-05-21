/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { useContext, createContext, useState, cloneElement } from "react";

const initialContext = {
  activeTab: 0,
  setActiveTab: () => {},
};

const TabsContext = createContext(initialContext);
const useTab = () => useContext(TabsContext);

const TabGroup = styled.div`
  width: 100%;
  height: auto;
`;

const TabList = styled.ul`
  display: flex;
  background: ${(props) => props.theme.colors["p4"]};
  padding: 5px;
  border-radius: 35px;
`;

const TabButton = styled.li`
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  padding: 8px 0;
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 18px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors["p3"]};

  :not(:last-child) {
    margin-right: 12px;
  }

  &.active-tab {
    background: white;
    box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.07);
    border-radius: 35px;
    color: #1977f3;
    transition: 0.3s;
  }
`;

const TabPanels = styled.div`
  margin-top: 16px;
`;

const TabPanel = styled.div``;

export function Tab({ children, currentTab }) {
  const { setActiveTab, activeTab } = useTab();

  return (
    <TabButton
      className={`${activeTab === currentTab && "active-tab"} tab-button`}
      onClick={() =>
        setActiveTab((prev) => {
          return { ...prev, activeTab: currentTab };
        })
      }
    >
      {children}
    </TabButton>
  );
}

Tab.Group = ({ children }) => {
  const [activeTab, setActiveTab] = useState(initialContext);

  return (
    <TabsContext.Provider
      value={{
        activeTab: activeTab.activeTab,
        setActiveTab,
      }}
    >
      <TabGroup className="tab-group">{children}</TabGroup>
    </TabsContext.Provider>
  );
};

Tab.Lists = ({ children }) => {
  return (
    <TabList className="tab-lists">
      {children.map((child, idx) => {
        const ClonedTabElement = cloneElement(child, {
          currentTab: idx,
          key: `Tab-${idx}`,
        });
        return ClonedTabElement;
      })}
    </TabList>
  );
};

Tab.Panels = ({ children }) => {
  const { activeTab } = useTab();

  return (
    <TabPanels className="tab-panels">
      {children.map((child, idx) => {
        return idx === activeTab && child;
      })}
    </TabPanels>
  );
};

Tab.Panel = ({ children }) => {
  return <TabPanel className="tab-panel">{children}</TabPanel>;
};
