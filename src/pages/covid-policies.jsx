import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ADD_COVID } from "../redux/actions";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function CovidPage() {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [covidContacted, setCovidContacted] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
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
                value="From Sairme Office"
                {...register("work_preference", { required: true })}
              />
              From Sairme Office
            </label>

            <label htmlFor="Home">
              <input
                id="Home"
                type="radio"
                value="From Home"
                {...register("work_preference", { required: true })}
              />
              From Home
            </label>

            <label htmlFor="Hybrid">
              <input
                id="Hybrid"
                type="radio"
                value="Hybrid"
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
                value="Yes"
                onClick={() => setCovidContacted(true)}
                {...register("had_covid", { required: true })}
              />
              Yes
            </label>

            <label htmlFor="noContacted">
              <input
                id="noContacted"
                type="radio"
                value="No"
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
              className="input"
              type="date"
              placeholder="Date"
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
                value="Yes"
                onClick={() => setVaccinated(true)}
                {...register("vaccinated", { required: true })}
              />
              Yes
            </label>

            <label htmlFor="notVaccined">
              <input
                id="notVaccined"
                type="radio"
                value="No"
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
              className="input"
              type="date"
              placeholder="Date"
              {...register("vaccinated_at", { required: vaccinated })}
            />
            {errors?.vaccinated_at && (
              <span className="inputError">This field is required</span>
            )}
          </div>
        </form>

        <DotsOfPages formRef={formRef} />
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

      div {
        margin-bottom: 50px;
      }
      .inputErrorWrapper {
        p {
          margin-top: 0;
        }
      }
      .radiosWrapper {
        p {
          width: 645px;
        }
      }
    }
  }
`;
