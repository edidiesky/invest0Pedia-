import React from "react";
import styled from "styled-components";

export default function TopLeftIndex() {
  return <TopLeftIndexContainer className="back-white shadow radius-1 w-100 px-2 py-2 flex column gap-2 item-start">
    <h3 className="uppercase text-extra-bold">Profile</h3>
    <div className="flex column gap-2 item-start justify-center w-100">
      <img src='images/profile/11.jpg' alt="" className="img-fluid radius-1 item-center" />
      <div className="flex item-center gap-2 justify-center pt-2">

      </div>
    </div>
  </TopLeftIndexContainer>;
}

const TopLeftIndexContainer = styled.div`
`;
