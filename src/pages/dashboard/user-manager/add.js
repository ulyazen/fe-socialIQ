import { Input } from "components/Form/Input";
import { InputWrapper } from "components/Form/Input";
import Label from "components/Form/Label";
import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import RadioText from "components/Form/RadioText";
import { Select as CustomSelect } from "components/Form/Select";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

function AddUser() {
  return (
    <Container>
      <AddUserForm />
    </Container>
  );
}

export const AddUserForm = ({ hideCancelButton }) => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const addOnOptions = [
    { value: "facebook-profile", label: "Facebook Profile" },
    { value: "facebook-group", label: "Facebook Group" },
    { value: "linkedin-profile", label: "Linked Profile" },
    { value: "linkedin-page", label: "Linked Page" },
    { value: "pinterest-profile", label: "Pinterest Profile" },
    { value: "pinterest-page", label: "Pinterest Page" },
    { value: "g-my-business-profile", label: "G My Business Profile" },
    { value: "twitter-profile", label: "Twitter Profile" },
    { value: "telegram-channel", label: "Telegram Channel" },
    { value: "telegram-group", label: "Telegram Group" },
    { value: "reddit-profile", label: "Reddit Profile" },
    { value: "tumblr-profile", label: "Tumblr Profile" },
    { value: "youtube-channel", label: "Youtube Channel" },
    { value: "tiktok-profile", label: "Tiktok Profile" },
    { value: "instagram-profile", label: "Instagram Profile" },
  ];

  return (
    <AddUserFormWrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <InputWrapper>
        <Label>Role</Label>
        <RoleWrapper>
          <RadioText name="role" className="role">
            Member
          </RadioText>
          <RadioText name="role" className="role">
            Admin
          </RadioText>
        </RoleWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Status</Label>
        <StatusWrapper>
          <RadioText name="status" className="status">
            Active
          </RadioText>
          <RadioText name="status" className="status">
            Inactive
          </RadioText>
          <RadioText name="status" className="status">
            Banned
          </RadioText>
        </StatusWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Fullname</Label>
        <Input variant="solid" placeholder="Fullname" />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input variant="solid" placeholder="Email" type="email" />
      </InputWrapper>
      <InputWrapper>
        <Label>Password</Label>
        <Input variant="solid" placeholder="Password" type="password" />
      </InputWrapper>
      <InputWrapper>
        <Label>Confirm Password</Label>
        <Input variant="solid" placeholder="Confirm Password" type="password" />
      </InputWrapper>
      <InputWrapper>
        <Label>Package</Label>
        <CustomSelect variant="solid" placeholder="Package">
          <option>Lorem ipsum</option>
          <option>Lorem ipsum</option>
          <option>Lorem ipsum</option>
        </CustomSelect>
      </InputWrapper>
      <InputWrapper>
        <Label>Add-on Package</Label>
        <Controller
          control={control}
          name="add-on"
          render={({ field: { onChange } }) => {
            return (
              <Select isMulti options={addOnOptions} onChange={onChange} />
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Expiration date</Label>
        <Input variant="solid" placeholder="Expiration date" type="date" />
      </InputWrapper>
      <InputWrapper>
        <Label>Timezone</Label>
        <Input variant="solid" placeholder="Timezone" type="text" />
      </InputWrapper>
      <ActionButtonWrapper>
        {!hideCancelButton && (
          <CancelButton type="button" onClick={() => navigate(-1)}>
            Cancel
          </CancelButton>
        )}
        <SubmitButton>Submit</SubmitButton>
      </ActionButtonWrapper>
    </AddUserFormWrapper>
  );
};

const Container = styled.div`
  margin: -25px -35px;
  padding: 35px;

  @media screen and (max-width: 996px) {
    margin: unset;
    padding: unset;
  }
`;

const AddUserFormWrapper = styled.form`
  width: auto;
  background: white;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  z-index: -1;
  padding: 40px;

  @media screen and (max-width: 996px) {
    padding: 30px;
  }
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: flex-end;
`;

const SubmitButton = styled(Button)`
  background: ${(props) => props.theme.colors["p1"]};
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 14px;
  width: 244px;
  color: white;
`;

const CancelButton = styled(SubmitButton)`
  background: #ff6270;
  margin-right: 20px;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const RoleWrapper = styled(RadioWrapper)`
  .role:not(:last-child) {
    // margin-right: 16px;
  }
`;

const StatusWrapper = styled(RadioWrapper)`
  .status:not(:last-child) {
    // margin-right: 16px;
  }
`;

export default withChangeTitleDashboard(AddUser)("Add User");
