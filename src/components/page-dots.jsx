import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { routes } from "../redux/selectors";

function DotsOfPages({ formRef }) {
  const location = useLocation();
  const RoutesInStore = useSelector(routes);

  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  useEffect(() => {
    setCurrentPageNumber(
      RoutesInStore.findIndex(route => route === location.pathname)
    );
  }, [location]);

  const onNextBtn = () => {
    // თუ ვალიდური არაა ჩამოწოდებული ინფუთი მაშინ არ გაუშვებს კოდს.
    const formValidity = formRef.current.reportValidity();
    if (formValidity) {
      console.log(formRef.current.id);
    }
  };

  return (
    <Container>
      {/* TODO marto wina gverdebs unda echirebodes */}
      <Link to="#">
        <img src="/images/Previous.svg" alt="left arrow" />
      </Link>
      <Link to="/personal-information" className="dot" />
      <Link to="/technlogies" className="dot" />
      <Link to="/covid" className="dot" />
      <Link to="/about-events" className="dot" />
      <Link to="/submitter" className="dot" />
      <Link to="#" onClick={onNextBtn}>
        <img src="/images/Next.svg" alt="right arrow" />
      </Link>
    </Container>
  );
}

export default DotsOfPages;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    width: 19px;
    height: 19px;
    margin: 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dot {
    border-radius: 50%;
    background-color: var(--redberryRed);
    cursor: pointer;
  }
`;
