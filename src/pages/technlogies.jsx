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
    // formState: { errors },
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
          {/* TODO როცა ჩამოვშლი ისარი ატრიალდეს */}
          <select
            className="input select"
            {...register("skill", { required: true })}
          >
            <option>skills</option>
            {APISkills?.map(skill => (
              <option key={skill.id}>{skill.title}</option>
            ))}
          </select>

          <input
            className="input"
            type="number"
            min={0}
            placeholder="Experience Duration in Years"
            {...register("experiance", { required: true })}
          />

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
                  <div>{skill.skill}</div>
                  <div>Years of Experience: {skill.experiance}</div>
                  <button onClick={() => onRemoveBtn(skill.id)}>
                    <img src="/images/Remove.svg" alt="remove" />
                  </button>
                </div>
              ))
            : "Add skill!"}
        </div>

        <DotsOfPages />
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
      margin-bottom: 120px;
    }

    form {
      margin-bottom: 55px;
      display: flex;
      flex-direction: column;

      .select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearence: none;
        background: url("/images/redVector.svg") no-repeat calc(100% - 20px)
          center;
      }

      div {
        width: 100%;
        text-align: end;

        .addLanguages {
          width: 201px;
          height: 32px;
          background-color: var(--redberryRed);
          color: #fff;
          font-family: Montserrat;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }

    .skillsWrapper {
      height: 300px;
      margin: 0 0 160px 15px;
      overflow-y: scroll;

      display: flex;
      flex-direction: column;

      .choosenSkill {
        width: 447px;
        min-height: 48px;
        padding: 0 16px;
        border: 1px solid var(--primaryStroke);
        margin-bottom: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          font-family: Montserrat;
          font-style: italic;
          font-size: 14px;
          line-height: 17px;
        }
        button {
          width: 20px;
          height: 20px;
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
