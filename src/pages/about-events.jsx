import styled from "styled-components";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function AboutEventsPage() {
  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">What about you?</h1>

        <form>
          <div>
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <label htmlFor="attend">
              <input id="attend" type="radio" name="attendance" /> Yes
            </label>
            <label htmlFor="notAttend">
              <input id="notAttend" type="radio" name="attendance" /> No
            </label>
          </div>

          <div>
            <p>What would you speak about at Devtalk?</p>
            <textarea placeholder="I would..." cols="30" rows="10" />
          </div>

          <div>
            <p>Tell us something special</p>
            <textarea id="specialArea" placeholder="I..." cols="30" rows="10" />
          </div>
        </form>

        <DotsOfPages />
      </div>
      <div className="darkSide">
        <DarkComponent title="Redberrian Insights">
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </DarkComponent>
      </div>
    </Container>
  );
}

export default AboutEventsPage;

const Container = styled.div`
  display: flex;

  .lightSide {
    .title {
      margin-bottom: 127px;
    }
    form {
      margin-bottom: 85px;

      div {
        margin-bottom: 35px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          width: 645px;
          margin: 0 0 24px;

          font-family: Montserrat;
          font-size: 18px;
          line-height: 22px;
        }

        label {
          margin-left: 10px;

          &:not(:last-child) {
            margin-bottom: 16px;
          }

          input {
          }
        }

        textarea {
          width: 100%;
          height: 122px;
          padding: 20px 24px;
          resize: none;

          font-family: Montserrat;
          font-size: 13px;
          line-height: 16px;
        }
        #specialArea {
          height: 90px;
        }
      }
    }
  }
`;
