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
      width: 24.5rem;
      height: 5rem;
    }
  }
  #toApplications {
    /* text-decoration: underline; */
  }
  img {
    width: 25.625rem;
    height: 23.2781rem;
    transform: rotate(27.28deg);
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 50px;
      margin-bottom: 65px;
    }
    a {
      font-size: 15px;
      line-height: 18px;
    }
    #toPersonalInformation {
      margin-bottom: 10px;

      button {
        font-size: 15px;
        line-height: 18px;
        width: 245px;
        height: 50px;
      }
    }
    img {
      width: 256px;
      height: 232px;
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 40px;
      margin-bottom: 45px;
    }
  }
  @media (max-width: 430px) {
    h1 {
      font-size: 30px;
      margin-bottom: 0px;
    }
    a {
      font-size: 12px;
      line-height: 14px;
    }
    #toPersonalInformation {
      margin-bottom: 10px;

      button {
        font-size: 12px;
        line-height: 14px;
        width: 200px;
        height: 40px;
      }
    }
    img {
      width: 224px;
      height: 192px;
    }
  }
`;
