import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useProvideDashboard = () => {
  const [currentTitle, setCurrentTitle] = useState("");

  const changeTitle = (newTitle) => {
    setCurrentTitle(newTitle);
  };

  return {
    title: currentTitle,
    events: {
      changeTitle,
    },
  };
};

export const DashboardProvider = ({ children }) => {
  const dashboard = useProvideDashboard();

  return (
    <DashboardContext.Provider value={dashboard}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const value = useContext(DashboardContext);

  if (value === undefined) {
    throw new Error(
      "Out of Context! useDashboard context is only for dashboard page"
    );
  }

  return value;
};
