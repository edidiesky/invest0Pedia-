import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {Banner1, Footer, SmallSidebar} from '../components/common'

export default function Layout() {
  return (
    <LayoutContainer>
      <SmallSidebar/>
      <Outlet />
      <Footer/>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;
