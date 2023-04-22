import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Chart } from "../../components";

const StatisticsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .chartWrapper {
    width: 100%;
  }
`;

export default function Statistics() {
  // get all Order statistics and product statistics
  const dispatch = useDispatch();

  return (
    <>
      <StatisticsWrapper>
        <div className="chartWrapper">
          <Chart title="Analytics" />
        </div>
      </StatisticsWrapper>
    </>
  );
}
