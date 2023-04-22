import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";

const SidebarWrapper = styled.div`
  width: 30rem;
  background: #fff;
  
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
    left: 0;
    top: 20%;

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-family: "Sintony", sans-serif;
      .nav-link {
        padding: 0 20px;
        font-size: 1.2rem;
        height: 3rem;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.3rem;
        transition: all 0.5s;
        border-radius: 4px;
        font-family: "Sintony", sans-serif;

        &:hover {
          color: var(--primary-hover);
          transform: translateX(-10px);
        }
        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default function SidebarIndex() {
  const [togglesidebar, setToggleSidebar] = useState(false);
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <ul className="flex column gap-1">
          <li
            className="flex w-100 gap-1 column item-center fs-16"
          >
            <div className="w-100 flex item-center gap-2 justify-space px-2 py-1 radius-1 back-blue text-white" onClick={() => setToggleSidebar(!togglesidebar)}>
              <div className="flex item-center gap-2">
                <MdOutlineDashboard className="fs-26" /> Dashboard
              </div>
              <BiChevronDown className="fs-30" />
            </div>
            {<Dropdown togglesidebar={togglesidebar} />}
          </li>
          <li className="flex w-100 gap-2 item-center px-2 fs-16 pt-2 text-blue">
            <BsHeart className="fs-26" /> Support
          </li>
        </ul>

        <div className="flex column item-start px-2 gap-1">
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
