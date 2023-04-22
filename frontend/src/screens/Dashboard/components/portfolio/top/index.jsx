import React from "react";
import styled from "styled-components";
import TopLeftIndex from "./Left";
import TopRight from "./Right";

export default function TopIndex() {
  return (
    <TopIndexContainer className="grid-1 pt-3">
      <TopRight />
    </TopIndexContainer>
  );
}

const TopIndexContainer = styled.div`
  width: 100%;
  &.grid-1 {
    width: 100%;
  }
`;
