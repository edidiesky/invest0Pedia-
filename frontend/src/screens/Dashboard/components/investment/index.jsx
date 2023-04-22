import React from "react";
import Bottom2 from "../portfolio/bottom/Bottom";
import Detailsindex from "./details";
import { useSelector } from "react-redux";
import Rating from "./Rating";
import Widget from "./Widget";
import Message from "../../../../components/loaders/Message";
export default function Investmentindex() {
  const { coindetails, coincart } = useSelector((store) => store.coincart);
  return (
    <div className="w-100 flex column gap-2">
      {coincart?.length === 0 && <Message alertText={'You have no investment'} alertType={'success'}/>}
      <Widget />
      {coindetails && (
        <>
          <Detailsindex />
          <div className="w-100 grid-2">
            <Rating />
          </div>
        </>
      )}
    </div>
  );
}
