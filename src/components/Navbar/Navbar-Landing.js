import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = styled.nav`
  position: sticky;
  top: -25px;
  width: 100%;
  height: 102px;
  margin-top: -25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  backdrop-filter: blur(3px);
  z-index: 100;
  padding: 0 105px 0 105px;
  // @media screen and (max-width: 1336px) {
  // }

  @media screen and (max-width: 996px) {
    top: 0;
    height: 72px;
    background: #237cfb;

    padding: 0 40px 0 20px;
    width: auto;
    border-bottom: unset;
    z-index: 999;

    ::before {
      content: "";
      width: 120px;
      height: 26px;
      background: url("/images/logo3.svg") no-repeat;
      background-size: cover;
      margin-left: 15px;
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
  }
`;

const StyledFullNavbar = styled(Navbar)`
  top: 0;

  height: 107px;
  backdrop-filter: unset;
  background: #237cfb;
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
  background: white;
`;

const Button = styled.button`
  padding: 8px;
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.07);
  border-radius: 35px;
  border: 0.75px solid #4f97ff;
  color: white;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 12px;
  }

  :first-child:nth-last-child(1) {
    width: 146px;
    height: 55px;
    margin: auto;
  }

  :first-child:nth-last-child(2),
  :first-child:nth-last-child(2) ~ button {
    flex-grow: 1;
  }
  transition: all 0.2s ease;
  &:hover {
    color: white;
    background-color: #173b67;
  }
`;

const ButtonWhite = styled.button`
  padding: 8px;
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.07);
  border-radius: 35px;
  border: 0.75px solid #white;
  color: #4f97ff;
  cursor: pointer;
  background-color: white;
  font-weight: 500;
  :not(:last-child) {
    margin-right: 12px;
  }

  :first-child:nth-last-child(1) {
    width: 146px;
    height: 55px;
    margin: auto;
  }

  :first-child:nth-last-child(2),
  :first-child:nth-last-child(2) ~ button {
    flex-grow: 1;
  }
  transition: all 0.2s ease;
  &:hover {
    color: white;
    background-color: #173b67;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  margin-right: auto;
`;
const MenuButton = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  margin-left: auto;
`;

const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;

  font-size: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: #173b67;
  }
  &:active {
    color: #173b67;
  }
`;

const MenuItemButton = styled.li`
  list-style: none;
`;

const MenuLinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const FullNavbar = ({ title }) => {
  const handleClickHamburger = () => {
    document.getElementById("sidebar").classList.toggle("show");
  };

  return (
    <StyledFullNavbar>
      <FullNavbarLogo>
        <img src="/images/logo3.svg" alt="logo" />
      </FullNavbarLogo>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Pricing</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/">About Us</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/">Why SocialIQ?</MenuLink>
        </MenuItem>
      </Menu>
      <MenuButton>
        <MenuItemButton>
          <MenuLinkButton to="/">
            <Button>Sign In</Button>
          </MenuLinkButton>
        </MenuItemButton>
        <MenuItemButton>
          <MenuLinkButton to="/">
            <ButtonWhite>Create Account</ButtonWhite>
          </MenuLinkButton>
        </MenuItemButton>
      </MenuButton>
      <Hamburger className="hamburger" onClick={handleClickHamburger}>
        <HambugerLine />
        <HambugerLine />
        <HambugerLine />
      </Hamburger>
    </StyledFullNavbar>
  );
};
