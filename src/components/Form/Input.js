import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 12px 16px 12px 16px;
  border-radius: 9px;

  ${(props) => {
    if (props.variant === "solid") {
      return `
        background: white;
        box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);

        :placeholder {
          color: #D8DCE9;
          font-size: 14px;
          line-height: 21px;
        }
      `;
    } else if (props.variant === "underline") {
      return `
        background: white;
        border: 1px solid #D8DCE9;
        border-radius: 15px;
      `;
    }
  }}
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 55px;
  background: #f9fafe;
  border: 1px solid #e3e6f3;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 14px;

  svg {
    color: #e3e6f3;
    margin-right: 12px;
  }

  input {
    background: unset;
    padding: unset;
    border: unset;
    height: inherit;
    width: inherit;
    border-radius: unset;
  }

  ${(props) =>
    props.transparent &&
    `
    background: transparent;
    border: unset;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
