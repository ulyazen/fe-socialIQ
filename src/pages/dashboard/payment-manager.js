import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import { InputWrapper, Input } from "components/Form/Input";
import Label from "components/Form/Label";
import RadioText, { RadioTextWrapper } from "components/Form/RadioText";
import { Select } from "components/Form/Select";
import Button from "components/Button/Button";

const PaymentManagerBoxes = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  padding: 40px;
  height: auto;
  margin-bottom: 35px;

  & > div {
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors["p1"]};
`;

const Form = styled.form`
  margin-top: 22px;
`;

const SubmitButtonForm = styled(Button)`
  width: 244px;
  background: ${(props) => props.theme.colors["p1"]};
  color: white;
`;

const GeneralPaymentBox = styled.div``;
const GeneralPaymentForm = styled(Form)``;

const OneTimePaymentBox = styled.div``;
const OneTimePaymentForm = styled(Form)``;

const PaypalRecurringPaymentBox = styled.div``;
const PaypalRecurringPaymentForm = styled(Form)``;

const StripePaymentBox = styled.div``;
const StripePaymentForm = styled(Form)``;

const StripeRecurringBox = styled.div``;
const StripeRecurringForm = styled(Form)``;

const RazorOneTimePaymentBox = styled.div``;
const RazorOneTimePaymentForm = styled(Form)``;

const RazorRecurringPaymentBox = styled.div``;
const RazorRecurringPaymentForm = styled(Form)``;

function PaymentManager() {
  return (
    <PaymentManagerBoxes>
      <GeneralPaymentBox>
        <Title>General</Title>
        <GeneralPaymentForm>
          <InputWrapper>
            <Label>Environment</Label>
            <RadioTextWrapper>
              <RadioText name="environment">Live</RadioText>
              <RadioText name="environment">Sandbox</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Currency</Label>
            <Select>
              <option>USD</option>
              <option>IDR</option>
            </Select>
          </InputWrapper>

          <InputWrapper>
            <Label>Symbol</Label>
            <Select>
              <option>$</option>
            </Select>
          </InputWrapper>
        </GeneralPaymentForm>
      </GeneralPaymentBox>

      <OneTimePaymentBox>
        <Title>Paypal one-time payment</Title>
        <OneTimePaymentForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status">Enable</RadioText>
              <RadioText name="status">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Client ID</Label>
            <Input variant="solid" />
          </InputWrapper>

          <InputWrapper>
            <Label>Client Secret Key</Label>
            <Input variant="solid" />
          </InputWrapper>
        </OneTimePaymentForm>
      </OneTimePaymentBox>

      <PaypalRecurringPaymentBox>
        <Title>Paypal recurring payment</Title>
        <PaypalRecurringPaymentForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status-paypal">Enable</RadioText>
              <RadioText name="status-paypal">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Webhook ID</Label>
            <Input variant="solid" />
          </InputWrapper>
        </PaypalRecurringPaymentForm>
      </PaypalRecurringPaymentBox>

      <StripePaymentBox>
        <Title>Stripe one-time payment</Title>
        <StripePaymentForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status-stripe">Enable</RadioText>
              <RadioText name="status-stripe">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Publishable key</Label>
            <Input variant="solid" />
          </InputWrapper>

          <InputWrapper>
            <Label>Secret Key</Label>
            <Input variant="solid" />
          </InputWrapper>
        </StripePaymentForm>
      </StripePaymentBox>

      <StripeRecurringBox>
        <Title>Stripe recurring payment</Title>
        <StripeRecurringForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status-stripe-recurring">Enable</RadioText>
              <RadioText name="status-stripe-recurring">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Signing secret</Label>
            <Input variant="solid" />
          </InputWrapper>
        </StripeRecurringForm>
      </StripeRecurringBox>

      <RazorOneTimePaymentBox>
        <Title>Razorpay one-time payment</Title>
        <RazorOneTimePaymentForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status-razor-otp">Enable</RadioText>
              <RadioText name="status-razor-otp">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Client ID</Label>
            <Input variant="solid" />
          </InputWrapper>

          <InputWrapper>
            <Label>Client Secret Key</Label>
            <Input variant="solid" />
          </InputWrapper>
        </RazorOneTimePaymentForm>
      </RazorOneTimePaymentBox>

      <RazorRecurringPaymentBox>
        <Title> Razorpay recurring payment</Title>
        <RazorRecurringPaymentForm>
          <InputWrapper>
            <Label>Status</Label>
            <RadioTextWrapper>
              <RadioText name="status-razor-recurring">Enable</RadioText>
              <RadioText name="status-razor-recurring">Disable</RadioText>
            </RadioTextWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label>Signing secret</Label>
            <Input variant="solid" />
          </InputWrapper>
        </RazorRecurringPaymentForm>
      </RazorRecurringPaymentBox>

      <SubmitButtonForm>Submit</SubmitButtonForm>
    </PaymentManagerBoxes>
  );
}

export default withChangeTitleDashboard(PaymentManager)("Payment Manager");
