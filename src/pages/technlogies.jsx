import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import { ADD_SKILL, DELETE_SKILL } from "../redux/actions";
import { skills } from "../redux/selectors";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function TechnologiesPage() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const skillsSelector = useSelector(skills);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [APISkills, setAPISkills] = useState(null);

  useEffect(() => {
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then(result => setAPISkills(result.data));
  }, []);

  const onFormSubmit = data => {
    dispatch(ADD_SKILL(data));
  };

  const onRemoveBtn = skillId => {
    dispatch(DELETE_SKILL(skillId));
  };

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Tell us about your skills</h1>

        <form
          id="technology-form"
          onSubmit={handleSubmit(onFormSubmit)}
          ref={formRef}
        >
          <div className="inputErrorWrapper">
            <select className="input select" {...register("id")}>
              <option value={0}>skills</option>
              {APISkills?.map(skill => (
                <option key={skill.id} value={skill.id}>
                  {skill.title}
                </option>
              ))}
            </select>
            {errors?.skill && (
              <span className="inputError">{errors?.skill?.message}</span>
            )}
          </div>

          <div className="inputErrorWrapper">
            <input
              className={errors.experience ? "input invalidInput" : "input"}
              type="number"
              min={0.5}
              step={0.5}
              placeholder="Experience Duration in Years"
              {...register("experience", {
                required: "* Experience is required",
              })}
            />
            {errors?.experience && (
              <span className="inputError">{errors?.experience?.message}</span>
            )}
          </div>

          <div>
            <button className="addLanguages" type="submit">
              Add Programming Language
            </button>
          </div>
        </form>

        <div className="skillsWrapper">
          {skillsSelector.length > 0
            ? skillsSelector.map(skill => (
                <div className="choosenSkill" key={skill.id}>
                  <div>{APISkills && APISkills[skill.id - 1].title}</div>
                  <div>Years of Experience: {skill.experience}</div>
                  <button onClick={() => onRemoveBtn(skill.id)}>
                    <img src="/images/Remove.svg" alt="remove" />
                  </button>
                </div>
              ))
            : "Add skill!"}
        </div>

        <DotsOfPages skillsAmount={skillsSelector?.length} />
      </div>

      <div className="darkSide">
        <DarkComponent title="A bit about our battles">
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </DarkComponent>
      </div>
    </Container>
  );
}

export default TechnologiesPage;

const Container = styled.div`
  display: flex;

  .lightSide {
    .title {
      margin-bottom: 7.5rem;
    }

    form {
      margin-bottom: 3.55rem;
      display: flex;
      flex-direction: column;

      .select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearence: none;
        background: url("/images/redVector.svg") no-repeat calc(100% - 1.25rem)
          center;
      }

      div {
        width: 100%;
        text-align: end;

        .addLanguages {
          width: 12.5625rem;
          height: 2rem;
          background-color: var(--redberryRed);
          color: #fff;
          font-family: Montserrat;
          font-size: 0.75rem;
          line-height: 0.9375rem;
        }
      }
    }

    .skillsWrapper {
      height: 18.75rem;
      margin: 0 0 10rem 0;
      overflow-y: auto;

      display: flex;
      flex-direction: column;

      .choosenSkill {
        width: 30rem;
        min-height: 3rem;
        padding: 0 1rem;
        border: 0.0625rem solid var(--primaryStroke);
        margin-bottom: 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          font-family: Montserrat;
          font-style: italic;
          font-size: 0.875rem;
          line-height: 1.0625rem;
        }
        button {
          width: 1.25rem;
          height: 1.25rem;
          background-color: transparent;
          border: none;
          cursor: pointer;

          img {
            min-width: 100%;
            min-height: 100%;
          }
        }
      }
    }
  }
`;
