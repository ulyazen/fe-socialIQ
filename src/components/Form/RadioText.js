import styled from "styled-components";
import { forwardRef, useRef } from "react";

const Wrapper = styled.label`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 9px;
  background: #ffffff;
  padding: 13px;
  width: max-content;
  color: ${(props) => props.theme.colors["p3"]};
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;

  input:checked ~ .custom-radio {
    background: ${(props) => props.theme.colors["p1"]};
    box-shadow: 0 0 1px white, 0 0 0 1px ${(props) => props.theme.colors["p1"]};

    ::before {
      content: "";
      display: block;
      position: absolute;
      inset: 0;
      outline: 1px solid ${(props) => props.theme.colors["p1"]};
      border-radius: 9px;
    }
  }
`;

export const RadioTextWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const CustomRadio = styled.div`
  border: 1px solid #d8dce9;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

const RadioText = forwardRef(({ children, className, ...props }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  return (
    <Wrapper className={`${className} wrapper`}>
      <input ref={resolvedRef} type="radio" hidden {...props} />
      <CustomRadio className="custom-radio" />
      {children}
    </Wrapper>
  );
});

export default RadioText;
