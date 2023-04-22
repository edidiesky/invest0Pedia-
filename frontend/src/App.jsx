import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Register, Login, ProtectRoute, Error, Home, Contact, AboutUs, Investing, Reserve } from "./screens";

import {
  LayoutList,
  Investment,
  Deposit,
  Transaction,
  Portfolio,
  Customers,
  Market,
  ManageInvest, 
  ManageTransaction,
  Statistics,
  InvestmentList,
  CreatePlan,
  ManageWallet,
  AdminEditProfile,
  EditUser
} from "./screens/Dashboard/pages";

export default function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);
  return (
    <div className="layout" style={{ height }}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/page-login" element={<Login />} />
        <Route path="/page-register" element={<Register />} />
        <Route exact path={"/"} element={<Layout />}>
           <Route path="" element={<Home />} />
           <Route path="contact" element={<Contact />} />
           <Route path="reserve" element={<Reserve />} />
           <Route path="investing" element={<Investing />} />
           <Route path="about-us" element={<AboutUs />} />
        </Route>
       
       
        <Route
          exact
          path={"/dashboard"}
          element={
            <ProtectRoute>
              <LayoutList />
            </ProtectRoute>
          }
        >
          <Route path="" element={<Portfolio />} />
          <Route path="investments" element={<Investment />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="transactions/:id" element={<ManageTransaction />} />
          <Route path="clients" element={<Customers />} />
          <Route path="market" element={<Market />} />
          <Route path="investment-list" element={<InvestmentList />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="create-plan" element={<CreatePlan />} />
          <Route path="manage-wallet" element={<ManageWallet />} />
          <Route path="clients/:id" element={<AdminEditProfile />} />
          <Route path="profile" element={<EditUser />} />
          <Route path="investment-list/:id" element={<ManageInvest />} />
        </Route>
      </Routes>
    </div>
  );
}
