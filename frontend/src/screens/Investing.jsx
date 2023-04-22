import React from "react";
import { Banner1, Meta } from "../components/common";
import Options from "../components/investing/Options";

export default function Home() {
  return (
    <>
    <Meta title={'Investment'}/>
      <div className="w-100 back-red">
        <Options />
        <Banner1 type={'investing'}/>
      </div>
    </>
  );
}
