import Text from "components/Typhography/Text";
import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import Checkbox from "components/Form/Checkbox";
import { useEffect, useRef } from "react";

function AccountManager() {
  return (
    <Container>
      <Account
        title="Facebook"
        imgName="fb-20x20.png"
        renderLinks={() => (
          <>
            <AccountLink>Page</AccountLink>
            <AccountLink>Group</AccountLink>
          </>
        )}
      />
      <Account
        title="Linkedin"
        imgName="linkedin.png"
        renderLinks={() => (
          <>
            <AccountLink>Page</AccountLink>
            <AccountLink>Group</AccountLink>
          </>
        )}
      />
      <Account
        title="Pinterest"
        imgName="pinterest.png"
        renderLinks={() => (
          <>
            <AccountLink>Boards</AccountLink>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Google My Business"
        imgName="g-business.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Twitter"
        imgName="twitter.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Telegram"
        imgName="telegram.png"
        renderLinks={() => (
          <>
            <AccountLink>Channel</AccountLink>
            <AccountLink>Group</AccountLink>
          </>
        )}
      />
      <Account
        title="Reddit"
        imgName="reddit.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Tumblr"
        imgName="tumblr.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Youtube"
        imgName="youtube.png"
        renderLinks={() => (
          <>
            <AccountLink>Channel</AccountLink>
          </>
        )}
      />
      <Account
        title="Tiktok"
        imgName="tiktok.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
      <Account
        title="Instagram"
        imgName="tiktok.png"
        renderLinks={() => (
          <>
            <AccountLink>Profile</AccountLink>
          </>
        )}
      />
    </Container>
  );
}

const Account = ({ title, imgName, renderLinks }) => {
  const parentCheckboxRef = useRef();
  const childCheckboxRef = useRef([]);

  const handleChangeCheckedListAccount = (e) => {
    childCheckboxRef.current.forEach(
      (child) => (child.checked = e.target.checked)
    );
  };

  useEffect(() => {
    if (childCheckboxRef.current) {
      childCheckboxRef.current.forEach((child) => {
        child.addEventListener("change", (e) => {
          const isAllChildCheked = childCheckboxRef.current.every((child) => {
            return child.checked === true;
          });

          parentCheckboxRef.current.checked = isAllChildCheked;
        });
      });
    }
  }, []);

  return (
    <AccountCard>
      <AccountCardHeader>
        <AccountCardIcon>
          <img src={`/images/socmed/${imgName}`} alt="facebook" />
        </AccountCardIcon>
        <AccountCardTitle>{title}</AccountCardTitle>
      </AccountCardHeader>
      <AccountLinksButton>{renderLinks()}</AccountLinksButton>
      <AccountLists>
        <AccountListNav>
          <Text>List Account</Text>
          <AccountListActions>
            <FaTrash color="#FF6270" className="btn-trash" />
            <Checkbox
              ref={parentCheckboxRef}
              onChange={handleChangeCheckedListAccount}
            />
          </AccountListActions>
        </AccountListNav>
        <AccountListWrapper>
          {[
            {
              name: "Monthlydigital",
            },
            {
              name: "Monthlydigital",
            },
            {
              name: "Monthlydigital",
            },
            {
              name: "Monthlydigital",
            },
            {
              name: "Monthlydigital",
            },
            {
              name: "Monthlydigital",
            },
          ].map((account, idx) => {
            return (
              <AccountList key={idx}>
                <AccountListProfile>
                  <AccountListProfileImage>
                    <img src="/images/monthlydigital.png" alt="" />
                  </AccountListProfileImage>
                  <Text>{account.name}</Text>
                </AccountListProfile>

                <Checkbox ref={(e) => (childCheckboxRef.current[idx] = e)} />
              </AccountList>
            );
          })}
        </AccountListWrapper>
      </AccountLists>
    </AccountCard>
  );
};

const Container = styled.div`
  height: auto;
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin: -25px -35px;
  padding: 35px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 100%;
    padding: 20px;
    width: 100%;
    padding: unset;
    margin: unset;
    gap: 30px;
  }
`;

const AccountCard = styled.div`
  width: 100%;
  height: 386px;
  background: #ffffff;
  box-shadow: 0px 23px 72px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  overflow: hidden;
  padding: 25px 20px 32px 20px;
`;

const AccountCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-bottom: 20px;
`;

const AccountCardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors["p4"]};
  padding: 10px;
  display: flex;

  img {
    margin: auto;
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
`;

const AccountCardTitle = styled(Text)`
  margin-left: 15px;
  letter-spacing: -0.03em;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  color: ${(props) => props.theme.colors["p6"]};
`;

const AccountLinksButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 16px;
`;

const AccountLink = styled.button`
  padding: 8px;
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.07);
  border-radius: 35px;
  border: 0.75px solid #4f97ff;
  color: ${(props) => props.theme.colors["p1"]};
  cursor: pointer;

  :not(:last-child) {
    margin-right: 12px;
  }

  :first-child:nth-last-child(1) {
    width: 140px;
    margin: auto;
  }

  :first-child:nth-last-child(2),
  :first-child:nth-last-child(2) ~ button {
    flex-grow: 1;
  }
`;

const AccountLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  height: calc(100% - 120px);
`;

const AccountListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  p {
    color: ${(props) => props.theme.colors["p1"]};
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
`;

const AccountListWrapper = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const AccountList = styled.div`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

const AccountListProfile = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 15px;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
    color: ${(props) => props.theme.colors["p2"]};
  }
`;

const AccountListProfileImage = styled.div`
  padding: 3.75px;
  border-radius: 14px;
  border: 0.75px solid #d8dce9;
  width: 45px;
  height: 45px;

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

const AccountListActions = styled.div`
  display: flex;
  width: 47px;
  justify-content: space-between;

  .btn-trash {
    cursor: pointer;
    width: max-content;
  }
`;

export default withChangeTitleDashboard(AccountManager)("Account Manager");
