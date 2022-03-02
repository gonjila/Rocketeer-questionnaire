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
    margin-bottom: 100px;
  }

  .child {
    width: 705px;
    height: 605px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 200%;

    display: flex;
    align-items: flex-start;
  }
`;
