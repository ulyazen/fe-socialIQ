import { Outlet } from "react-router";
import styled from "styled-components";
import { DashboardSidebar } from "./dashboard.layout";

const ThemeContainer = styled.div`
  padding: 0 35px 25px 35px;
  // height: 100vh;

  @media screen and (max-width: 996px) {
    padding: 0 20px 20px 20px;

    #sidebar {
      display: block !important;
    }
  }

  #sidebar {
    display: none;
  }
`;

const OutletWrapper = styled.div`
  width: 100%;
  height: calc(100% - 132px);

  @media screen and (max-width: 996px) {
    height: auto;
  }
`;

const DashboardLayoutFull = () => {
  return (
    <ThemeContainer>
      <DashboardSidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </ThemeContainer>
  );
};

export default DashboardLayoutFull;
