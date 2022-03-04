/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import routes from "../utils/routes";

function DotsOfPages({ formRef }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  useEffect(() => {
    setCurrentPageNumber(
      routes.findIndex(route => route === location.pathname)
    );
  }, [location]);

  const onLeftArrow = () => {
    navigate(routes[currentPageNumber - 1]);
  };

  const dotsClassname = pageNum => {
    if (currentPageNumber < pageNum) {
      return "dot deactiveDot";
    }
    if (currentPageNumber == pageNum) {
      return "dot semiDeactiveDot";
    }

    return "dot";
  };

  return (
    <Container>
      {/* TODO marto wina gverdebs unda echirebodes */}
      <a onClick={onLeftArrow}>
        <img src="/images/Previous.svg" alt="left arrow" />
      </a>

      <Link to="/personal-information" className={dotsClassname(1)} />
      <Link to="/technlogies" className={dotsClassname(2)} />
      <Link to="/covid" className={dotsClassname(3)} />
      <Link to="/about-events" className={dotsClassname(4)} />
      <Link to="/submitter" className={dotsClassname(5)} />

      {/* <Link to="#" onClick={onNextBtn}> */}
      <button form={formRef?.current?.id}>
        <img src="/images/Next.svg" alt="right arrow" />
      </button>
      {/* </Link> */}
    </Container>
  );
}

export default DotsOfPages;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  a,
  button {
    width: 19px;
    height: 19px;
    margin: 0 15px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dot {
    border-radius: 50%;
    background-color: var(--redberryRed);
  }
  .semiDeactiveDot {
    pointer-events: none;
  }
  .deactiveDot {
    opacity: 0.1;
    pointer-events: none;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
