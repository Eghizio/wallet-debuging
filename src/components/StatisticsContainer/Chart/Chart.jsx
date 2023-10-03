import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DataDoughnut = () => {
  const balance = useSelector((state) => state.transactions.balance);
  console.log(balance);

  const optionsChart = { plugins: { tooltip: true } };
  const [options] = useState(optionsChart);

  let transactionsSummary = 0;
  console.log(transactionsSummary);

  let statisticsList = useSelector((state) => state.transactions.summary);
  console.log(statisticsList);

  // WYCIĄGA NAZWY Z BACKENDU
  const colors = statisticsList?.map((color) => color.color);

  // WYCIĄGA WARTOŚCI LICZBOWE Z BACKENDU
  const values = statisticsList?.map((total) => total.value);

  const labels = statisticsList?.map((label) => label.category);
  // console.log(labels)

  // const getTitleColor = (title) => {
  //   const item = statisticsList.find((item) => item.title === title);
  //   return item ? item.color : "red";
  // };

  const ds = statisticsList.map(({ category, color, sum }) => ({
    label: category,
    data: [sum],
    backgroundColor: [color]
  }));

  const chartData = {
    labels: labels,
    datasets: ds,
  }

  const set = {
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
        cutout: 90,
        hoverBorderWidth: 5,
        label: labels,
      },
    ],
  };

  console.log({ set })

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

  const data = transactionsSummary?.length === 0 ? newData : chartData;
  console.log({ data });

  return (
    <div className={css.doughnut}>
      <Doughnut
        data={data}
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
