import styled from "styled-components";
import { FullNavbar } from "components/Navbar/Navbar-Dashboard";
import { AddUserForm } from "pages/dashboard/user-manager/add";
import Text from "components/Typhography/Text";
import Checkbox from "components/Form/Checkbox";
import Button from "components/Button/Button";
import { Menu } from "components/Dropdown/Dropdown";
import { useMemo, useState } from "react";

function TeamMember() {
  const memoizedAccountsManagerList = useMemo(() => {
    return [
      {
        name: "Monthly Digital",
        accountType: "facebook",
      },
      {
        name: "Monthly Digital",
        accountType: "pinterest",
      },
      {
        name: "Monthly Digital",
        accountType: "google-business",
      },
      {
        name: "Monthly Digital",
        accountType: "reddit",
      },
      {
        name: "Monthly Digital",
        accountType: "twitter",
      },
      {
        name: "Monthly Digital",
        accountType: "tiktok",
      },
      {
        name: "Monthly Digital",
        accountType: "linkedin",
      },
      {
        name: "Monthly Digital",
        accountType: "tumblr",
      },
      {
        name: "Monthly Digital",
        accountType: "youtube",
      },
      {
        name: "Monthly Digital",
        accountType: "telegram",
      },
    ];
  }, []);

  const [accountManagerList, setAccountManagerLists] = useState(
    memoizedAccountsManagerList
  );

  const handleChangeMenuAccountDropdown = (event, value) => {
    if (!value) {
      return setAccountManagerLists(memoizedAccountsManagerList);
    } else {
      const filteredAccountByAccountType = memoizedAccountsManagerList.filter(
        (account) => account.accountType === value
      );

      setAccountManagerLists(filteredAccountByAccountType);
    }
  };

  return (
    <>
      <FullNavbar title="Team Member" />
      <Container>
        <TeamMemberBox>
          <TeamMemberHeader>
            <Text className="team-member__title">Team Member</Text>
          </TeamMemberHeader>
          <TeamMemberList>
            <Member />
            <Member />
          </TeamMemberList>
        </TeamMemberBox>
        <Options>
          <AddUserForm hideCancelButton />
          <PermissionWrapper>
            <Text className="title">Permission</Text>
            <Boxes>
              <ModulesBox>
                <Text className="box-title">Modules</Text>
                <ModulesList>
                  {[
                    {
                      name: "RS5 Feed",
                      permissionImageName: "rs5feed.svg",
                    },
                    {
                      name: "Facebook Post",
                      permissionImageName: "facebook.svg",
                    },
                    {
                      name: "Instagram Post",
                      permissionImageName: "instagram.svg",
                    },
                    {
                      name: "Instagram Activity",
                      permissionImageName: "instagram.svg",
                    },
                    {
                      name: "Twitter Post",
                      permissionImageName: "twitter.svg",
                    },
                    {
                      name: "LinkedIn Post",
                      permissionImageName: "linkedin.svg",
                    },
                    {
                      name: "Telegram Post",
                      permissionImageName: "telegram.png",
                    },
                    {
                      name: "Tumblr Post",
                      permissionImageName: "tumblr.png",
                    },
                    {
                      name: "Reddit Post",
                      permissionImageName: "reddit.png",
                    },
                    {
                      name: "Google my business Post",
                      permissionImageName: "google-business.svg",
                    },
                    {
                      name: "Youtube Post",
                      permissionImageName: "youtube.png",
                    },
                    {
                      name: "File Manager",
                      permissionImageName: "file-manager.svg",
                    },
                    {
                      name: "Group Manager",
                      permissionImageName: "group-manager.svg",
                    },
                    {
                      name: "Twitter analytics",
                      permissionImageName: "twitter.svg",
                    },
                    {
                      name: "Schedules",
                      permissionImageName: "schedules.svg",
                    },
                    {
                      name: "Caption",
                      permissionImageName: "caption.svg",
                    },
                    {
                      name: "Twitter activity",
                      permissionImageName: "twitter.svg",
                    },
                    {
                      name: "Team manager",
                      permissionImageName: "team-manager.svg",
                    },
                    {
                      name: "Twitter inbox",
                      permissionImageName: "twitter.svg",
                    },
                    {
                      name: "Twitter trend",
                      permissionImageName: "twitter.svg",
                    },
                    {
                      name: "Watermark",
                      permissionImageName: "watermark.svg",
                    },
                    {
                      name: "Account manager",
                      permissionImageName: "account-manager.svg",
                    },
                  ].map((moduleList) => (
                    <Checkbox reverse>
                      <ModuleIcon>
                        <img
                          src={`/images/permission/${moduleList.permissionImageName}`}
                          alt={moduleList.permissionImageName}
                        />
                      </ModuleIcon>
                      {moduleList.name}
                    </Checkbox>
                  ))}
                </ModulesList>
              </ModulesBox>
              <AccountManagerBox>
                <Text className="box-title">Account Manager</Text>
                <Menu
                  className="menu-account"
                  onItemChange={handleChangeMenuAccountDropdown}
                >
                  <Menu.Button>All Socmed</Menu.Button>
                  <Menu.Items>
                    <Menu.Item>All Socmed</Menu.Item>
                    <Menu.Item value="facebook">Facebook</Menu.Item>
                    <Menu.Item value="pinterest">Pinterest</Menu.Item>
                    <Menu.Item value="google-business">
                      Google Business
                    </Menu.Item>
                    <Menu.Item value="reddit">Reddit</Menu.Item>
                    <Menu.Item value="twitter">Twitter</Menu.Item>
                    <Menu.Item value="tiktok">Tiktok</Menu.Item>
                    <Menu.Item value="linkedin">LinkedIn</Menu.Item>
                    <Menu.Item value="tumblr">Tumblr</Menu.Item>
                    <Menu.Item value="youtube">Youtube</Menu.Item>
                    <Menu.Item value="telegram">Telegram</Menu.Item>
                  </Menu.Items>
                </Menu>
                <AccountManagerList>
                  {accountManagerList.map((account) => (
                    <Checkbox reverse>
                      <AccountManagerIcon type={account.accountType} />
                      {account.name}
                    </Checkbox>
                  ))}
                </AccountManagerList>
              </AccountManagerBox>
            </Boxes>
          </PermissionWrapper>

          <SubmitOptionButton>Submit</SubmitOptionButton>
        </Options>
      </Container>
    </>
  );
}

const Member = () => {
  const handleClickMenuActions = (e) => {};

  return (
    <MemberCard>
      <MemberProfile>
        <MemberProfilePicture>
          <img src="/images/icons/profile-circle.svg" alt="" />
        </MemberProfilePicture>
        <MemberDetail>
          <MemberName>Example@gmail.com</MemberName>
        </MemberDetail>
      </MemberProfile>
      <Menu className="menu-member">
        <Menu.Button prevent onClick={handleClickMenuActions}>
          <HamburgerDots className="menu-member__hamburger">
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
    </MemberCard>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const TeamMemberBox = styled.div`
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

const TeamMemberHeader = styled.div`
  height: 82px;
  border-bottom: 1px solid #f2f3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;

  .team-member__title {
    font-size: ${(props) => props.theme.fontSize["lg"]};
    color: ${(props) => props.theme.colors["p6"]};
    letter-spacing: -0.03em;
    line-height: 27px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }
`;

const TeamMemberList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  overflow-y: auto;
  height: calc(100% - 82px);

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const MemberCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 15px;
  border-radius: 15px;
  position: relative;

  .menu-member {
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

const MemberProfile = styled.div`
  display: flex;
  align-items: center;
`;

const MemberProfilePicture = styled.div`
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

const MemberDetail = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const MemberName = styled(Text)`
  color: ${(props) => props.theme.colors["p2"]};
  letter-spacing: -0.03em;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  cursor: pointer;
`;

// const HamburgerDotsWrapper = styled.div`
//   width: 20px;
//   height: auto;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
// `;

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

const Options = styled.div`
  width: calc(100% - 379px);
  margin-left: 30px;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
    margin-top: 20px;
  }
`;

const PermissionWrapper = styled.div`
  margin-top: 40px;

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #101010;
  }
`;

const Boxes = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 39px;

  .box-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.03em;
    color: #3a4569;
  }

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const ModulesBox = styled.div`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  padding: 35px 30px;
  flex: 1;
  height: max-content;
`;

const ModulesList = styled.div`
  margin-top: 30px;

  .checkbox-wrapper {
    justify-content: space-between;
    color: #3a4569;

    .checkbox-text {
      display: flex;
      align-items: center;
    }

    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const ModuleIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background: #f7faff;
  padding: 5px;
  display: flex;
  margin-right: 12px;

  img {
    margin: auto;
  }
`;

const AccountManagerBox = styled(ModulesBox)`
  position: relative;

  .menu-account {
    position: absolute;
    top: 27px;
    right: 33px;
    width: max-content;

    .menu-button {
      box-shadow: 0px 13px 32px rgba(58, 69, 105, 0.04);
      border-radius: 29px;
      width: 171px;
      background: white;
      font-size: 14px;
      line-height: 32px;
      padding: 4px;
    }
  }
`;

const AccountManagerList = styled(ModulesList)``;

const AccountManagerIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 9px;
  background: url(/images/monthlydigital.png);
  margin-right: 12px;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-size: contain !important;
    background-repeat: no-repeat !important;
  }

  ${(props) => {
    if (props.type === "facebook") {
      return `
        ::before {
          background: url(/images/socmed/fb.png)
        }
      `;
    } else if (props.type === "pinterest") {
      return `
        ::before {
          background: url(/images/socmed/pinterest.png)
        }
      `;
    } else if (props.type === "google-business") {
      return `
        ::before {
          background: url(/images/socmed/g-business.png)
        }
      `;
    } else if (props.type === "reddit") {
      return `
        ::before {
          background: url(/images/socmed/reddit.png)
        }
      `;
    } else if (props.type === "twitter") {
      return `
        ::before {
          background: url(/images/socmed/twitter.png)
        }
      `;
    } else if (props.type === "tiktok") {
      return `
        ::before {
          background: url(/images/socmed/tiktok.png)
        }
      `;
    } else if (props.type === "youtube") {
      return `
        ::before {
          background: url(/images/socmed/youtube.png)
        }
      `;
    } else if (props.type === "telegram") {
      return `
        ::before {
          background: url(/images/socmed/telegram.png)
        }
      `;
    } else if (props.type === "linkedin") {
      return `
        ::before {
          background: url(/images/socmed/linkedin.png)
        }
      `;
    } else if (props.type === "tumblr") {
      return `
        ::before {
          background: url(/images/socmed/tumblr.png)
        }
      `;
    }
  }}
`;

const SubmitOptionButton = styled(Button)`
  width: 100%;
  background: #237cfb;
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 14px;
  margin-top: 30px;
  color: white;
`;

export default TeamMember;
