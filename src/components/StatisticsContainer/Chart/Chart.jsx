import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";
import { useState } from "react";
// import { useSelector } from "react-redux";

// ChartJS.register(ArcElement, Tooltip, Legend);
// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

ChartJS.register(ArcElement, Tooltip, Legend);

const DataDoughnut = () => {
  const balance = 0;

  const optionsChart = { plugins: { tooltip: true } };
  const [options] = useState(optionsChart);
  let transactionsSummary = 0;
  console.log(transactionsSummary);

  // const totals = [];
  // transactionsSummary?.forEach((item) => {
  //   totals.push(item.total);
  // });

  const names = [];
  // transactionsSummary?.forEach((item) => {
  //   names.push(item.name);
  // });

  const statisticsList = [
    { title: "Income", value: 8700, color: "#24CCA7" },
    { title: "default transaction", value: 8700, color: "#808080" },
    { title: "Main expenses", value: 8700, color: "#FED057" },
    { title: "Products", value: 3800, color: "#FFD8D0" },
    { title: "Car", value: 1500, color: "#FD9498" },
    { title: "Self care", value: 800, color: "#C5BAFF" },
    { title: "Child care", value: 2200, color: "#6E78E8" },
    { title: "Household products", value: 300, color: "#4A56E2" },
    { title: "Education", value: 3400, color: "#81E1FF" },
    { title: "Leisure", value: 123, color: "#8A2BE2" },
    { title: "Other expenses", value: 610, color: "#00AD84" },
    {
      _id: "6471096a9af3d469961187ef",
      title: "Entertainment",
      type: "EXPENSE",
      color: "#9AFA41",
    },
  ];

  const getTitleColor = (title) => {
    const item = statisticsList.find((item) => item.title === title);
    return item ? item.color : "red";
  };

  const colors = [];
  names.forEach((item) => {
    const color = getTitleColor(item);
    colors.push(color);
  });

  const set = {
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#24CCA7",
          "#808080",
          "#FED057",
          "#FFD8D0",
          "#FD9498",
          "#C5BAFF",
        ],
        borderWidth: 0,
        cutout: 90,
        hoverBorderWidth: 5,
      },
    ],
  };

  const newData = {
    datasets: [
      {
        label: "You have no expenses in the current period",
        data: [0.01],
        backgroundColor: ["#C5BAFF"],
        borderColor: ["#C5BAFF"],
        cutout: 90,
        hoverBorderWidth: 5,
        labelTextColors: "#00AD84",
      },
    ],
    labelTextColors: "#00AD84",
  };

  return (
    <div className={css.doughnut}>
      <Doughnut
        data={transactionsSummary?.length === 0 ? newData : set}
        options={options}
      />
      <p className={css.doughnutSumExpenses}>
        €{" "}
        {balance.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
};

export default DataDoughnut;
