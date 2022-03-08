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
                      ? {}
                      : { transform: "rotate(180deg)" }
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
                    <p>First Name</p>
                    <p>{data.first_name}</p>
                  </div>
                  <div>
                    <p>Last Name</p>
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
  padding: 15px 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .applicationsTitle {
    margin: 80px 0 55px;

    color: #fff;
    font-family: Rowdies;
    font-weight: bold;
    font-size: 56px;
    line-height: 70px;
  }

  #resultsWrapper {
    width: 100%;

    .applicationResult {
      margin-bottom: 20px;

      .resultHead {
        width: 100%;
        height: 52px;
        padding: 0 30px;
        background-color: var(--redberryRed);
        border: none;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #fff;
        font-size: 14px;
        line-height: 17px;
      }

      .resultBody {
        width: 100%;
        padding: 0 13%;
        background: #fff;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .answersComponent {
          margin: 10px 20px;

          h3 {
            color: var(--redberryRed);
            font-style: italic;
            font-size: 18px;
            line-height: 22px;
            text-decoration: underline;
          }

          div {
            margin-bottom: 40px;

            textarea {
              width: 447px;
              height: 122px;
              padding: 20px 24px;
              resize: none;
            }
          }
        }

        .personalInformation {
          div {
            display: flex;

            p {
              font-style: italic;
              font-size: 12px;
              line-height: 15px;

              &:first-child {
                width: 102px;
              }
            }
          }
        }

        .skillset {
          div {
            display: flex;

            p {
              font-style: italic;
              font-size: 14px;
              line-height: 17px;

              &:first-child {
                width: 80px;
              }
            }
          }
        }
      }
    }
  }
`;
