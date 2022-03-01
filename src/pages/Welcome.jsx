import { Link } from "react-router-dom";
import styled from "styled-components";

function WelcomePage() {
  return (
    <Container className="page">
      <h1>Welcome Rocketeer !</h1>
      <Link id="toPersonalInformation" to="/personal-information">
        <button className="redberryBtn">Start Questionnaire</button>
      </Link>
      <Link id="toApplications" to="/applications">
        Submitted Applications
      </Link>
      <img src="/images/rocketman.png" alt="rocketman" />
    </Container>
  );
}

export default WelcomePage;

const Container = styled.div`
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
  a {
    font-family: Montserrat;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    cursor: pointer;
    z-index: 10;
  }
  #toPersonalInformation {
    margin-bottom: 18px;

    button {
      width: 395px;
      height: 79px;
    }
  }
  #toApplications {
    text-decoration: underline;
  }
  img {
    width: 409.92px;
    height: 372.45px;
    transform: rotate(27.28deg);
  }
`;
