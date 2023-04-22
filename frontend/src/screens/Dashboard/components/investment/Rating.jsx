import React, { useState } from "react";
import Chart from "react-apexcharts";


export default function DataTable() {
  const [transactiondata, setTransactionData] = useState({
    series: [
      {
        name: "Net Profit",
        data: [20, 33, 40, 58, 80, 58, 63, 60, 66],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 400,
        fontFamily: "Montserrat",
        foreColor: "#081b36",
        fontSize: "20px",
      },
      colors: ['#363062'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  
  return (
    <div className="back-white shadow radius-2 w-100 py-2 px-2 flex column gap-2 item-start">
      <h4 className="fs-26 text-bold">Investment Yield Rating
      <span className="block fs-14 text-light">Lorem ipsum dolor sit amet, consectetur</span>
      </h4>
      <div className='w-100'>
      <Chart
        options={transactiondata?.options}
        series={transactiondata?.series}
        type="bar"
        height={500}
      />
      </div>
      
    </div>
  );
}
