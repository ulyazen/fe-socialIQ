import { Input } from "components/Form/Input";
import { InputGroup } from "components/Form/Input";
import { INotificationBing } from "components/Icons";
import { IGift } from "components/Icons";
import { ISearchNormal } from "components/Icons";
import { FaChevronLeft, FaLock, FaStar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Text from "components/Typhography/Text";
import { useState } from "react";

const Navbar = styled.nav`
  position: sticky;
  top: -25px;
  width: 100%;
  height: 102px;
  margin-top: -25px;
  border-bottom: 1px solid #f2f3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  backdrop-filter: blur(3px);
  z-index: 100;

  // @media screen and (max-width: 1336px) {
  // }

  @media screen and (max-width: 996px) {
    top: 0;
    height: 72px;
    background: white;
    margin: -20px -20px 25px -20px;
    padding: 0 20px;
    width: auto;
    border-bottom: unset;
    z-index: 999;

    ::before {
      content: "";
      width: 132px;
      height: 26px;
      background: url("/images/logo.svg") no-repeat;
      background-size: cover;
    }

    ${(props) =>
      props.navbarScrolled === "true" &&
      `
      & {

        justify-content: flex-end;

        .navbar-title {
          opacity: 1;
          transform: translateX(0);
          transition: transform .5s;
          order: 1;
          flex: 1;
          justify-self: flex-start
        }

        ::before {
          display: none;
        }

        .search-icon {
          display: block;
          order: 2;
        }

        .hamburger {
          order: 3;
        }
      }

    `}

    ::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 1px;
      background: #f2f3f8;
    }
  }
`;

const NavbarTitle = styled.h1`
  color: ${(props) => props.theme.colors["p6"]};
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  line-height: 39px;
  letter-spacing: -0.03em;

  @media screen and (max-width: 996px) {
    opacity: 0;
    font-size: ${(props) => props.theme.fontSize["3xl"]};
    transform: translateX(-50px);
    line-height: 36px;
  }
`;

const NavbarBoxed = styled.div`
  width: 506px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const NavbarInputGroup = styled(InputGroup)`
  height: 100%;
  width: 300px;
  box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.04);

  border-radius: 14px;

  svg {
    color: ${(props) => props.theme.colors["p1"]};
    font-size: 24px;
  }

  input {
    ::placeholder {
      color: ${(props) => props.theme.colors["p3"]};
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

const GiftBox = styled.div`
  width: 52px;
  height: 52px;
  box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  color: ${(props) => props.theme.colors["p3"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  background: white;
`;

const Notification = styled(GiftBox)``;

const ProfileBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hamburger = styled.div`
  width: 36px;
  height: 36px;
  padding: 10px 8px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 996px) {
    display: flex;
  }
`;

const HambugerLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors["p1"]};
`;

const SearchIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  display: none;
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

const ProfilePopupDropdown = styled.div`
  position: absolute;
  top: 68px;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 23px 88px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  width: 269px;
  padding: 20px;
`;

const ProfilePopupDropdownHeader = styled.div`
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 90px;
  background: linear-gradient(278.72deg, #237cfb 2.67%, #4994ff 109.98%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

const ProfileImage = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  padding: 5px;
  background: rgba(255, 255, 255, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const ProfileDetail = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;

  p {
    color: white;
    line-height: 21px;

    :first-child {
      font-weight: 500;
      font-size: 14px;
    }

    :last-child {
      font-size: 11px;
      line-height: 16px;
      width: max-content;
      background: rgba(255, 255, 255, 0.16);
      border-radius: 42px;
      padding: 4px 8px;
      margin-top: 3px;
      cursor: pointer;
    }
  }
`;

const ProfilePopupDropdownMenu = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const ProfilePopupDropdownMenuList = styled.div`
  padding: 8px 10px;
  height: 40px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #3a4569;

  svg {
    margin-right: 12px;
  }

  :not(:last-child) {
    margin-bottom: 2px;
  }

  :last-child {
    color: #ff6270;
  }
`;

export const DefaultNavbar = ({
  title,
  navbarRef,
  sidebarRef,
  navbarScrolled,
  props,
}) => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleClickHamburger = () => {
    sidebarRef.current.classList.toggle("show");
    // document.getElementById("sidebar").style.borderRight = "1px solid #f2f3f8";
    // document.getElementById("root").style.overflow = "hidden";
  };

  const handleClickProfile = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <Navbar ref={navbarRef} {...props} navbarScrolled={navbarScrolled}>
      <NavbarTitle className="navbar-title">{title}</NavbarTitle>
      <NavbarBoxed>
        <NavbarInputGroup transparent>
          <ISearchNormal />
          <Input placeholder="Search" className="search-navbar" />
        </NavbarInputGroup>
        <GiftBox>
          <IGift />
        </GiftBox>
        <Notification>
          <INotificationBing />
        </Notification>
        <ProfileBox onClick={handleClickProfile}>
          <img src="/images/avatar/1.png" alt="avatar" />
          {showProfileDropdown && (
            <ProfilePopupDropdown>
              <ProfilePopupDropdownHeader>
                <ProfileImage>
                  <img src="/images/avatar/1.png" alt="" />
                </ProfileImage>
                <ProfileDetail>
                  <Text>Rizky Febryan</Text>
                  <Text onClick={() => navigate("/dashboard/profile")}>
                    View Profile
                  </Text>
                </ProfileDetail>
              </ProfilePopupDropdownHeader>

              <ProfilePopupDropdownMenu>
                <ProfilePopupDropdownMenuList>
                  <FaLock />
                  Change Password
                </ProfilePopupDropdownMenuList>
                <ProfilePopupDropdownMenuList>
                  <FaStar />
                  Rate Us
                </ProfilePopupDropdownMenuList>
                <ProfilePopupDropdownMenuList>
                  <FaSignOutAlt />
                  Log Out
                </ProfilePopupDropdownMenuList>
              </ProfilePopupDropdownMenu>
            </ProfilePopupDropdown>
          )}
        </ProfileBox>
      </NavbarBoxed>
      <Hamburger className="hamburger" onClick={handleClickHamburger}>
        <HambugerLine />
        <HambugerLine />
        <HambugerLine />
      </Hamburger>
      <SearchIcon className="search-icon" />
    </Navbar>
  );
};

const StyledFullNavbar = styled(Navbar)`
  top: 0;
  margin-top: unset;
  height: 107px;
  margin-bottom: 35px;
  backdrop-filter: unset;
  background: white;
  position: sticky;

  @media screen and (max-width: 996px) {
    height: 72px;
    margin-bottom: 25px;
  }
`;

const FullNavbarLogo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const BackButton = styled.div`
  width: 52px;
  height: 52px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  margin-right: 20px;
  color: ${(props) => props.theme.colors["p1"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FullNavbar = ({ title }) => {
  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleClickHamburger = () => {
    document.getElementById("sidebar").classList.toggle("show");
  };

  const handleClickProfile = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <StyledFullNavbar>
      <FullNavbarLogo>
        <BackButton onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </BackButton>
        {title ? (
          <NavbarTitle>{title}</NavbarTitle>
        ) : (
          <img src="/images/logo.svg" alt="logo" />
        )}
      </FullNavbarLogo>
      <NavbarBoxed>
        <NavbarInputGroup transparent>
          <ISearchNormal />
          <Input placeholder="Search" />
        </NavbarInputGroup>
        <GiftBox>
          <IGift />
        </GiftBox>
        <Notification>
          <INotificationBing />
        </Notification>
        <ProfileBox onClick={handleClickProfile}>
          <img src="/images/avatar/1.png" alt="avatar" />
          {showProfileDropdown && (
            <ProfilePopupDropdown>
              <ProfilePopupDropdownHeader>
                <ProfileImage>
                  <img src="/images/avatar/1.png" alt="" />
                </ProfileImage>
                <ProfileDetail>
                  <Text>Rizky Febryan</Text>
                  <Text onClick={() => navigate("/dashboard/profile")}>
                    View Profile
                  </Text>
                </ProfileDetail>
              </ProfilePopupDropdownHeader>

              <ProfilePopupDropdownMenu>
                <ProfilePopupDropdownMenuList>
                  <FaLock />
                  Change Password
                </ProfilePopupDropdownMenuList>
                <ProfilePopupDropdownMenuList>
                  <FaStar />
                  Rate Us
                </ProfilePopupDropdownMenuList>
                <ProfilePopupDropdownMenuList>
                  <FaSignOutAlt />
                  Log Out
                </ProfilePopupDropdownMenuList>
              </ProfilePopupDropdownMenu>
            </ProfilePopupDropdown>
          )}
        </ProfileBox>
      </NavbarBoxed>
      <Hamburger className="hamburger" onClick={handleClickHamburger}>
        <HambugerLine />
        <HambugerLine />
        <HambugerLine />
      </Hamburger>
      <SearchIcon className="search-icon" />
    </StyledFullNavbar>
  );
};
