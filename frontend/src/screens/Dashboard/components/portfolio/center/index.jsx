import React from "react";
import styled from "styled-components";
import Center2 from "./Center2";
import Center1 from "./Center1";

export default function CenterIndex() {
  return (
    <CenterIndexContainer className="flex column gap-2 pt-4">
      <Center1 />
      <Center2 />
    </CenterIndexContainer>
  );
}

const CenterIndexContainer = styled.div`
 width: 100%;
`;

