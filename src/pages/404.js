import styled from "styled-components";
import Text from "components/Typhography/Text";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 32px;
  }
`;

function NotFound() {
  return (
    <Container>
      <Text>Page Not Found :(</Text>
    </Container>
  );
}

export default NotFound;
