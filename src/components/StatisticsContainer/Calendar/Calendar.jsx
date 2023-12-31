import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
// import { useDispatch } from "react-redux";
import css from "./Calendar.module.css";

// import { fetchTransactionsSummary } from "../../../redux/transactions/transactionThunk";

const Calendar = ({ setMonthAmount, setYearAmount }) => {
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(true);
  const [monthTime, setMonthTime] = useState(null);
  const [yearTime, setYearTime] = useState(null);

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (monthTime && yearTime) {
  //     //   dispatch(fetchTransactionsSummary({ year: yearTime, month: monthTime }));
  //       setOpenCalendar(false);
  //     }
  //   }, [dispatch, yearTime, monthTime]);

  const toggleMonth = () => {
    setMonth(!month);
    setYear(false);
  };

  const toggleYear = () => {
    setYear(!year);
    setMonth(false);
  };

  const onMonthChange = (e) => {
    let chosenOne = e._d.getMonth() + 1;
    if (chosenOne < 10) {
      chosenOne = "0" + chosenOne;
    }
    setMonthAmount(chosenOne.toString());
    setMonthTime(chosenOne.toString());
    setOpenCalendar(false);
    setTimeout(() => {
      setMonth(false);
    }, 500);
  };

  const onYearChange = (e) => {
    const chosenOne = e._d.getFullYear().toString();
    setYearAmount(chosenOne);
    setYearTime(chosenOne.toString());
    setOpenCalendar(false);
    setTimeout(() => {
      setYear(false);
    }, 500);
  };

  const isValidData = (data) => {
    const currentDate = new Date();
    return currentDate > data._d;
  };

  const toggleCalendar = (e) => {
    const classTable = e.target.getAttribute("class");

    if (classTable === "rdtMonth") {
      setOpenCalendar(false);
    } else if (classTable === "rdtYear") {
      setOpenCalendar(false);
    } else {
      setOpenCalendar(true);
    }
  };

  return (
    <div onClick={toggleCalendar} className={css.calendarBox}>
      <div>
        <div onClick={toggleMonth} className={css.monthBox}>
          <p className={css.calendarText}>{monthTime ? monthTime : "Month"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
          >
            <path d="M1 1L10 10L19 1" stroke="black" />
          </svg>
        </div>
        {month && (
          <Datetime
            open={openCalendar}
            closeOnSelect={true}
            timeFormat={false}
            dateFormat="MM"
            onChange={onMonthChange}
            isValidDate={isValidData}
            className={css.datetime}
            input={false}
          />
        )}
      </div>

      <div>
        <div onClick={toggleYear} className={`${css.monthBox} ${css.yearBox}`}>
          <p className={css.calendarText}>{yearTime ? yearTime : "Year"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
          >
            <path d="M1 1L10 10L19 1" stroke="black" />
          </svg>
        </div>
        {year && (
          <Datetime
            open={openCalendar}
            closeOnSelect={true}
            className={css.datetime}
            dateFormat="YYYY"
            timeFormat={false}
            onChange={onYearChange}
            isValidDate={isValidData}
            input={false}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
