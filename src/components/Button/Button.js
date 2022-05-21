import { forwardRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: auto;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  line-height: 24px;
  letter-spacing: -0.03em;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["xs"]};
  }
`;

const Button = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});

export default Button;
