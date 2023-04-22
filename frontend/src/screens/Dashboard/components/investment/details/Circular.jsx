import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import "./circularBar.css";

export default function Circular() {
  const {
    coindetails
  } = useSelector((store) => store.coincart);

  let rate = coindetails?.rate

  let taxpercentage =((coindetails?.tax / 300) * 100)
  taxpercentage = parseFloat(taxpercentage.toFixed(2))

  return (
    <div className="grid-3 gap-2 item-center w-100">
      <div className="flex column item-start gap-2 w-100">
        <div className="circular-bar-container">
          <CircularProgressbar
            className="circular-bar"
            value={rate}
            text={`${rate}%`}
            styles={{
              path: {
                stroke: "#297f00",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "#f4f4f4",
                strokeLinecap: "round",
              },
              text: {
                fill: "#333",
                fontSize: "1.4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
            }}
          />
        </div>
        <h4 className="fs-20 text-bold">
          Investment Profit
          <span className="block fs-16 text-light text-grey">${coindetails?.profit}</span>
        </h4>
      </div>
      <div className="flex column item-start gap-2 w-100">
        <div className="circular-bar-container">
          <CircularProgressbar
            className="circular-bar"
            value={rate}
            text={`${rate}%`}
            styles={{
              path: {
                stroke: "#ffab2d",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "#f4f4f4",
                strokeLinecap: "round",
              },
              text: {
                fill: "#333",
                fontSize: "1.4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
            }}
          />
        </div>
        <h4 className="fs-20 text-bold">
          Yield Burn
          <span className="block fs-16 text-light text-grey">${coindetails?.yieldburn}</span>
        </h4>
      </div>
      <div className="flex column item-start gap-2 w-100">
        <div className="circular-bar-container">
          <CircularProgressbar
            className="circular-bar"
            value={taxpercentage}
            text={`${taxpercentage}%`}
            styles={{
              path: {
                stroke: "#3a82ef",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "#f4f4f4",
                strokeLinecap: "round",
              },
              text: {
                fill: "#333",
                fontSize: "1.4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
            }}
          />
        </div>
        <h4 className="fs-20 text-bold">
          Tax
          <span className="block fs-16 text-light text-grey">${coindetails?.tax}</span>
        </h4>
      </div>
    </div>
  );
}
