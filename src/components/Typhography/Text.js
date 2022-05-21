import styled from "styled-components";

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize[props.size ?? "base"]};
  font-weight: ${(props) => props.theme.fontWeight[props.weight ?? "regular"]};
  margin: ${(props) => props.margin};
  color: ${(props) => props.theme.colors[props.color]};
`;

export default Text;
