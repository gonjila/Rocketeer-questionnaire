import styled from "styled-components";
import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function PersonalInformationPage() {
  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Hey, Rocketeer, what are your coordinates?</h1>
        <form>
          <input className="input" type="text" placeholder="First Name" />
          <input className="input" type="text" placeholder="Last Name" />
          <input className="input" type="mail" placeholder="E-Mail" />
          <input
            className="input"
            type="number"
            placeholder="+995 5__ ___ ___"
          />
          {/* <button>submit</button> */}
        </form>
        <DotsOfPages />
      </div>
      <div className="darkSide">
        <DarkComponent title="Redberry Origins">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </DarkComponent>
      </div>
    </Container>
  );
}

export default PersonalInformationPage;

const Container = styled.div`
  display: flex;

  .lightSide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .title {
      width: 716px;
      margin-bottom: 130px;
    }

    form {
      margin-bottom: 175px;

      display: flex;
      flex-direction: column;
    }
  }

  .darkSide {
  }
`;
