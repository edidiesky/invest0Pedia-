import React from "react";
import { Banner1, Meta } from "../components/common";
import Options from "../components/contact/Options";

export default function Home() {
  return (
    <>
    <Meta title={'Contact Us'}/>
    <div className="w-100 back-red">
      <Options />
      <Banner1 type='contact' />
    </div>
    </>
  );
}
