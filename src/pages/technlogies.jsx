import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function TechnologiesPage() {
  const [skills, setSkills] = useState(null);

  // FIXME ამ გვერდზე ყოველ გადასვლაზე ახლიდან არ იტვირთებოდეს. შეიძლება სხვა ფაილში გადატანა.
  useEffect(() => {
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then(result => setSkills(result.data));
    console.log("get skills");
  }, []);

  const addLanguageBtn = () => {};

  const onRemoveBtn = () => {};

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Tell us about your skills</h1>
        <form>
          <select className="input select" name="skills">
            <option value="skill">skill</option>
            {skills?.map(skill => (
              <option key={skill.id} value={skill.title}>
                {skill.title}
              </option>
            ))}
          </select>
          <input
            className="input"
            type="number"
            min={0}
            placeholder="Experience Duration in Years"
          />
          <div>
            <button
              className="addLanguages"
              type="button"
              onClick={addLanguageBtn}
            >
              Add Programming Language
            </button>
          </div>
        </form>

        <div className="skillsWrapper">
          {/* TODO reduxidan skilebis chamonaTvali */}
          <div className="choosenSkill">
            <div>PHP</div>
            <div>Years of Experience: 3</div>
            <button onClick={onRemoveBtn}>
              <img src="/images/Remove.svg" alt="remove" />
            </button>
          </div>
          <div className="choosenSkill">
            <div>React</div>
            <div>Years of Experience: 2</div>
            <button onClick={onRemoveBtn}>
              <img src="/images/Remove.svg" alt="remove" />
            </button>
          </div>
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
