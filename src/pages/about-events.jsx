import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ADD_EVENT } from "../redux/actions";

import DarkComponent from "../components/dark-side";
import DotsOfPages from "../components/page-dots";

function AboutEventsPage() {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [attendance, setAttendance] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    dispatch(ADD_EVENT(data));

    navigate("/submitter");
  };

  return (
    <Container className="page">
      <div className="lightSide">
        <h1 className="title">What about you?</h1>

        <form
          id="events-form"
          onSubmit={handleSubmit(onFormSubmit)}
          ref={formRef}
        >
          <div className="inputErrorWrapper radiosWrapper">
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <label htmlFor="attend">
              <input
                id="attend"
                type="radio"
                value="Yes"
                onClick={() => setAttendance(true)}
                {...register("will_organize_devtalk", { required: true })}
              />{" "}
              Yes
            </label>
            <label htmlFor="notAttend">
              <input
                id="notAttend"
                type="radio"
                value="No"
                onClick={() => setAttendance(false)}
                {...register("will_organize_devtalk", { required: true })}
              />{" "}
              No
            </label>
            {errors?.will_organize_devtalk && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div
            className="inputErrorWrapper"
            style={attendance ? {} : { display: "none" }}
          >
            <p>What would you speak about at Devtalk?</p>
            <textarea
              placeholder="I would..."
              cols="30"
              rows="10"
              {...register("devtalk_topic", { required: attendance })}
            />
            {errors?.devtalk_topic && (
              <span className="inputError">This field is required</span>
            )}
          </div>

          <div className="inputErrorWrapper">
            <p>Tell us something special</p>
            <textarea
              id="specialArea"
              placeholder="I..."
              cols="30"
              rows="10"
              {...register("something_special", { required: true })}
            />
            {errors?.something_special && (
              <span className="inputError">This field is required</span>
            )}
          </div>
        </form>

        <DotsOfPages formRef={formRef} />
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

        p {
          width: 645px;
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
