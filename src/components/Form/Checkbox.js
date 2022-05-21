import styled from "styled-components";
import { forwardRef, useEffect, useRef } from "react";
import Text from "components/Typhography/Text";

const CheckboxWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.reverse) {
      return `
        .checkbox-text {
          order: 1;
          margin-left: unset;
        }

        .custom-checkbox {
          order: 2;
          margin-left: 8px
        }
      `;
    }
  }}
`;

const InputCheckbox = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  display: none;

  &:checked + .custom-checkbox {
    background: #2196f3;
    border: unset;
    transition: 0.3s;

    ::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url("/images/icons/checkmark-white.svg") no-repeat;
      background-position: center;
      color: white;
      width: 10px;
      background-size: contain;
      margin: auto;
    }
  }
`;

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors["p3"]};
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    color: white;
    font-size: 10px;
  }
`;

const CheckboxText = styled(Text)`
  flex-shrink: 0;
  margin-left: 8px;
`;

const Checkbox = forwardRef(({ children, ...props }, ref) => {
  const {
    htmlFor,
    checkboxId,
    indeterminate,
    reverse = false,
    labelClassName,
  } = props;

  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <CheckboxWrapper
      as="label"
      htmlFor={htmlFor}
      reverse={reverse}
      className={`checkbox-wrapper ${labelClassName}`}
    >
      <InputCheckbox
        id={checkboxId}
        type="checkbox"
        ref={resolvedRef}
        {...props}
      />
      <StyledCheckbox className="custom-checkbox" />
      <CheckboxText className="checkbox-text">{children}</CheckboxText>
    </CheckboxWrapper>
  );
});

export default Checkbox;
