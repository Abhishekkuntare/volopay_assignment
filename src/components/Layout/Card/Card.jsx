import React, { useState } from "react";
import "./Card.css";
import { BsFire } from "react-icons/bs";
import { RiSwapLine } from "react-icons/ri";
import FilterDropDown from "../../DropDown/FilterDropDown";

const Card = ({
  open,
  setOpen,
  type,
  name,
  budget_name,
  amount,
  freq,
  expiry,
  spent1,
  spent2,
  balanceVal,
  balanceCurr,
  cardType,
  limit,
  status,
}) => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);

  const handleCheckbox = () => {
    if (type == "burner") {
      setFirst(true);
    }
    if (type == "subscription") {
      setSecond(true);
    }
  };
  return (
    <>
      {open && (
        <FilterDropDown
          open={open}
          first={first}
          setFirst={setFirst}
          setSecond={setSecond}
          second={second}
          handleCheckbox={handleCheckbox}
        />
      )}

      <div className="card_box">
        <div className="card">
          {/* titles */}
          <div className="card_title_box">
            <div className="card_title">
              <h1>{name}</h1>
              <h3>{budget_name}</h3>
            </div>
            <div className="card_title_icons">
              {type == "subscription" ? (
                <RiSwapLine color="green" size={30} />
              ) : (
                <BsFire color="orange" size={30} />
              )}
            </div>
          </div>

          {/* card details */}
          <div className="card_data_box">
            <div className="card_data">
              <h4>Amount</h4>
              <h5>{amount}</h5>
            </div>
            <div className="card_data">
              <h4>Frequency</h4>
              <h5>{freq}</h5>
            </div>
            <div className="card_data">
              {type == "burner" ? (
                <>
                  <h4>Expiry</h4>
                  <h5>{expiry}</h5>
                </>
              ) : (
                <>
                  <h4>Limit</h4>
                  <h5>{limit}</h5>{" "}
                </>
              )}
            </div>
          </div>

          {/* horizontal lines  */}
          <div className="card_h_line">
            <div className="card_h_line1" />
            <div className="card_h_line2" />
          </div>

          <div className="card_balance_data_box">
            <div className="card_balance_data">
              <div className="card_balance_data_circle" />
              <p>Spent</p>
              <span>
                {spent1} {spent2}
              </span>
            </div>
            <div className="card_balance_data">
              <div className="card_balance_data_circle2" />
              <p>Balance</p>
              <span>
                {balanceVal} {balanceCurr}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
