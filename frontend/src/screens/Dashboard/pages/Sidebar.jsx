import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { BsCollection } from "react-icons/bs";

const SidebarWrapper = styled.div`
  width: 30rem;
  background: #fff;
  height: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1080px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;
    position: sticky;
    padding: 3rem 0;
    left: 0;
    top: 20%;
    height: calc(100vh - 12rem);
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 2rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &.List1 {
        padding-top: 2rem;
        padding-bottom: 0;
        border-top: 1px solid #ccc;
        border-bottom: none;
      }
      h3 {
        color: #777;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem 0;
        text-align: start;
      }
      .nav-link {
        padding: 0 16px;
        font-size: 1.3rem;
        height: 4.2rem;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.4rem;
        transition: all 0.5s;
        border-radius: 4px;
        text-transform: uppercase;

        &:hover {
          color: var(--primary-hover);
          transform: translateX(-10px);
        }
        svg {
          font-size: 2rem;
        }
        &.active {
          background: var(--primary);
          position: relative;
          color: #fff;
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "My Portfolio",
    path: "",
  },
  {
    id: 2,
    icon1: <HiOutlineShoppingCart />,
    title: "Investments",
    path: "investments",
  },
  {
    id: 3,
    icon1: <MdAddBusiness />,
    title: "Transactions",
    path: "transactions",
  },
  {
    id: 4,
    icon1: <BsCollection />,
    title: "Deposit | Withdrawal",
    path: "deposit",
  },
];

export const sidebarData2 = [
  { id: 2, icon1: <FiLogOut />, title: "Log Out", path: "" },
];
export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                exact
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={`${x.path}`}
                key={x.id}
              >
                {x.title}
              </NavLink>
            );
          })}
        </div>

        <div className="flex column item-start gap-1">
          <p className="fs-12">
            <span className="block text-bold">
              Invesstock Customer Dashboard
            </span>
            © 2023 All Rights Reserved
          </p>
          <h5 className="fs-12">Made By Invesstock Team</h5>
        </div>
      </div>
    </SidebarWrapper>
  );
}
