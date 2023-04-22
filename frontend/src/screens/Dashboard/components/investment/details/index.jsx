import React from "react";
import Circular from "./Circular";
import { useSelector } from "react-redux";
import Details from "./Details";
import Statistics from "./Statistics";

export default function Detailsindex() {
  const {
    coindetails
  } = useSelector((store) => store.coincart);
  return (
    <>
    {coindetails && (
      <div className="py-3 shadow px-2 back-white w-100 flex column gap-2 item-start radius-1">
      <h3 className="text-dark uppercase">Investment Details</h3>
      <Details />
      <div className="w-100 flex column item-start gap-2">
        <h5 className="text-grey fs-14 text-light">Start Date</h5>
        <div className="grid-2 grid-gap2">
          <Circular />
          <Statistics />
        </div>
      </div>
    </div>
    )}
    
    </>
  );
}
