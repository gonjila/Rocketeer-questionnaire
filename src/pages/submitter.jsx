import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { UPLOAD_DATA } from "../redux/actions";

function SubmitterPage() {
  const dispatch = useDispatch();

  const onSubmitClick = () => {
    dispatch(UPLOAD_DATA());
  };

  // TODO თუ რომელიმე გვერდზე სავალდებულო პასუხები არაა შევსებული გადაამისამართოს მანდ.
  return (
    <Container>
      <Link to="/gratitude">
        <button className="redberryBtn" onClick={onSubmitClick}>
          Submit
        </button>
      </Link>
      <Link className="toBack" to="/about-events">
        go back
      </Link>
    </Container>
  );
}

export default SubmitterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: var(--primaryBg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .redberryBtn {
    width: 395px;
    height: 79px;
    margin-bottom: 35px;
  }

  .toBack {
    width: 190px;
    height: 50px;
    text-align: center;

    color: #fff;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
  }
`;
