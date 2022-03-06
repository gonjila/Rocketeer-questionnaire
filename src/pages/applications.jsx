/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function ApplicationsPage() {
  const [apiData, setApiData] = useState([]);
  const [openedDetails, setOpenedDetails] = useState(null);

  // fdaba86a-543c-4caa-a94c-9714eebc4d1e
  useEffect(() => {
    axios
      .get(
        `https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as`,
        { headers: { accept: "application/json" } }
      )
      .then(result => setApiData(result.data));
  }, []);

  const changeOpenedDetails = number => {
    setOpenedDetails(prev => (prev === number ? null : number));
  };

  return (
    <Container>
      <h1 className="applicationsTitle">Submitted Applications</h1>

      <div id="resultsWrapper">
        {apiData &&
          apiData.slice(0, 10).map((data, index) => (
            <div className="applicationResult" key={Math.random()}>
              <div
                className="resultHead"
                onClick={() => changeOpenedDetails(index)}
              >
                <div>{index}</div>
                <div>
                  <img src="/images/whiteVector.svg" alt="arrow" />
                </div>
              </div>

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
                  {/* TODO სკილების სახელი გამოვაჩინო */}
                  {data.skills.map(skill => (
                    <div key={skill.id}>
                      <p>{skill.id}</p>
                      <p>Years of Experience: {skill.experience}</p>
                    </div>
                  ))}
                </div>

                <div className="answersComponent covidSituation">
                  <h3>Covid Situation</h3>

                  <div className="radiosWrapper">
                    <p>how would you prefer to work?</p>
                    <label>
                      <input
                        type="radio"
                        checked={data.work_preference === "from_office"}
                        readOnly
                      />{" "}
                      From Sairme Office
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={data.work_preference === "from_home"}
                        readOnly
                      />{" "}
                      From Home
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={data.work_preference === "hybrid"}
                        readOnly
                      />
                      Hybrid
                    </label>
                  </div>

                  <div className="radiosWrapper">
                    <p>Did you have covid 19?</p>

                    <label>
                      <input type="radio" checked={data.had_covid} readOnly />{" "}
                      Yes
                    </label>
                    <label>
                      <input type="radio" checked={!data.had_covid} readOnly />{" "}
                      No
                    </label>
                  </div>

                  <div>
                    <p>When did you have covid 19?</p>

                    <input
                      className="input"
                      type="date"
                      value={data.had_covid_at}
                      readOnly
                    />
                  </div>

                  <div className="radiosWrapper">
                    <p>Have you been vaccinated?</p>

                    <label>
                      <input type="radio" checked={data.vaccinated} readOnly />{" "}
                      Yes
                    </label>
                    <label>
                      <input type="radio" checked={!data.vaccinated} readOnly />{" "}
                      No
                    </label>
                  </div>

                  <div>
                    <p>When did you get covid vaccine?</p>

                    <input
                      className="input"
                      type="date"
                      value={data.vaccinated_at}
                      readOnly
                    />
                  </div>
                </div>

                <div className="answersComponent insights">
                  <h3>Insigts</h3>

                  <div className="radiosWrapper">
                    <p>
                      Would you attend Devtalks and maybe also organize your
                      own?
                    </p>
                    <label>
                      <input
                        type="radio"
                        checked={data.will_organize_devtalk}
                        readOnly
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={!data.will_organize_devtalk}
                        readOnly
                      />{" "}
                      No
                    </label>
                  </div>

                  <div>
                    <p>What would you speak about at Devtalk?</p>
                    <textarea
                      cols="30"
                      rows="10"
                      value={data.devtalk_topic}
                      readOnly
                    />
                  </div>

                  <div>
                    <p>Tell us somthing special</p>
                    <textarea
                      cols="30"
                      rows="10"
                      value={data.something_special}
                      readOnly
                    />
                  </div>
                </div>
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
