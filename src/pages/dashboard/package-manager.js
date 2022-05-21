import styled from "styled-components";
import { FullNavbar } from "components/Navbar/Navbar-Dashboard";
import { Menu } from "components/Dropdown/Dropdown";
import Text from "components/Typhography/Text";
import { InputWrapper, Input } from "components/Form/Input";
import Label from "components/Form/Label";
import RadioText from "components/Form/RadioText";
import { RadioTextWrapper } from "components/Form/RadioText";
import Divider from "components/Divider";
import Checkbox from "components/Form/Checkbox";
import Button from "components/Button/Button";
import { useState } from "react";

function PackageManager() {
  const [allowedPermission, setAllowedPermission] = useState([]);

  const handleClickPermission = (e, permissionName) => {
    e.target.classList.toggle("active");
    const isActive = e.target.classList.contains("active");

    if (isActive) {
      setAllowedPermission((prev) => [...prev, permissionName]);
    } else {
      const filtered = allowedPermission.filter(
        (permission) => permission !== permissionName
      );

      setAllowedPermission(filtered);
    }
  };

  return (
    <>
      <FullNavbar title="Package Manager" />
      <Container>
        <PackageBox>
          <PackageHeader>
            <Text className="package__title">List Package</Text>
          </PackageHeader>
          <PackageList>
            <Package name="Free" />
            <Package name="Basic" />
            <Package name="Standard" />
            <Package name="Premium" />
            <Package name="Lifetime Basic" />
            <Package name="Lifetime Standard" />
            <Package name="Lifetime Premium" />
          </PackageList>
        </PackageBox>

        <OptionsForm>
          <PackageInfo>
            <Text className="title title-package-form">Update</Text>
            <EditPackage>
              <InputWrapper>
                <Label>Status</Label>
                <RadioTextWrapper>
                  <RadioText name="status">Enable</RadioText>
                  <RadioText name="status">Disable</RadioText>
                </RadioTextWrapper>
              </InputWrapper>

              <InputWrapper>
                <Label>Name</Label>
                <Input variant="solid" type="text" placeholder="Name" />
              </InputWrapper>

              <InputWrapper>
                <Label>Description</Label>
                <Input variant="solid" type="text" placeholder="Description" />
              </InputWrapper>

              <PriceInputWrapper>
                <InputWrapper>
                  <Label>Price Monthly</Label>
                  <Input
                    variant="solid"
                    type="text"
                    placeholder="Price Monthly"
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Price Annualy</Label>
                  <Input
                    variant="solid"
                    type="text"
                    placeholder="Price Annualy"
                  />
                </InputWrapper>
              </PriceInputWrapper>

              <InputWrapper>
                <Label>Number Account</Label>
                <Input
                  variant="solid"
                  type="text"
                  placeholder="Number Account"
                />
              </InputWrapper>

              <InputWrapper>
                <Label>Position</Label>
                <Input variant="solid" type="text" placeholder="Position" />
              </InputWrapper>
            </EditPackage>
          </PackageInfo>
          <Permission>
            <Text className="title">Permission</Text>
            <PermissionBox>
              <PermissionList>
                {[
                  {
                    name: "Publish All",
                    value: "publish-all",
                    imageSource: "",
                  },
                  {
                    name: "RS5 Feed",
                    value: "rs5-feed",
                    imageSource: "",
                  },
                  {
                    name: "Facebook Post",
                    value: "facebook-post",
                    imageSource: "",
                  },
                  {
                    name: "Instagram Activity",
                    value: "instagram_activity",
                    imageSource: "",
                  },
                  {
                    name: "Twitter Post",
                    value: "twitter-post",
                    imageSource: "",
                  },
                  {
                    name: "LinkedIn Post",
                    value: "linkedin-post",
                    imageSource: "",
                  },
                  {
                    name: "LinkedIn Post",
                    value: "linkedin-post",
                    imageSource: "",
                  },
                  {
                    name: "Telegram Post",
                    value: "telegram-post",
                    imageSource: "",
                  },
                  {
                    name: "Tumblr Post",
                    value: "tumblr-post",
                    imageSource: "",
                  },
                  {
                    name: "Reddit Post",
                    value: "reddit-post",
                    imageSource: "",
                  },
                  {
                    name: "Google my business Post",
                    value: "google-business-post",
                    imageSource: "",
                  },
                  {
                    name: "Youtube Post",
                    value: "youtube-post",
                    imageSource: "",
                  },
                  {
                    name: "Cronjobs",
                    value: "cronjobs",
                    imageSource: "",
                  },
                  {
                    name: "Faqs manager",
                    value: "faqs-manager",
                    imageSource: "",
                  },
                  {
                    name: "File manager",
                    value: "file-manager",
                    imageSource: "",
                  },
                  {
                    name: "Group manager",
                    value: "group-manager",
                    imageSource: "",
                  },
                  {
                    name: "Package manager",
                    value: "package-manager",
                    imageSource: "",
                  },
                  {
                    name: "Language",
                    value: "language",
                    imageSource: "",
                  },
                  {
                    name: "Twitter analytics",
                    value: "twitter-analytics",
                    imageSource: "",
                  },
                  {
                    name: "General settings",
                    value: "general-settings",
                    imageSource: "",
                  },
                  {
                    name: "Schedules",
                    value: "schedules",
                    imageSource: "",
                  },
                  {
                    name: "Proxy manager",
                    value: "proxy-manager",
                    imageSource: "",
                  },
                  {
                    name: "Caption",
                    value: "caption",
                    imageSource: "",
                  },
                  {
                    name: "Blog manager",
                    value: "blog-manager",
                    imageSource: "",
                  },
                  {
                    name: "Social network settings",
                    value: "social-network-settings",
                    imageSource: "",
                  },
                  {
                    name: "Module & Themes",
                    value: "module-and-themes",
                    imageSource: "",
                  },
                  {
                    name: "Twitter activity",
                    value: "twitter-activity",
                    imageSource: "",
                  },
                  {
                    name: "Team manager",
                    value: "team-manager",
                    imageSource: "",
                  },
                  {
                    name: "Twitter Inbox",
                    value: "twitter-inbox",
                    imageSource: "",
                  },
                  {
                    name: "User manager",
                    value: "user-manager",
                    imageSource: "",
                  },
                  {
                    name: "Twitter trend",
                    value: "twitter-trend",
                    imageSource: "",
                  },
                  {
                    name: "Watermark",
                    value: "watermark",
                    imageSource: "",
                  },
                  {
                    name: "Payment manager",
                    value: "payment-manager",
                    imageSource: "",
                  },
                  {
                    name: "Account manager",
                    value: "account-manager",
                    imageSource: "",
                  },
                ].map((permission) => (
                  <PermissionCard
                    onClick={(e) => handleClickPermission(e, permission.value)}
                  >
                    {permission.name}
                  </PermissionCard>
                ))}
              </PermissionList>

              <Divider />

              <InputWrapper>
                <Label>Active</Label>
                <Checkbox className="active-package">Enable/Disable</Checkbox>
              </InputWrapper>

              {allowedPermission.length >= 1 && (
                <AllowedPermissionWrapper>
                  {allowedPermission.map((permission) => {
                    if (permission === "account-manager") {
                      return <AccountManagerPermission />;
                    }

                    return null;
                  })}
                </AllowedPermissionWrapper>
              )}

              <SaveButton type="submit">Save</SaveButton>
            </PermissionBox>
          </Permission>
        </OptionsForm>
      </Container>
    </>
  );
}

const Package = ({ name }) => {
  const handleClickMenuActions = (e) => {};

  return (
    <PackageCard>
      <PackageProfile>
        <PackageProfilePicture>
          <img src="/images/icons/box.svg" alt="" />
        </PackageProfilePicture>
        <PackageDetail>
          <PackageName>{name}</PackageName>
        </PackageDetail>
      </PackageProfile>
      <Menu className="package-menu">
        <Menu.Button prevent onClick={handleClickMenuActions}>
          <HamburgerDots className="package-menu__hamburger">
            <HamburgerDot />
            <HamburgerDot />
            <HamburgerDot />
          </HamburgerDots>
        </Menu.Button>

        <Menu.Items>
          <Menu.Item prevent>Edit</Menu.Item>
          <Menu.Item prevent>Delete</Menu.Item>
        </Menu.Items>
      </Menu>
    </PackageCard>
  );
};

const AccountManagerPermission = () => {
  return (
    <AccountManagerBox>
      <ToggleWrapper onClick={(e) => e.target.classList.toggle("active")}>
        <ToggleButton />
      </ToggleWrapper>
      <AccountManagerCheckboxWrapper>
        <Checkbox>Facebook profile</Checkbox>
        <Checkbox>Facebook pages</Checkbox>
        <Checkbox>Facebook groups</Checkbox>
        <Checkbox>Instagram profiles</Checkbox>
        <Checkbox>Twitter profiles</Checkbox>
        <Checkbox>LinkedIn profiles</Checkbox>
        <Checkbox>Youtube profiles</Checkbox>
        <Checkbox>Google my business profiles</Checkbox>
        <Checkbox>Reddit profiles</Checkbox>
        <Checkbox>Tumblr profiles</Checkbox>
        <Checkbox>Telegram Channel</Checkbox>
        <Checkbox>Telegram Groups</Checkbox>
      </AccountManagerCheckboxWrapper>
    </AccountManagerBox>
  );
};

const ToggleWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: #f7faff;
  border-radius: 10px;
  padding: 8px;
  display: flex;
`;

const ToggleButton = styled.div`
  width: 20px;
  height: 16.28px;
  margin: auto;
  border-radius: 20px;
  background: #237cfb;
  position: relative;
  cursor: pointer;

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    top: 4px;
    left: 3px;
  }

  &.active {
    ::before {
      right: 4px;
      left: unset;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const PackageBox = styled.div`
  width: 379px;
  height: 601px;
  padding: 0 15px 65px 15px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  background: #ffffff;
  position: sticky;
  // overflow: hidden;
  top: 135px;

  @media screen and (max-width: 996px) {
    width: 100%;
    position: static;
  }
`;

const PackageHeader = styled.div`
  height: 82px;
  border-bottom: 1px solid #f2f3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;

  .package__title {
    font-size: ${(props) => props.theme.fontSize["lg"]};
    color: ${(props) => props.theme.colors["p6"]};
    letter-spacing: -0.03em;
    line-height: 27px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }
`;

const PackageList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  overflow-y: auto;
  height: calc(100% - 82px);

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const PackageCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 15px;
  border-radius: 15px;
  position: relative;

  .package-menu {
    position: absolute;
    right: 19px;
    top: 15px;
    z-index: unset;

    .menu-button {
      display: flex;
      justify-content: flex-end;
      cursor: default;
    }

    .menu-items {
      width: 138px;
    }
  }
`;

const PackageProfile = styled.div`
  display: flex;
  align-items: center;
`;

const PackageProfilePicture = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background: #f7faff;
  padding: 5px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
`;

const PackageDetail = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const PackageName = styled(Text)`
  color: ${(props) => props.theme.colors["p2"]};
  letter-spacing: -0.03em;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  cursor: pointer;
`;

const HamburgerDots = styled.div`
  display: flex;
  width: 5px;
  height: 21px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const HamburgerDot = styled.div`
  width: 5px;
  height: 5px;
  background: #237cfb;
  border-radius: 50%;
`;

const OptionsForm = styled.form`
  width: calc(100% - 379px);
  margin-left: 30px;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
    margin-top: 20px;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #101010;

    &.title-package-form {
      font-size: 26px;
    }
  }
`;

const EditPackage = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  margin-top: 25px;
  padding: 40px;
`;

const PackageInfo = styled.div``;

const PriceInputWrapper = styled.div`
  display: flex;
  gap: 31px;

  > div {
    flex: 1;
  }
`;

const Permission = styled.div`
  margin-top: 40px;
`;

const PermissionBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  padding: 38px;
  margin-top: 28px;
`;

const PermissionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;

const PermissionCard = styled.div`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 56px;
  background: #ffffff;
  padding: 8px 20px 8px 8px;
  letter-spacing: -0.03em;
  font-size: 16px;
  line-height: 24px;
  color: #d8dce9;
  cursor: pointer;
  margin: 8px;
  text-align: center;

  &.active {
    background: linear-gradient(278.72deg, #237cfb 2.67%, #4994ff 109.98%);
    box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
    border-radius: 56px;
    color: white;
  }
`;

const SaveButton = styled(Button)`
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 14px;
  background: #237cfb;
  width: 244px;
  margin-top: 40px;
  color: white;

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const AllowedPermissionWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  & > div {
    :not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

const AccountManagerBox = styled.div`
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 16px 173px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const AccountManagerCheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 15px;
`;

export default PackageManager;
