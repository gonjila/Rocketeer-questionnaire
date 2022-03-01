import { Link } from "react-router-dom";
import styled from "styled-components";

function WelcomePage() {
  return (
    <Container>
      <h1>Welcome Rocketeer !</h1>
      <button>Start Questionnaire</button>
      <Link to="/#">Submitted Applications</Link>
      <img src="/images/rocketman.png" alt="" />
    </Container>
  );
}

export default WelcomePage;

const Container = styled.div`
  min-height: 100vh;
  background: url("/images/bgStars.png") black center no-repeat;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--redberryRed);
    margin: 0 0 105px;

    font-family: Rowdies;
    font-size: 96px;
    line-height: 119px;
  }
  button {
    width: 395px;
    height: 79px;
    background-color: var(--redberryRed);
    border-radius: 50px;
    margin-bottom: 18px;

    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    line-height: 29px;
  }
  a {
    font-family: Montserrat;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
  }
  img {
    width: 409.92px;
    height: 372.45px;
    transform: rotate(27.28deg);
  }
`;
