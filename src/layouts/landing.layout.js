import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { FullNavbar } from "components/Navbar/Navbar-Landing";
import { DashboardSidebar } from "./dashboard.layout";
const ThemeContainer = styled.div`
  padding: 0px 0px 0px 0px;
  // height: 100vh;

  @media screen and (max-width: 996px) {
    padding: 0 0px 0px 0px;

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

  @media screen and (max-width: 996px) {
    height: auto;
  }
`;

const landingLayout = ({ navbarScrolled }) => {
  return (
    <>
      <FullNavbar />
      <ThemeContainer>
        <DashboardSidebar />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </ThemeContainer>
    </>
  );
};

export default landingLayout;
