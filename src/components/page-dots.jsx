import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { routes } from "../redux/selectors";

function DotsOfPages() {
  const location = useLocation();
  const RoutesInStore = useSelector(routes);

  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  useEffect(() => {
    // TODO რედაქსის სელექტორიდან წამოვიღო როუტერები.
    // TODO თუ შეიცვლება მისამართი მაშინ currentPageNumber შეიცვალოს.

    setCurrentPageNumber(
      RoutesInStore.findIndex(route => route === location.pathname)
    );
  }, [location]);

  useEffect(() => {
    console.log("currentPageNumber", currentPageNumber);
  }, [currentPageNumber]);

  return (
    <Container>
      {/* TODO marto wina gverdebs unda echirebodes */}
      <Link to="#">left</Link>
      <Link to="/personal-information" className="dot" />
      <Link to="/technlogies" className="dot" />
      <Link to="/covid" className="dot" />
      <Link to="/about-events" className="dot" />
      <Link to="/submitter" className="dot" />
      <Link to="#">right</Link>
    </Container>
  );
}

export default DotsOfPages;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    margin: 0 15px;
  }
  .dot {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: var(--redberryRed);
    cursor: pointer;
  }
`;
