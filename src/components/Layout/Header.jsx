import React, { useState } from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { BiFilter } from "react-icons/bi";
import data from "../json/data";
import Card from "./Card/Card";

const Header = () => {
  const [your, setYour] = useState("gray");
  const [all, setSet] = useState("gray");
  const [blacked, setBlocked] = useState("gray");
  const [items, setItems] = useState(data);
  const [open, setOpen] = useState(false);
  const [serchAPIData, setSearchAPIData] = useState(items);

  const setColor1 = () => {
    setYour("black");
    setSet("gray");
    setBlocked("gray");
  };
  const setColor2 = () => {
    setSet("black");
    setYour("gray");
    setBlocked("gray");
  };
  const setColor3 = () => {
    setBlocked("black");
    setYour("gray");
    setSet("gray");
  };

  const handleFiler = () => {
    setOpen(!open);
  };
  const filterData = (itemStatus) => {
    const updateData = items.filter((currElem) => {
      return currElem.status === itemStatus;
    });
    setItems(updateData);
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setItems(serchAPIData);
    } else {
      const filterResult = serchAPIData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItems(filterResult);
    }
  };

  return (
    <>
      {/* Tabs  */}
      <div className="main_header">
        <nav className="header">
          <li
            style={{ color: your }}
            onClick={() => {
              setColor1();
              filterData("active");
            }}
            to="/your"
          >
            Your
          </li>
          <li
            style={{ color: all }}
            onClick={() => {
              setColor2();
              setItems(data);
            }}
            to={"/all"}
          >
            All
          </li>
          <li
            style={{ color: blacked }}
            onClick={() => {
              setColor3();
              filterData("block");
            }}
            to={"/blocked"}
          >
            Blocked
          </li>
        </nav>
        <div className="h_line" />
      </div>

      {/* Right items  */}
      <div className="header_right">
        <div className="header_right_filter">
          <button onClick={() => handleFiler()}>
            <BiFilter />
            Filter
          </button>
        </div>
      </div>

      <div className="header_input">
        <input
          type="text"
          placeholder="search..."
          onInput={(e) => handleFilter(e)}
        />
        <CiSearch size={22} color="gray" />
      </div>
      {/* card  */}
      <div className="card_box">
        {items.map((item, i) => {
          return (
            <Card
              key={i}
              open={open}
              setOpen={setOpen}
              icon={item.icon}
              type={item.type}
              name={item.name}
              budget_name={item.budget_name}
              amount={item.amount}
              freq={item.freq}
              expiry={item.expiry}
              spent1={item.spent.currency}
              spent2={item.spent.value}
              balanceVal={item.available_to_spend.value}
              balanceCurr={item.available_to_spend.currency}
              cardType={item.card_type}
              limit={item.limit}
              status={item.status}
            />
          );
        })}
      </div>
    </>
  );
};

export default Header;
