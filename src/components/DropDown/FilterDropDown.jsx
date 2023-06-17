import React from "react";
import "./filterdrop_Down.css";
import Card from "../Layout/Card/Card";

const FilterDropDown = ({
  first,
  second,
  setFirst,
  setSecond,
  handleCheckbox,
}) => {
  const handleCheckbox_clear = () => {
    setFirst(false);
    setSecond(false);
  };
  return (
    <>
      <div className="filterdrop_Down">
        <h1>Filters</h1>
        <hr />
        <h2>Type</h2>
        <div className="drop_down_types">
          <div className="drop_down_types_data">
            <input
              value={first}
              onChange={() => handleCheckbox("first")}
              type="checkbox"
            />
            <label htmlFor="sub">subscription</label>
          </div>
          <div className="drop_down_types_data">
            <input
              value={second}
              onChange={() => handleCheckbox("second")}
              type="checkbox"
            />
            <label htmlFor="sub">Burner</label>
          </div>
        </div>
        <hr />

        <h1>CardHolder</h1>
        <div className="drop_down_select_card">
          <select name="option" id="">
            <option value="">option</option>
            <option value="">subscription</option>
            <option value="">burner</option>
          </select>
        </div>

        <div className="drop_down_btns">
          <button className="drop_down_btn1">Apply</button>
          <button
            className="drop_down_btn2 "
            onClick={() => handleCheckbox_clear()}
          >
            Clear
          </button>
        </div>
      </div>
      {first && <Card />}
    </>
  );
};

export default FilterDropDown;
