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
    <Container className="page">
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
  background-image: var(--primaryBg);

  flex-direction: column;
  justify-content: center;
  align-items: center;

  .redberryBtn {
    width: 24.5rem;
    height: 5rem;
    margin-bottom: 2.1875rem;
  }

  .toBack {
    width: 12rem;
    height: 48px;
    text-align: center;

    color: #fff;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 1.75rem;
    line-height: 32px;
  }

  @media (max-width: 800px) {
    .redberryBtn {
      font-size: 16px;
      width: 245px;
      height: 50px;
      margin-bottom: 20px;
    }
    .toBack {
      font-size: 16px;
    }
  }
  @media (max-width: 550px) {
    .redberryBtn {
      font-size: 14px;
      width: 200px;
      height: 40px;
      margin-bottom: 15px;
    }
    .toBack {
      font-size: 14px;
    }
  }
`;
