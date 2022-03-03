import styled from "styled-components";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function CovidPage() {
  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Covid Stuff</h1>

        <form>
          <div className="radiosWrapper">
            <p>How would you prefer to work?</p>
            <label htmlFor="Office">
              <input id="Office" type="radio" name="workingEnvironment" />
              From Sairme Office
            </label>
            <label htmlFor="Home">
              <input id="Home" type="radio" name="workingEnvironment" />
              From Home
            </label>
            <label htmlFor="Hybrid">
              <input id="Hybrid" type="radio" name="workingEnvironment" />
              Hybrid
            </label>
          </div>

          <div className="radiosWrapper">
            <p>Did you contact covid 19? :(</p>
            <label htmlFor="contacted">
              <input id="contacted" type="radio" name="covidContact" />
              Yes
            </label>
            <label htmlFor="noContacted">
              <input id="noContacted" type="radio" name="covidContact" />
              No
            </label>
          </div>

          <div>
            <p>When?</p>
            <input className="input" type="date" placeholder="Date" />
          </div>

          <div className="radiosWrapper">
            <p>Have you been vaccinated?</p>
            <label htmlFor="vaccined">
              <input id="vaccined" type="radio" name="vaccined" />
              Yes
            </label>
            <label htmlFor="notVaccined">
              <input id="notVaccined" type="radio" name="vaccined" />
              No
            </label>
          </div>

          <div>
            <p>When did you get your last covid vaccine?</p>
            <input className="input" type="date" placeholder="Date" />
          </div>
        </form>

        <DotsOfPages />
      </div>
      <div className="darkSide">
        <DarkComponent title="Redberry Covid Policies">
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {">"} Zoom meetings. Both on the fun and
          productivity scales.
        </DarkComponent>
      </div>
    </Container>
  );
}

export default CovidPage;

const Container = styled.div`
  display: flex;

  .lightSide {
    .title {
      margin-bottom: 65px;
    }

    form {
      margin-bottom: 140px;

      .radiosWrapper {
        margin-bottom: 50px;

        p {
          width: 645px;
        }
      }
    }
  }
`;
