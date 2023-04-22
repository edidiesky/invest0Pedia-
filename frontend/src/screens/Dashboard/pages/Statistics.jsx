import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Widget, Visuals, Chart, Alert } from "../components";
import Products from "./Products";

const StatisticsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .chartWrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    place-items: start;
  }
`;

export default function Statistics() {
  // get all Order statistics and product statistics
  const dispatch = useDispatch();

  return (
    <>
      <Alert />
      <StatisticsWrapper>
        <Widget />
        <div className="chartWrapper">
          <Chart title="Analytics" />
          <Visuals />
        </div>
      </StatisticsWrapper>
    </>
  );
}
