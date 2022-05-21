import { FullNavbar } from "components/Navbar/Navbar-Dashboard";
import styled from "styled-components";
import { Menu } from "components/Dropdown/Dropdown";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Input, InputWrapper } from "components/Form/Input";
import RadioText, { RadioTextWrapper } from "components/Form/RadioText";
import Label from "components/Form/Label";
import Button from "components/Button/Button";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Text from "components/Typhography/Text";
import { Tab } from "components/Tabs/Tabs";
import { Select } from "components/Form/Select";
import { useState } from "react";
import Checkbox from "components/Form/Checkbox";

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
    .menu-button {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme.colors["p1"]};
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.03em;
      align-items: center;
    }

    .menu-items {
      background: transparent;
      box-shadow: unset;
      border-radius: 16px;
      border: 0.75px solid #d8dce9;
      margin-top: 20px;
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
    width: 100%;
    position: initial;
    top: 0;
    margin-bottom: 40px;
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

const GeneralSettingBox = styled.div``;
const SocialMediaSettingBox = styled.div`
  margin-top: 20px;
`;

const SettingOptions = styled.div`
  width: calc(100% - 379px);
  margin-left: 35px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
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

const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  padding: 40px;

  :not(:last-child) {
    margin-bottom: 50px;
  }

  .btn-submit-form {
    box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
    border-radius: 14px;
    background: #237cfb;
    width: 244px;
    color: white;
    margin-top: 40px;
  }

  @media screen and (max-width: 996px) {
    padding: 15px;

    .btn-submit-form {
      width: 100%;
    }
  }
`;

const EmailForm = styled(Form)`
  .tab-lists {
    border-radius: unset;
    padding: unset;
    background: transparent;

    .tab-button {
      border-radius: unset;
      background: transparent;
      box-shadow: none;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #d8dce9;
      letter-spacing: -0.03em;

      &.active-tab {
        border-bottom: 1.5px solid #237cfb;
        color: #237cfb;
      }
    }
  }

  @media screen and (max-width: 996px) {
    .tab-lists {
      .tab-button {
        font-size: 14px;
      }
    }
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #237cfb;
    margin-bottom: 20px;
  }
`;

const FormWrapper = styled.div`
  border: 0.75px solid #d8dce9;
  box-sizing: border-box;
  border-radius: 15px;
  background: #ffffff;
  padding: 24px;
`;

const TipsEmailTemplateWrapper = styled.div`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  background: rgba(35, 124, 251, 0.15);
  border: 0.75px solid #237cfb;
  padding: 20px;
  margin-bottom: 40px;

  p {
    line-height: 24px;
    word-break: break-all;

    :first-child {
      font-weight: 500;
    }

    color: #237cfb;
  }
`;

const FormHelp = styled(TipsEmailTemplateWrapper)``;

const NotificationForm = styled(Form)``;
const FileManagerForm = styled(Form)``;
const FacebookForm = styled(Form)``;
const GoogleBusinessForm = styled(Form)``;
const InstagramForm = styled(Form)``;
const LinkedinForm = styled(Form)``;
const RedditForm = styled(Form)``;
const TumblrForm = styled(Form)``;
const TwitterForm = styled(Form)``;
const YoutubeForm = styled(Form)``;
// const PinterestForm = styled(Form)``;
// const TelegramForm = styled(Form)``;
// const TiktokForm = styled(Form)``;

function Settings() {
  const [currentSetting, setCurrentSetting] = useState("general-settings");

  return (
    <>
      <FullNavbar title="Settings" />
      <Container>
        <BoxSettings>
          <GeneralSettingBox>
            <Menu className="menu">
              {({ open }) => (
                <>
                  <Menu.Button
                    prevent
                    onClick={() => setCurrentSetting("general-settings")}
                  >
                    General Settings
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                  </Menu.Button>
                  <Menu.Items prevent>
                    <Menu.Item
                      prevent
                      as="a"
                      href="#email"
                      onClick={() => setCurrentSetting("general-settings")}
                    >
                      <SettingIcon>
                        <img src="/images/icons/sms.svg" alt="" />
                      </SettingIcon>
                      Email
                    </Menu.Item>
                    <Menu.Item
                      prevent
                      as="a"
                      href="#notification"
                      onClick={() => setCurrentSetting("general-settings")}
                    >
                      <SettingIcon>
                        <img src="/images/icons/notification-blue.svg" alt="" />
                      </SettingIcon>
                      Notification
                    </Menu.Item>
                    <Menu.Item
                      prevent
                      as="a"
                      href="#file-manager"
                      onClick={() => setCurrentSetting("general-settings")}
                    >
                      <SettingIcon>
                        <img src="/images/icons/folder-open-blue.svg" alt="" />
                      </SettingIcon>
                      File Manager
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </GeneralSettingBox>

          <SocialMediaSettingBox>
            <Menu className="menu">
              {({ open }) => (
                <>
                  <Menu.Button
                    prevent
                    onClick={() => setCurrentSetting("social-settings")}
                  >
                    Social Media Settings
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                  </Menu.Button>
                  <Menu.Items prevent>
                    <Menu.Item
                      prevent
                      as="a"
                      href="#facebook"
                      onClick={() => setCurrentSetting("social-settings")}
                    >
                      <SettingIcon>
                        <img src="/images/socmed/fb.png" alt="" />
                      </SettingIcon>
                      Facebook
                    </Menu.Item>
                    <Menu.Item
                      prevent
                      as="a"
                      href="#google-my-business"
                      onClick={() => setCurrentSetting("social-settings")}
                    >
                      <SettingIcon>
                        <img src="/images/socmed/g-business.png" alt="" />
                      </SettingIcon>
                      Google My Business
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#instagram">
                      <SettingIcon>
                        <img
                          src="/images/socmed/instagram.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Instagram
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#linkedin">
                      <SettingIcon>
                        <img
                          src="/images/socmed/linkedin.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      LinkedIn
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#reddit">
                      <SettingIcon>
                        <img
                          src="/images/socmed/reddit.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Reddit
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#tumblr">
                      <SettingIcon>
                        <img
                          src="/images/socmed/tumblr.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Tumblr
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#twitter">
                      <SettingIcon>
                        <img
                          src="/images/socmed/twitter.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Twitter
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#youtube">
                      <SettingIcon>
                        <img
                          src="/images/socmed/youtube.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      YouTube
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#pinterest">
                      <SettingIcon>
                        <img
                          src="/images/socmed/pinterest.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Pinterest
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#telegram">
                      <SettingIcon>
                        <img
                          src="/images/socmed/telegram.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Telegram
                    </Menu.Item>
                    <Menu.Item prevent as="a" href="#tiktok">
                      <SettingIcon>
                        <img
                          src="/images/socmed/tiktok.png"
                          alt=""
                          onClick={() => setCurrentSetting("social-settings")}
                        />
                      </SettingIcon>
                      Tiktok
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </SocialMediaSettingBox>
        </BoxSettings>
        <SettingOptions>
          {currentSetting === "general-settings" ? (
            <>
              <EmailForm id="email">
                <HeaderForm>
                  <Text className="header">Email</Text>
                </HeaderForm>
                <Tab.Group>
                  <Tab.Lists>
                    <Tab>Configure Mail Server</Tab>
                    <Tab>Email Template</Tab>
                  </Tab.Lists>
                  <Tab.Panels>
                    <Tab.Panel>
                      <ConfigureEmailServerForm />
                    </Tab.Panel>
                    <Tab.Panel>
                      <EmailTemplateForm />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </EmailForm>

              <NotificationForm id="notification">
                <HeaderForm>
                  <Text className="header">Notification</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Notification with Beamer</Text>
                  <FormWrapper>
                    <InputWrapper>
                      <Label>Status</Label>
                      <RadioTextWrapper>
                        <RadioText name="status">Enable</RadioText>
                        <RadioText name="status">Disable</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>
                    <FormHelp>
                      <Text>
                        Get Beamer product id at here :
                        https://www.getbeamer.com/
                      </Text>
                      <Text>
                        Important : set field HTML SELECTOR is
                        beamer-notification at here :
                        https://app.beamer.com/settings
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Beamer product ID</Label>
                      <Input placeholder="Write In Here" variant="solid" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <Button className="btn-submit-form">Submit</Button>
              </NotificationForm>

              <FileManagerForm id="file-manager">
                <HeaderForm>
                  <Text className="header">File Manager</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">General</Text>
                  <FormWrapper>
                    <InputWrapper>
                      <Label>Medias per page</Label>
                      <Input placeholder="Write In Here" variant="solid" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Design bold - image editor</Text>
                  <FormHelp>
                    <Text>
                      Click this link to create Design Bold App :
                      https://developers.designbold.com/apps/#create
                    </Text>
                  </FormHelp>

                  <FormWrapper>
                    <InputWrapper>
                      <Label>Status</Label>
                      <RadioTextWrapper>
                        <RadioText name="status-1">Enable</RadioText>
                        <RadioText name="status-1">Disabled</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Google Drive</Text>
                  <FormHelp>
                    <Text>
                      Click this link to create Google App :
                      https://console.developers.google.com/projectcreate
                    </Text>
                  </FormHelp>

                  <FormWrapper>
                    <InputWrapper>
                      <Label>Status</Label>
                      <RadioTextWrapper>
                        <RadioText name="status-2">Enable</RadioText>
                        <RadioText name="status-2">Disabled</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>

                    <InputWrapper>
                      <Label>Google API Key</Label>
                      <Input placeholder="Write In Here" variant="solid" />
                    </InputWrapper>

                    <InputWrapper>
                      <Label>Google Client ID</Label>
                      <Input placeholder="Write In Here" variant="solid" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Dropbox</Text>
                  <FormHelp>
                    <Text>
                      Click this link to create Dropbox App :
                      https://www.dropbox.com/developers/apps/create
                    </Text>
                  </FormHelp>

                  <FormWrapper>
                    <InputWrapper>
                      <Label>Status</Label>
                      <RadioTextWrapper>
                        <RadioText name="status-3">Enable</RadioText>
                        <RadioText name="status-3">Disabled</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>

                    <InputWrapper>
                      <Label>Onedrive API key</Label>
                      <Input placeholder="Write In Here" variant="solid" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <Button className="btn-submit-form">Submit</Button>
              </FileManagerForm>
            </>
          ) : (
            <>
              <FacebookForm id="facebook">
                <HeaderForm>
                  <Text className="header">Facebook</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Facebook API Configuration</Text>
                  <FormWrapper>
                    <InputWrapper>
                      <Label>Facebook Client ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Facebook Client Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Facebook App Ipsum</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Facebook API Profile</Text>
                  <FormWrapper>
                    <InputWrapper>
                      <Label>Login Facebook Profile</Label>
                      <RadioTextWrapper>
                        <RadioText name="login-fb">Enable</RadioText>
                        <RadioText name="login-fb">Disable</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Permissions</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Facebook Pages</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Permissions</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Facebook Groups</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Permissions</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <Button className="btn-submit-form">Submit</Button>
              </FacebookForm>

              <GoogleBusinessForm id="google-my-business">
                <HeaderForm>
                  <Text className="header">Google My Business</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">LinkedIn API Configuration</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>Click this link to create Google app : </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Google Client ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Google Client Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Google API Key</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <Button className="btn-submit-form">Submit</Button>
              </GoogleBusinessForm>

              <InstagramForm id="instagram">
                <HeaderForm>
                  <Text className="header">Instagram</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">LinkedIn API Configuration</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>Click this link to create Google app : </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Log In to Instagram via</Label>
                      <RadioTextWrapper>
                        <Checkbox>Username &amp; Password</Checkbox>
                        <Checkbox>Button</Checkbox>
                      </RadioTextWrapper>
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Get Instagram security code via</Label>
                      <RadioTextWrapper>
                        <RadioText name="code-via">SMS</RadioText>
                        <RadioText name="code-via">Email</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>
                    <InputWrapper>
                      <Label>FFMPEG PATH</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>FFPROBE PATH</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">Log In to Instagram via Button</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>Click this link to create Facebook app : </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Facebook App ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Facebook App Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Facebook App Version</Label>
                      <Input variant="solid" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Permission</Label>
                      <Input variant="solid" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </InstagramForm>

              <LinkedinForm id="linkedin">
                <HeaderForm>
                  <Text className="header">Linkedin</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">LinkedIn API Configuration</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Click this link to create LinkedIn app :
                        https://www.linkedin.com/developers/apps/new{" "}
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>LinkedIn API ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>LinkedIn API Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <Text className="title">LinkedIn Pages</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Note : To can add LindkedIn pages you need register
                        Marketing Developer Platform of Linkedin
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>LinkedIn page</Label>
                      <RadioTextWrapper>
                        <RadioText>Enable</RadioText>
                        <RadioText>Disable</RadioText>
                      </RadioTextWrapper>
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </LinkedinForm>

              <RedditForm id="reddit">
                <HeaderForm>
                  <Text className="header">Reddit</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Reddit API Configuration</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Click this link to create Reddit app :
                        https://www.reddit.com/prefs/apps
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Reddit Client ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Reddit Client Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </RedditForm>

              <TumblrForm id="tumblr">
                <HeaderForm>
                  <Text className="header">Tumblr</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Tumblr Profiles</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Click this link to create Tumblr app :
                        https://www.tumblr.com/aauth/register
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Tumblr costumer key</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Tumblr costumer Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </TumblrForm>

              <TwitterForm id="twitter">
                <HeaderForm>
                  <Text className="header">Twitter</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Twitter API Configuration</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Click this link to create Tumblr app :
                        https://www.tumblr.com/aauth/register
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Twitter consumer ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Tumblr consumer Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </TwitterForm>

              <YoutubeForm id="youtube">
                <HeaderForm>
                  <Text className="header">Youtube</Text>
                </HeaderForm>
                <FormSection>
                  <Text className="title">Youtube Profiles</Text>
                  <FormWrapper>
                    <FormHelp>
                      <Text>Callback URL :</Text>
                      <Text>
                        Click this link to create Tumblr app : Click this link
                        to create Google app :
                        https://console.developers.google.com/projectcreate
                      </Text>
                    </FormHelp>
                    <InputWrapper>
                      <Label>Google Client ID</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Google Client Secret</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Google API key</Label>
                      <Input variant="solid" placeholder="Write in here" />
                    </InputWrapper>
                  </FormWrapper>
                </FormSection>
                <Button className="btn-submit-form">Submit</Button>
              </YoutubeForm>
            </>
          )}
        </SettingOptions>
      </Container>
    </>
  );
}

const ConfigureEmailServerForm = () => {
  return (
    <>
      <FormSection>
        <Text className="title">Configure Mail Server</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Email From</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
          <InputWrapper>
            <Label>Your Name</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
          <InputWrapper>
            <Label>Email Protocol</Label>
            <RadioTextWrapper>
              <RadioText name="email-protocol">Mail</RadioText>
              <RadioText name="email-protocol">SMPTP</RadioText>
            </RadioTextWrapper>
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <FormSection>
        <Text className="title">Configure SMTP</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>SMPTP Server</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
          <InputWrapper>
            <Label>SMPTP Port</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
          <InputWrapper>
            <Label>SMTP Encryption</Label>
            <Select variant="solid" placeholder="Write in here">
              <option>TSL</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label>SMPTP Username</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
          <InputWrapper>
            <Label>SMPTP Password</Label>
            <Input variant="solid" placeholder="Write in here" />
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <FormSection>
        <Text className="title">Email Notification</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Welcome Email</Label>
            <RadioTextWrapper>
              <RadioText name="welcome-email">Enable</RadioText>
              <RadioText name="welcome-email">Disabled</RadioText>
            </RadioTextWrapper>
          </InputWrapper>
          <InputWrapper>
            <Label>Payment Success</Label>
            <RadioTextWrapper>
              <RadioText name="payment-success">Enable</RadioText>
              <RadioText name="payment-success">Disabled</RadioText>
            </RadioTextWrapper>
          </InputWrapper>
          <InputWrapper>
            <Label>Renewal Reminders</Label>
            <RadioTextWrapper>
              <RadioText name="renewal-reminders">Enable</RadioText>
              <RadioText name="renewal-reminders">Disabled</RadioText>
            </RadioTextWrapper>
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <Button className="btn-submit-form">Submit</Button>
    </>
  );
};

const EmailTemplateForm = () => {
  return (
    <>
      <TipsEmailTemplateWrapper>
        <Text>
          You can use following template tags within the message template:
        </Text>
        <Text>{"{full_name} - displays the user’s fullname"}</Text>
        <Text>{"{email} - displays the user’s email"}</Text>
        <Text>{"{days_left} - displays the remaining days"}</Text>
        <Text>{"{expiration_date} - displays the expiration date"}</Text>
        <Text>{"{activation_link} - displays the activation link"}</Text>
        <Text>{"{website_name} - displays website_name"}</Text>
        <Text>{"{website_link} - get link website"}</Text>
        <Text>{"{pricing_page} - get pricing page"}</Text>
        <Text>
          {"{recovery_password_link} - displays recovery password link"}
        </Text>
      </TipsEmailTemplateWrapper>

      <FormSection>
        <Text className="title">Email Activation</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Subject</Label>
            <Input
              variant="solid"
              placeholder="Hello {full_name} - displays the user’s fullname"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Content</Label>
            <Editor />
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <FormSection>
        <Text className="title">Forgot Password</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Subject</Label>
            <Input
              variant="solid"
              placeholder="Hello {full_name} - displays the user’s fullname"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Content</Label>
            <Editor />
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <FormSection>
        <Text className="title">Renewal Reminder</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Subject</Label>
            <Input
              variant="solid"
              placeholder="Hello {full_name} - displays the user’s fullname"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Content</Label>
            <Editor />
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <FormSection>
        <Text className="title">Payment Success</Text>
        <FormWrapper>
          <InputWrapper>
            <Label>Subject</Label>
            <Input
              variant="solid"
              placeholder="Hello {full_name} - displays the user’s fullname"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Content</Label>
            <Editor />
          </InputWrapper>
        </FormWrapper>
      </FormSection>

      <Button className="btn-submit-form">Submit</Button>
    </>
  );
};

export default Settings;
