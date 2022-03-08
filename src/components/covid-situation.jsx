import React from "react";

function CovidSituation({ data }) {
  return (
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
          <input type="radio" checked={data.had_covid} readOnly /> Yes
        </label>
        <label>
          <input type="radio" checked={!data.had_covid} readOnly /> No
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
          <input type="radio" checked={data.vaccinated} readOnly /> Yes
        </label>
        <label>
          <input type="radio" checked={!data.vaccinated} readOnly /> No
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
  );
}

export default CovidSituation;
