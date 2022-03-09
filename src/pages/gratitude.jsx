import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PageForGratitude() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

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
    max-width: 95%;
    text-align: center;

    color: var(--redberryRed);
    font-family: Rowdies;
    font-weight: normal;
    font-size: 6rem;
    line-height: 7.5rem;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 50px;
      line-height: 65px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 35px;
      line-height: 45px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 25px;
      line-height: 35px;
    }
  }
`;
