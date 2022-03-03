/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";

function ApplicationsPage() {
  return (
    <Container>
      <h1 className="applicationsTitle">Submitted Applications</h1>

      <div id="resultsWrapper">
        <div className="applicationResult">
          <div className="resultHead">
            <div>1</div>
            <div>
              <img src="/images/whiteVector.svg" alt="arrow" />
            </div>
          </div>

          <div className="resultBody">
            <div className="answersComponent personalInformation">
              <h3>Personal Information</h3>
              <div>
                <p>First Name</p>
                <p>Eren</p>
              </div>
              <div>
                <p>Last Name</p>
                <p>Yeager</p>
              </div>
              <div>
                <p>E Mail</p>
                <p>eren@wings-of-freedom.ml</p>
              </div>
              <div>
                <p>Phone</p>
                <p>+995 591 93 50 80</p>
              </div>
            </div>

            <div className="answersComponent skillset">
              <h3>Skillset</h3>
              <div>
                <p>PHP</p>
                <p>Years of Experience: 3</p>
              </div>
              <div>
                <p>React.JS</p>
                <p>Years of Experience: 9</p>
              </div>
            </div>

            <div className="answersComponent covidSituation">
              <h3>Covid Situation</h3>

              {/* <div> */}
              <div className="radiosWrapper">
                <p>how would you prefer to work?</p>
                <label>
                  <input type="radio" name="choosenWorkPlace" checked /> From
                  Sairme Office
                </label>
                <label>
                  <input type="radio" name="choosenWorkPlace" checked={false} />{" "}
                  From Home
                </label>
                <label>
                  <input type="radio" name="choosenWorkPlace" checked={false} />
                  Hybrid
                </label>
              </div>

              <div className="radiosWrapper">
                <p>Did you have covid 19?</p>

                <label>
                  <input type="radio" name="choosenCovid19" checked /> Yes
                </label>
                <label>
                  <input type="radio" name="choosenCovid19" checked={false} />{" "}
                  No
                </label>
              </div>

              <div>
                <p>When did you have covid 19?</p>

                <input className="input" type="date" />
              </div>

              <div className="radiosWrapper">
                <p>Have you been vaccinated?</p>

                <label>
                  <input type="radio" name="choosenVaccined" checked /> Yes
                </label>
                <label>
                  <input type="radio" name="choosenVaccined" checked={false} />{" "}
                  No
                </label>
              </div>

              <div>
                <p>When did you get covid vaccine?</p>

                <input className="input" type="date" />
              </div>
              {/* </div> */}
            </div>

            <div className="answersComponent insights">
              <h3>Insigts</h3>

              {/* <div> */}
              <div className="radiosWrapper">
                <p>
                  Would you attend Devtalks and maybe also organize your own?
                </p>
                <label>
                  <input type="radio" name="choosenAttendance" checked /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="choosenAttendance"
                    checked={false}
                  />{" "}
                  No
                </label>
              </div>

              <div>
                <p>What would you speak about at Devtalk?</p>
                <textarea value="I can deBUG anything!" cols="30" rows="10" />
              </div>

              <div>
                <p>Tell us somthing special</p>
                <textarea value="I can deBUG anything!" cols="30" rows="10" />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ApplicationsPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: var(--primaryBg);
  padding: 0 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .applicationsTitle {
    margin: 95px 0 55px;

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
