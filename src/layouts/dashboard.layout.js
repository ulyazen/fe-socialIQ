import styled from "styled-components";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { DashboardProvider, useDashboard } from "hooks/useDashboard";

import {
  IProfileTwoUser,
  INote2,
  IPeople,
  IClipBoard,
  ICalendar,
  IUserSquare,
  IWalletCheck,
  IBag,
  ICandle,
  IHome,
  IFolderOpen,
} from "components/Icons";
import { DefaultNavbar } from "components/Navbar/Navbar-Dashboard";
import { withInteractiveDashboard } from "hoc/withInteractiveDashboard";
import Text from "components/Typhography/Text";
import { useRef } from "react";

const OutletWrapper = styled.div`
  width: 100%;
  height: calc(100% - 102px);

  @media screen and (max-width: 1336px) {
    height: auto;
  }
`;

const MobileNav = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 996px) {
    display: flex;
  }
`;

const MobileNavTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  color: ${(props) => props.theme.colors["p6"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  line-height: 36px;
  letter-spacing: -0.03em;
`;

const SearchIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  background: white;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);

  ::after {
    content: "";
    display: block;
    background: url("/images/icons/search-normal.svg") no-repeat;
    background-position: center;
    background-size: 24px;
    width: 100%;
    height: 100%;
  }
`;

const Dashboard = ({ dashboardRef: { navbarRef }, navbarScrolled }) => {
  const { title } = useDashboard();

  const sidebarRef = useRef();

  return (
    <Container>
      <DashboardSidebar sidebarRef={sidebarRef} />
      <Content>
        <DefaultNavbar
          navbarScrolled={navbarScrolled && "true"}
          title={title}
          navbarRef={navbarRef}
          sidebarRef={sidebarRef}
        />
        <MobileNav>
          <MobileNavTitle>{title}</MobileNavTitle>
          <SearchIcon />
        </MobileNav>

        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Content>
    </Container>
  );
};

export const DashboardSidebar = ({ sidebarRef }) => {
  const { pathname } = useLocation();
  const handleClickMenu = () => {
    sidebarRef.current.classList.remove("show");
  };
  const navigate = useNavigate();

  return (
    <Sidebar ref={sidebarRef} id="sidebar">
      <SidebarHeader>
        <SidebarLogo />
        <CreatePostButton onClick={() => navigate("posts/create-post")}>
          <PlusIconWrapper>
            <FaPlus />
          </PlusIconWrapper>{" "}
          Create Post
        </CreatePostButton>
      </SidebarHeader>
      <SidebarMenuLists>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard"
          active={`${pathname === "/dashboard"}`}
        >
          <IHome className="i-home" />
          Dashboard
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/account-manager"
          active={`${pathname === "/dashboard/account-manager"}`}
        >
          <IProfileTwoUser />
          Account Manager
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/my-content"
          active={`${pathname === "/dashboard/my-content"}`}
        >
          <INote2 />
          My Content
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/file-manager"
          active={`${pathname === "/dashboard/file-manager"}`}
        >
          <IFolderOpen />
          File Manager
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/team-member"
          active={`${pathname === "/dashboard/team-member"}`}
        >
          <IPeople />
          Team Member
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/package-manager"
          active={`${pathname === "/dashboard/package-manager"}`}
        >
          <IClipBoard />
          Package Manager
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/calendar"
          active={`${pathname === "/dashboard/calendar"}`}
        >
          <ICalendar />
          Calendar
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/user-manager"
          active={`${pathname.startsWith("/dashboard/user-manager")}`}
        >
          <IUserSquare />
          User Manager
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/payment-manager"
          active={`${pathname === "/dashboard/payment-manager"}`}
        >
          <IWalletCheck />
          Payment Manager
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/marketplace"
          active={`${pathname === "/dashboard/marketplace"}`}
        >
          <IBag />
          Marketplace
        </Menu>
        <Menu
          onClick={handleClickMenu}
          to="/dashboard/settings"
          active={`${pathname === "/dashboard/settings"}`}
        >
          <ICandle />
          Settings
        </Menu>
      </SidebarMenuLists>
    </Sidebar>
  );
};

const DashboardLayout = (props) => {
  return (
    <DashboardProvider>
      <Dashboard {...props} />
    </DashboardProvider>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  @media screen and (max-width: 996px) {
    height: auto;
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 275px;
  height: 100%;
  position: sticky;
  top: 0;
  padding-top: 51px;
  padding-bottom: 50px;
  border-right: 1px solid #f2f3f8;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    width: 6px;
    border-radius: 6px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
  }

  @media screen and (max-width: 996px) {
    width: 0;
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: white;
    transition: width 0.5s;

    ::-webkit-scrollbar {
      width: 0;
    }

    &.show {
      width: calc(100vw - 52px);
      transition: width 0.5s;
    }
  }
`;

const SidebarHeader = styled.div`
  padding: 0 38px;
`;

const SidebarLogo = styled.div`
  width: 167px;
  height: 36.59px;
  background: url("/images/logo.svg");
  cursor: pointer;
`;

const CreatePostButton = styled.button`
  width: 197px;
  height: 59px;
  display: flex;
  margin-top: 35.41px;
  background: linear-gradient(94.01deg, #237cfb 4.61%, #4390ff 99.02%);
  box-shadow: 0px 18px 41px rgba(63, 140, 255, 0.24);
  border-radius: 69px;
  color: white;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize["base"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  padding: 11px 12px;
`;

const SidebarMenuLists = styled.ul`
  margin-top: 35px;
  width: auto;
  margin-right: 40px;
`;

const Menu = styled(NavLink)`
  width: 100%;
  height: 60px;
  padding: 18px 0 18px 38px;
  display: flex;
  align-items: center;
  border-radius: 0px 30px 30px 0px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  letter-spacing: -0.03em;
  text-decoration: none;
  line-height: 24px;
  color: ${(props) => props.theme.colors["p3"]};

  &:hover {
    color: ${(props) => props.theme.colors["p1"]};
    background: ${(props) => props.theme.colors["p4"]};
    transition: 0.5s;

    svg {
      path {
        stroke: currentColor;
      }

      &.i-home {
        path {
          fill: currentColor;
          stroke: #fff;
        }
      }
    }
  }

  ${(props) =>
    props.active === "true" &&
    `
    &.active {
      color: ${props.theme.colors["p1"]};
      background: ${props.theme.colors["p4"]};

      svg {
        path {
          stroke: currentColor;
        }

        &.i-home {
          path {
            fill: currentColor;
            stroke: #fff
          }
        }
      }
    }
  `}

  svg {
    margin-right: 12px;
  }

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const PlusIconWrapper = styled.div`
  width: 37px;
  height: 37px;
  color: ${(props) => props.theme.colors["p1"]};
  display: flex;
  border-radius: 50%;
  background: white;
  font-size: 8.06px;
  margin-right: 12px;

  svg {
    margin: auto;
  }
`;

const Content = styled.div`
  width: calc(100% - 275px);
  overflow-y: auto;
  padding: 25px 35px;

  @media screen and (max-width: 996px) {
    padding: 20px;
    width: 100%;
    overflow-y: initial;
  }
`;

export default withInteractiveDashboard(DashboardLayout);
