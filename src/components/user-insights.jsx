import React from "react";

function UserInsights({ data }) {
  return (
    <div className="answersComponent insights">
      <h3>Insigts</h3>

      <div className="radiosWrapper">
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <label>
          <input type="radio" checked={data.will_organize_devtalk} readOnly />{" "}
          Yes
        </label>
        <label>
          <input type="radio" checked={!data.will_organize_devtalk} readOnly />{" "}
          No
        </label>
      </div>

      <div>
        <p>What would you speak about at Devtalk?</p>
        <textarea cols="30" rows="10" value={data.devtalk_topic} readOnly />
      </div>

      <div>
        <p>Tell us somthing special</p>
        <textarea cols="30" rows="10" value={data.something_special} readOnly />
      </div>
    </div>
  );
}

export default UserInsights;
