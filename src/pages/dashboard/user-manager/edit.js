import { Input } from "components/Form/Input";
import { InputWrapper } from "components/Form/Input";
import Label from "components/Form/Label";
import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import RadioText from "components/Form/RadioText";
import { Select } from "components/Form/Select";
import { useForm } from "react-hook-form";

function EditUser() {
  return (
    <Container>
      <EditUserForm />
    </Container>
  );
}

export const EditUserForm = ({ hideCancelButton }) => {
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <EditUserFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Role</Label>
        <RoleWrapper>
          <RadioText {...register("role")} className="role" defaultChecked>
            Member
          </RadioText>
          <RadioText {...register("role")} className="role">
            Admin
          </RadioText>
        </RoleWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Status</Label>
        <StatusWrapper>
          <RadioText {...register("status")} className="status" defaultChecked>
            Active
          </RadioText>
          <RadioText {...register("status")} className="status">
            Inactive
          </RadioText>
          <RadioText {...register("status")} className="status">
            Banned
          </RadioText>
        </StatusWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Fullname</Label>
        <Input
          {...register("fullname")}
          variant="solid"
          placeholder="Fullname"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input
          {...register("email")}
          variant="solid"
          placeholder="Email"
          type="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Password</Label>
        <Input
          {...register("password")}
          variant="solid"
          placeholder="Password"
          type="password"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Confirm Password</Label>
        <Input
          {...register("confirm-password")}
          variant="solid"
          placeholder="Confirm Password"
          type="password"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Package</Label>
        <Select {...register("package")} variant="solid" placeholder="Package">
          <option>Lorem ipsum</option>
          <option>Lorem ipsum</option>
          <option>Lorem ipsum</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>Expiration date</Label>
        <Input
          {...register("expiration-date")}
          variant="solid"
          placeholder="Expiration date"
          type="date"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Timezone</Label>
        <Input
          {...register("timezone")}
          variant="solid"
          placeholder="Timezone"
          type="text"
        />
      </InputWrapper>
      <ActionButtonWrapper>
        {!hideCancelButton && (
          <CancelButton type="button" onClick={() => navigate(-1)}>
            Cancel
          </CancelButton>
        )}

        <SubmitButton>Save</SubmitButton>
      </ActionButtonWrapper>
    </EditUserFormWrapper>
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

const EditUserFormWrapper = styled.form`
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

export default withChangeTitleDashboard(EditUser)("Edit User");
