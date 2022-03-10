import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import UserInsights from "../components/user-insights";
import CovidSituation from "../components/covid-situation";

function ApplicationsPage() {
  const [apiData, setApiData] = useState([]);
  const [apiSkills, setApiSkills] = useState([]);
  const [openedDetails, setOpenedDetails] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://bootcamp-2022.devtest.ge/api/applications?token=${process.env.REACT_APP_MY_API_TOKEN}`,
        { headers: { accept: "application/json" } }
      )
      .then(result => setApiData(result.data));

    axios
      .get(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then(result => setApiSkills(result.data));
  }, []);

  const changeOpenedDetails = number => {
    setOpenedDetails(prev => (prev === number ? null : number));
  };

  return (
    <Container>
      <h1 className="applicationsTitle">Submitted Applications</h1>

      {apiData.length === 0 && (
        <h1
          className="applicationsTitle"
          style={{ fontSize: "2rem", color: "var(--primaryRed)" }}
        >
          Go back and start questionnaire
        </h1>
      )}

      <div id="resultsWrapper">
        {apiData &&
          apiData.slice(0, 10).map((data, index) => (
            <div className="applicationResult" key={Math.random()}>
              <button
                className="resultHead"
                onClick={() => changeOpenedDetails(index)}
              >
                <div>{index}</div>
                <div
                  style={
                    openedDetails === index
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <img src="/images/whiteVector.svg" alt="arrow" />
                </div>
              </button>

              <div
                className="resultBody"
                style={openedDetails === index ? {} : { display: "none" }}
              >
                <div className="answersComponent personalInformation">
                  <h3>Personal Information</h3>
                  <div>
                    <p>First Name:</p>
                    <p>{data.first_name}</p>
                  </div>
                  <div>
                    <p>Last Name:</p>
                    <p>{data.last_name}</p>
                  </div>
                  <div>
                    <p>E Mail</p>
                    <p>{data.email}</p>
                  </div>
                  <div>
                    <p>Phone</p>
                    <p>{data.phone}</p>
                  </div>
                </div>

                <div className="answersComponent skillset">
                  <h3>Skillset</h3>

                  {data.skills.map(skill => (
                    <div key={skill.id}>
                      <p>{apiSkills[skill.id]?.title}</p>
                      <p>Years of Experience: {skill.experience}</p>
                    </div>
                  ))}
                </div>

                <CovidSituation data={data} />

                <UserInsights data={data} />
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default ApplicationsPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: var(--primaryBg);
  padding: 1rem 16vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .applicationsTitle {
    margin: 5rem 0 3.4375rem;
    text-align: center;

    color: #fff;
    font-family: Rowdies;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4.375rem;
  }

  #resultsWrapper {
    width: 100%;

    .applicationResult {
      margin-bottom: 1.25rem;

      .resultHead {
        width: 100%;
        height: 3.25rem;
        padding: 0 1.875rem;
        background-color: var(--redberryRed);
        border: none;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #fff;
        font-size: 0.875rem;
        line-height: 1.0625rem;
      }

      .resultBody {
        padding: 0 13%;
        background: #fff;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .answersComponent {
          margin: 0.625rem 1.25rem;

          h3 {
            max-width: 100%;
            color: var(--redberryRed);
            font-style: italic;
            font-size: 1.125rem;
            line-height: 1.375rem;
            text-decoration: underline;
          }

          div {
            margin-bottom: 2.5rem;

            textarea {
              /* max-width: 27.9375rem; */
              width: 100%;
              height: 7.625rem;
              padding: 1.25rem 1.5rem;
              resize: none;
            }
          }
        }

        .personalInformation {
          div {
            display: flex;

            p {
              font-style: italic;
              font-size: 0.75rem;
              line-height: 0.9375rem;

              &:first-child {
                width: 30%;
              }
            }
          }
        }

        .skillset {
          div {
            display: flex;

            p {
              font-style: italic;
              font-size: 0.875rem;
              line-height: 1.0625rem;

              &:first-child {
                width: 15%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .resultBody {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`;
