import styled from "styled-components";

function DarkComponent({ children, title }) {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="child">{children}</div>
      <div />
    </Container>
  );
}

export default DarkComponent;

const Container = styled.div`
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .title {
    /* width: 95%; */
    margin-bottom: 6.25rem;
  }

  .child {
    width: 700px;
    max-width: 95%;
    /* height: 38rem; */

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 200%;

    display: flex;
    align-items: flex-start;
  }
`;
