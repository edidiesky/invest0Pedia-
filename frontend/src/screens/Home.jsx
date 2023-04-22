import React from "react";
import { Banner1, Meta } from "../components/common";
import styled from "styled-components";
import Options from "../components/home/Options";

export default function Home() {
  return (
    <>
      <Meta title={"Home"} />
      <div className="w-100 back-red">
        <Options />
        <Banner1 />
      </div>
    </>
  );
}
