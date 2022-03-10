import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import styled from "styled-components";

function WelcomePage() {
  return (
    <Container className="page">
      <Particles
        options={{
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                value_area: 790,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 84,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 20,
              },
              remove: {
                particles_nb: 15,
              },
            },
          },
        }}
      />
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
  /* background: url("/images/bgStars.png") black center no-repeat; */
  background: black;
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
    animation: yourAnimation 10s ease-in 0s infinite normal none;
  }

  @keyframes yourAnimation {
    0.0% {
      transform: rotate(0deg) scale(1) translate(0px, 0px);
    }
    100% {
      transform: scale(1) rotate(0deg) translate(0px, 0px);
    }
    19.6% {
      transform: scale(1.1) translate(-10px, 10px);
    }
    39.7% {
      transform: rotate(15deg) translate(10px, 10px);
    }
    59.7% {
      transform: scale(0.9) translate(-10px, -10px);
    }
    80.4% {
      transform: rotate(-15deg) translate(10px, -10px);
    }
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
