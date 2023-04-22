import React, { useState } from "react";
import ReactApexChart from 'apexcharts'
export default function Chart() {
  const [chartdata, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="w-100">
      <div id="chart">
        <ReactApexChart
          options={chartdata.options}
          series={chartdata.series}
          type="donut"
        />
      </div>
    </div>
  );
}
