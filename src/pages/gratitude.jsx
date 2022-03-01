import styled from "styled-components";

function PageForGratitude() {
  return (
    <Container>
      <h1>Thanks for Joining 😊</h1>
    </Container>
  );
}

export default PageForGratitude;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: var(--primaryBg);

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    width: 1066px;
    height: 191px;

    color: var(--redberryRed);
    font-family: Rowdies;
    font-weight: normal;
    font-size: 96px;
    line-height: 119px;
  }
`;
