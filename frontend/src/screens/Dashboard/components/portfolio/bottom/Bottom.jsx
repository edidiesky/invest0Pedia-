import React from "react";
import styled from "styled-components";
import { Table } from "../../../pages/styles";
import TableCards from "../../TableCard";

const account = [
  { id: 1, title: "Bitcoin", amount: 5553, status: "completed" },
  { id: 1, title: "Ethereum", amount: 553, status: "failed" },
  { id: 1, title: "Ripple", amount: 5553, status: "completed" },
  { id: 1, title: "Litecoin", amount: 153, status: "pending" },
];
export default function Bottom2() {
  return (
    <Bottom2Container className="back-white shadow radius-1 px-3 py-3 flex column gap-2 item-start">
      <h3 className="uppercase text-extra-bold">
        Account Activity{" "}
        <span className="fs-12 capitalize block text-light text-grey">
          Lorem ipsum dolor sit amet, consectetur
        </span>
      </h3>
      <div className="flex item-center gap-1 w-100">
        <button className="btn fs-14 py-1 px-2">Weekly</button>
        <button className="btn fs-14 py-1 px-2">Monthly</button>
        <button className="btn fs-14 py-1 px-2">Today</button>
      </div>
      {/* table section */}
    </Bottom2Container>
  );
}

const Bottom2Container = styled.div``;
