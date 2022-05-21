import { FullNavbar } from "components/Navbar/Navbar-Dashboard";
import styled from "styled-components";
import { Input, InputWrapper } from "components/Form/Input";
import Label from "components/Form/Label";
import Button from "components/Button/Button";
import { Menu } from "components/Dropdown/Dropdown";
import { Select } from "components/Form/Select";
import { FaEdit, FaFacebook } from "react-icons/fa";
import Text from "components/Typhography/Text";

const Container = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const BoxSettings = styled.div`
  width: 379px;
  height: max-content;
  padding: 35px 30px;
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  position: sticky;
  top: 135px;

  .menu {
    .menu-items {
      background: transparent;
      box-shadow: unset;
      border-radius: 16px;
      border: 0.75px solid #d8dce9;
      padding: 20px;

      .menu-item {
        color: ${(props) => props.theme.colors["p2"]};
        text-align: left;
        font-size: 16px;
        line-height: 24px;
        display: inline-flex;
        align-items: center;

        :hover,
        &.active {
          background: transparent;
          color: ${(props) => props.theme.colors["p1"]};
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const SettingOptions = styled.div`
  width: calc(100% - 379px);
  margin-left: 35px;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
  }
`;

const SettingIcon = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  background: #f7faff;
  border-radius: 10px;
  margin-right: 11px;

  svg,
  img {
    margin: auto;
    font-size: 24px;
  }
`;

const Form = styled.form`
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;

  button[type="submit"] {
    background: ${(props) => props.theme.colors["p1"]};
    box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
    border-radius: 14px;
    width: 244px;
    color: white;
  }
`;

const ProfileForm = styled(Form)``;

const InputNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  .input-wrapper {
    flex: 1;
  }

  @media screen and (max-width: 996px) {
    flex-direction: column;
    gap: unset;
    margin-bottom: 20px;
  }
`;

const TimezoneForm = styled(Form)`
  margin-top: 50px;
`;

const BoxInputAvatarWrapper = styled.div`
  width: 100%;
  background: linear-gradient(278.72deg, #237cfb 2.67%, #4994ff 109.98%);
  box-shadow: 0px 28px 86px rgba(63, 140, 255, 0.07);
  border-radius: 24px;
  margin-bottom: 44px;
  display: flex;
  align-items: center;
  padding: 35px 40px;
`;

const AvatarBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 11px solid rgba(255, 255, 255, 0.15);
  display: flex;
  margin-right: 30px;
  position: relative;

  img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-size: cover;
    border-radius: inherit;
  }

  @media screen and (max-width: 996px) {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

const EditAvatarIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  right: 0;
  bottom: 0;
  position: absolute;
  background: white;
  color: #237cfb;
  display: flex;
  cursor: pointer;

  svg {
    margin: auto;
  }
`;

const DetailProfile = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: white;

    :first-child {
      margin-bottom: 18px;
      font-weight: 500;
      font-size: 28px;
      line-height: 42px;
    }

    :last-child {
      padding: 8px 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 100px;
    }
  }

  @media screen and (max-width: 996px) {
    p {
      :first-child {
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
      }

      :last-child {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;

const HeaderForm = styled.div`
  width: 100%;
  padding: 20px 40px;
  background: linear-gradient(278.72deg, #237cfb 2.67%, #4994ff 109.98%);
  box-shadow: 0px 9px 86px rgba(63, 140, 255, 0.35);
  border-radius: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .header {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #ffffff;
  }
`;

const TimezoneHeaderForm = styled(HeaderForm)``;

const PackageForm = styled(Form)`
  margin-top: 50px;

  & > button {
    margin: 40px auto auto auto;
    background: #237cfb;
    width: 277px;
    color: white;
  }
`;

const PackageHeaderForm = styled(HeaderForm)``;
const PackageBoxWrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #237cfb;
    margin-bottom: 20px;
  }
`;

const PackagesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  border: 0.75px solid #d8dce9;
  border-radius: 15px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 100%;
  }
`;

const PackageCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;

  button {
    background: transparent;
    width: 100%;
    text-align: center;
    color: #237cfb;
  }
`;

const PackageCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f3f8;
  padding-bottom: 25px;

  .wrap {
    display: flex;
    align-items: center;
  }
`;

const PackageCardIcon = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 6px solid #237cfb;
  background: white;
  color: #237cfb;
  display: flex;

  svg {
    margin: auto;
    font-size: 24px;
  }
`;

const DetailPackageCard = styled.div`
  display: flex;
  margin-left: 22px;
  flex-direction: column;
  height: max-content;

  p {
    :first-child {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #3a4569;
      letter-spacing: -0.02em;
    }

    :last-child {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #237cfb;

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #d8dce9;
      }
    }
  }
`;

const PricePackageCard = styled(Text)`
  color: #237cfb;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

const PlansForm = styled(Form)`
  margin-top: 50px;
`;

const PlansHeaderForm = styled(HeaderForm)``;
const PlansWrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #237cfb;
    margin-bottom: 20px;
  }
`;

const PlansBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  border: 0.75px solid #d8dce9;
  border-radius: 15px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 100%;
  }
`;

const PlansCardHeader = styled.div`
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 15px;
  background: #237cfb;
  display: flex;
  justify-content: space-between;
  padding: 22px 25px;

  .price {
    color: white;
  }
`;

const PlansCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 12px;

  & > button {
    background: transparent;
    color: #ff6270;
    margin-top: 16px;
    width: 100%;

    :last-child {
      background: ${(props) => props.theme.colors["p1"]};
      color: white;
    }
  }
`;

const DetailPlansCard = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #f7faff;

    :first-child {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    :last-child {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      margin-top: 6px;
    }
  }
`;

function Profile() {
  return (
    <>
      <FullNavbar title="Profile Settings" />
      <Container>
        <BoxSettings>
          <Menu
            className="menu"
            context={{
              open: true,
              textContent: null,
              valueItem: null,
            }}
          >
            <Menu.Items prevent>
              <Menu.Item prevent as="a" href="#profile">
                <SettingIcon>
                  <img src="/images/icons/sms.svg" alt="" />
                </SettingIcon>
                Profile
              </Menu.Item>
              <Menu.Item prevent as="a" href="#timezone">
                <SettingIcon>
                  <img src="/images/icons/global.svg" alt="" />
                </SettingIcon>
                Timezone
              </Menu.Item>
              <Menu.Item prevent as="a" href="#package">
                <SettingIcon>
                  <img src="/images/icons/box-blue.svg" alt="" />
                </SettingIcon>
                Package
              </Menu.Item>
              <Menu.Item prevent as="a" href="#plans">
                <SettingIcon>
                  <img src="/images/icons/plans.svg" alt="" />
                </SettingIcon>
                Plans
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </BoxSettings>
        <SettingOptions>
          <ProfileForm id="profile">
            <BoxInputAvatarWrapper>
              <AvatarBox>
                <img src="/images/avatar/1.png" alt="" />
                <EditAvatarIcon as="label" htmlFor="avatar">
                  <FaEdit />
                </EditAvatarIcon>
                <Input type="file" hidden id="avatar" />
              </AvatarBox>
              <DetailProfile>
                <Text>Rizky Febryan</Text>
                <Text>example@email.com</Text>
              </DetailProfile>
            </BoxInputAvatarWrapper>
            <InputNameWrapper>
              <InputWrapper className="input-wrapper">
                <Label>First Name</Label>
                <Input variant="underline" placeholder="First Name" />
              </InputWrapper>
              <InputWrapper className="input-wrapper">
                <Label>Last Name</Label>
                <Input variant="underline" placeholder="Last Name" />
              </InputWrapper>
            </InputNameWrapper>

            <InputWrapper>
              <Label>Email</Label>
              <Input variant="underline" placeholder="Email" type="email" />
            </InputWrapper>

            <InputWrapper>
              <Label>Contact Number</Label>
              <Input
                variant="underline"
                placeholder="Contact Number"
                type="tel"
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Password</Label>
              <Input
                variant="underline"
                placeholder="Password"
                type="password"
              />
            </InputWrapper>

            <Button type="submit">Save</Button>
          </ProfileForm>

          <TimezoneForm id="timezone">
            <TimezoneHeaderForm>
              <Text className="header">Timezone</Text>
            </TimezoneHeaderForm>
            <InputWrapper>
              <Label>Timezone</Label>
              <Select variant="underline">
                <option>UTC+05:30</option>
              </Select>
            </InputWrapper>
            <Button type="submit">Save</Button>
          </TimezoneForm>

          <PackageForm as="div" id="package">
            <PackageHeaderForm>
              <Text className="header">Package</Text>
            </PackageHeaderForm>
            <PackageBoxWrapper>
              <Text className="title">Your Package</Text>
              <PackagesBox>
                <PackageCard>
                  <PackageCardHeader>
                    <div className="wrap">
                      <PackageCardIcon>
                        <FaFacebook />
                      </PackageCardIcon>

                      <DetailPackageCard>
                        <Text>Facebook Profile</Text>
                        <Text>
                          15 days <span>remaining</span>
                        </Text>
                      </DetailPackageCard>
                    </div>

                    <PricePackageCard>$10/Month</PricePackageCard>
                  </PackageCardHeader>

                  <Button>Cancel Package</Button>
                </PackageCard>
                <PackageCard>
                  <PackageCardHeader>
                    <div className="wrap">
                      <PackageCardIcon>
                        <FaFacebook />
                      </PackageCardIcon>

                      <DetailPackageCard>
                        <Text>Facebook Profile</Text>
                        <Text>
                          15 days <span>remaining</span>
                        </Text>
                      </DetailPackageCard>
                    </div>

                    <PricePackageCard>$10/Month</PricePackageCard>
                  </PackageCardHeader>

                  <Button>Cancel Package</Button>
                </PackageCard>
                <PackageCard>
                  <PackageCardHeader>
                    <div className="wrap">
                      <PackageCardIcon>
                        <FaFacebook />
                      </PackageCardIcon>

                      <DetailPackageCard>
                        <Text>Facebook Profile</Text>
                        <Text>
                          15 days <span>remaining</span>
                        </Text>
                      </DetailPackageCard>
                    </div>

                    <PricePackageCard>$10/Month</PricePackageCard>
                  </PackageCardHeader>

                  <Button>Cancel Package</Button>
                </PackageCard>
                <PackageCard>
                  <PackageCardHeader>
                    <div className="wrap">
                      <PackageCardIcon>
                        <FaFacebook />
                      </PackageCardIcon>

                      <DetailPackageCard>
                        <Text>Facebook Profile</Text>
                        <Text>
                          15 days <span>remaining</span>
                        </Text>
                      </DetailPackageCard>
                    </div>

                    <PricePackageCard>$10/Month</PricePackageCard>
                  </PackageCardHeader>

                  <Button>Cancel Package</Button>
                </PackageCard>
              </PackagesBox>
            </PackageBoxWrapper>

            <Button>Explore Marketplace</Button>
          </PackageForm>

          <PlansForm as="div" id="plans">
            <PlansHeaderForm>
              <Text className="header">Plans</Text>
            </PlansHeaderForm>
            <PlansWrapper>
              <Text className="title">Your Active Plans</Text>
              <PlansBox>
                <PlansCard>
                  <PlansCardHeader>
                    <DetailPlansCard>
                      <Text>Premium</Text>
                      <Text>15 days remaining</Text>
                    </DetailPlansCard>

                    <Text className="price">$10/Month</Text>
                  </PlansCardHeader>
                  <Button>Cancel Package</Button>
                  <Button>Upgrade Plan</Button>
                </PlansCard>
              </PlansBox>
            </PlansWrapper>
          </PlansForm>
        </SettingOptions>
      </Container>
    </>
  );
}

export default Profile;
