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
    margin: 0 0 6.5625rem;

    font-family: Rowdies;
    font-size: 6rem;
    line-height: 7.4375rem;
  }
  a {
    font-family: Montserrat;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: #fff;
    cursor: pointer;
    z-index: 10;
  }
  #toPersonalInformation {
    margin-bottom: 1.125rem;

    button {
      width: 24.6875rem;
      height: 4.9375rem;
    }
  }
  #toApplications {
    text-decoration: underline;
  }
  img {
    width: 25.625rem;
    height: 23.2781rem;
    transform: rotate(27.28deg);
  }
`;
