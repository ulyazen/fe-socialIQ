import styled from "styled-components";

const Label = styled.label`
  input:checked ~ .custom-radio {
    background: ${(props) => props.theme.colors["p1"]};
    box-shadow: inset 0 0 0 4px white;
    border-color: ${(props) => props.theme.colors["p1"]};
  }
`;

const CustomRadio = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid rgba(216, 220, 233, 1);
  border-radius: 50%;
  cursor: pointer;
`;

const Radio = ({ labelFor, radioRef, radioName = "radio" }) => {
  return (
    <Label>
      <input ref={radioRef} name={radioName} type="radio" hidden />
      <CustomRadio className="custom-radio" />
    </Label>
  );
};

export default Radio;
