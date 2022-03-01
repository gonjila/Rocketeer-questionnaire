import { Link } from "react-router-dom";
import styled from "styled-components";

function DotsOfPages() {
  return (
    <Container>
      {/* TODO marto wina gverdebs unda echirebodes */}
      <div>left</div>
      <button className="dot" />
      <button className="dot" />
      <button className="dot" />
      <button className="dot" />
      <button className="dot" />
      <div>right</div>
    </Container>
  );
}

export default DotsOfPages;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .dot {
    width: 19px;
    height: 19px;
    margin: 0 15px;
    border-radius: 50%;
    background-color: var(--redberryRed);
    cursor: pointer;
  }
`;
