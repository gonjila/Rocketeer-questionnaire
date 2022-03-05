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
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    dispatch(ADD_IDENTITY(data));

    navigate("/technologies");
  };
  // TODO თუ input არ არის ვალიდური მაშინ border უნდა გაუწითლდეს
  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Hey, Rocketeer, what are your coordinates?</h1>

        <form
          id="information-form"
          onSubmit={handleSubmit(onFormSubmit)}
          ref={formRef}
        >
          <div className="inputErrorWrapper">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              {...register("first_name", {
                required: "* First name is required",
                minLength: {
                  value: 2,
                  message: "* First name should include 3 or more characters",
                },
              })}
            />
            {errors.first_name && (
              <span className="inputError">{errors?.first_name?.message}</span>
            )}
          </div>

          <div className="inputErrorWrapper">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              {...register("last_name", {
                required: "* Last name is required",
                minLength: {
                  value: 2,
                  message: "* Last name should include 3 or more characters",
                },
              })}
            />
            {errors.last_name && (
              <span className="inputError">{errors?.last_name?.message}</span>
            )}
          </div>

          <div className="inputErrorWrapper">
            <input
              className="input"
              type="mail"
              placeholder="E-Mail"
              {...register("email", {
                required: "* Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "* Enter the email in the correct format",
                },
              })}
            />
            {errors.email && (
              <span className="inputError">{errors?.email?.message}</span>
            )}
          </div>

          <div className="inputErrorWrapper">
            <input
              className="input"
              type="tel"
              placeholder="+995 5__ ___ ___"
              {...register("phone", {
                required: false,
                pattern: {
                  value: /^\+[1-9]{3}\s[0-9]{9}$/g,
                  message:
                    "* Enter the phone number in the correct format (+995 555555555)",
                },
              })}
            />
            {errors.phone && (
              <span className="inputError">{errors?.phone?.message}</span>
            )}
          </div>
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
