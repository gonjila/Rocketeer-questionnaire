import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ADD_IDENTITY } from "../redux/actions";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function PersonalInformationPage() {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    dispatch(ADD_IDENTITY(data));

    navigate("/technlogies");
  };

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Hey, Rocketeer, what are your coordinates?</h1>

        <form
          id="information-form"
          onSubmit={handleSubmit(onFormSubmit)}
          ref={formRef}
        >
          <input
            className="input"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />

          <input
            className="input"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: false })}
          />

          <input
            className="input"
            type="mail"
            placeholder="E-Mail"
            {...register("email", { required: false })}
          />

          <input
            className="input"
            type="tel"
            placeholder="+995 5__ ___ ___"
            {...register("mobileNumber", { required: false })}
          />
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
`;
