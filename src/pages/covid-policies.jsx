import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { ADD_COVID } from "../redux/actions";
import { covid } from "../redux/selectors";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function CovidPage() {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const covidSelectors = useSelector(covid);

  const [covidContacted, setCovidContacted] = useState(
    covidSelectors?.had_covid
  );
  const [vaccinated, setVaccinated] = useState(covidSelectors?.vaccinated);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm();

  const onFormSubmit = data => {
    dispatch(ADD_COVID(data));

    navigate("/about-events");
  };

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">Covid Stuff</h1>

        <form
          id="covid-form"
          onSubmit={handleSubmit(onFormSubmit)}
          ref={formRef}
        >
          <div className="inputErrorWrapper radiosWrapper">
            <p>How would you prefer to work?</p>

            <label htmlFor="Office">
              <input
                id="Office"
                type="radio"
                value="from_office"
                defaultChecked={
                  covidSelectors?.work_preference === "from_office"
                }
                {...register("work_preference", { required: true })}
              />
              From Sairme Office
            </label>

            <label htmlFor="Home">
              <input
                id="Home"
                type="radio"
                value="from_home"
                defaultChecked={covidSelectors?.work_preference === "from_home"}
                {...register("work_preference", { required: true })}
              />
              From Home
            </label>

            <label htmlFor="Hybrid">
              <input
                id="Hybrid"
                type="radio"
                value="hybrid"
                defaultChecked={covidSelectors?.work_preference === "hybrid"}
                {...register("work_preference", { required: true })}
              />
              Hybrid
            </label>
            {errors?.work_preference && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div className="inputErrorWrapper radiosWrapper">
            <p>Did you contact covid 19? :(</p>

            <label htmlFor="contacted">
              <input
                id="contacted"
                type="radio"
                defaultChecked={covidSelectors?.had_covid}
                value
                onClick={() => setCovidContacted(true)}
                {...register("had_covid", { required: true })}
              />
              Yes
            </label>

            <label htmlFor="noContacted">
              <input
                id="noContacted"
                type="radio"
                defaultChecked={!covidSelectors?.had_covid}
                value={false}
                onClick={() => setCovidContacted(false)}
                {...register("had_covid", { required: true })}
              />
              No
            </label>
            {errors?.had_covid && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div
            className="inputErrorWrapper"
            style={covidContacted ? {} : { display: "none" }}
          >
            <p>When?</p>

            <input
              className={errors.had_covid_at ? "input invalidInput" : "input"}
              type="date"
              placeholder="Date"
              defaultValue={covidSelectors?.had_covid_at}
              {...register("had_covid_at", { required: covidContacted })}
            />
            {errors?.had_covid_at && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div className="inputErrorWrapper radiosWrapper">
            <p>Have you been vaccinated?</p>

            <label htmlFor="vaccined">
              <input
                id="vaccined"
                type="radio"
                defaultChecked={covidSelectors?.vaccinated}
                value
                onClick={() => setVaccinated(true)}
                {...register("vaccinated", { required: true })}
              />
              Yes
            </label>

            <label htmlFor="notVaccined">
              <input
                id="notVaccined"
                type="radio"
                defaultChecked={!covidSelectors?.vaccinated}
                value={false}
                onClick={() => setVaccinated(false)}
                {...register("vaccinated", { required: true })}
              />
              No
            </label>
            {errors?.vaccinated && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div
            className="inputErrorWrapper"
            style={vaccinated ? {} : { display: "none" }}
          >
            <p>When did you get your last covid vaccine?</p>
            <input
              className={errors.vaccinated_at ? "input invalidInput" : "input"}
              type="date"
              placeholder="Date"
              defaultValue={covidSelectors?.vaccinated_at}
              {...register("vaccinated_at", { required: vaccinated })}
            />
            {errors?.vaccinated_at && (
              <span className="inputError">This field is required</span>
            )}
          </div>
        </form>

        <DotsOfPages formRef={formRef} isValid={isValid} />
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
      margin-bottom: 4rem;
    }

    form {
      margin-bottom: 8.75rem;

      div {
        margin-bottom: 3.125rem;
      }
      .inputErrorWrapper {
        p {
          margin-top: 0;
        }
      }
      .radiosWrapper {
        p {
          width: 40.5rem;
          /* max-width: 95%; */
        }
      }
    }
  }
`;
