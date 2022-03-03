import { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function PersonalInformationPage() {
  const formRef = useRef();

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  const onFormSubmit = event => {
    event.preventDefault();

    console.log("submit");
  };

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Hey, Rocketeer, what are your coordinates?</h1>
        <form id="my-form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef}>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            required
          />
          <input className="input" type="text" placeholder="Last Name" />
          <input className="input" type="mail" placeholder="E-Mail" />
          <input className="input" type="tel" placeholder="+995 5__ ___ ___" />
        </form>
        <DotsOfPages formRef={formRef} />
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
