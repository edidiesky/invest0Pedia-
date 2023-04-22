import React from "react";
import styled from "styled-components";
import Bottom1 from "./Bottom1";

export default function BottomIndex() {
  return (
    <BottomIndexContainer className="flex column gap-2 pt-4">
      <Bottom1 />
    </BottomIndexContainer>
  );
}

const BottomIndexContainer = styled.div`
 width: 100%;
`;

