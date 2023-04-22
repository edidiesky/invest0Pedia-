import React from "react";
import styled from "styled-components";
import { Routes, Route, Outlet } from "react-router-dom";
import { Header} from "../components";
import Sidebar from "./sidebar/index";
import SmallSidebar from "./sidebar/SmallSidebar";
const LayoutWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .LayoutContainer {
    width: 100%;
    /* display: grid;
    grid-template-columns: auto 1fr; */
    display: flex;
    min-height: calc(100vh - 10rem);
    gap: 2rem;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
    }
    .container {
      padding: 3rem 0;
      width: 90%;
      min-height: 100vh;

      @media (max-width: 1080px) {
        width: 90%;
      }
    }
  }
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <SmallSidebar/>
      <div className="LayoutContainer">
        <Sidebar />
        <div className="container flex column gap-2">
          <Outlet />
          <p className="fs-12 text-center">
            Copyright © Designed & Developed by Invesstock Team 2023
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
}
