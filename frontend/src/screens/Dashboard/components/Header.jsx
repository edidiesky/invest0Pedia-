import React, { useState } from "react";
import { BsMenuButton } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { onSidebar } from "../../../Features";

import Profile from "./Profile";

export default function Header() {
  const dispatch = useDispatch();
  const [isactive, setIsActive] = useState(false);
  const { userInfo } = useSelector((store) => store.user);

  return (
    <HeaderContainer>
      <div className="container item-center justify-space flex gap-2">
        <NavLink to={"/"} className="imageWrapper flex item-center gap-1">
          <img
            src="/images/logoMoon.svg"
            className="img-fluids"
            alt="sidebarIcon"
          />
          <h3 className="uppercase fs-20 text-blue">INVESTTOCK</h3>
        </NavLink>
        <div className="flex right flex-1 px-4 item-center gap-2">
          <FiMenu
            className="fs-26 text-extra-bold"
            onClick={() => dispatch(onSidebar())}
          />
          <h2 className="uppercase text-extra-bold fs-24 text-blue">
            Dashboard
          </h2>
        </div>
        <div className="item-center left items flex-1 gap-1 flex justify-end relative">
          <img
            src="/profile_icon2.png"
            className="image"
            alt="png-file"
            onClick={() => setIsActive(!isactive)}
          />
          <h3 className="capitalize fs-18 text-extra-bold">
            {userInfo?.firstname}
            <span className="block fs-14 text-bold text-dark">
              Account Balance: ${userInfo?.deposit}
            </span>
          </h3>
          <Profile isactive={isactive} setIsActive={setIsActive} />
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  min-height: 10rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 30;
  .container {
    width: 95%;
    margin: o auto;
    @media  (max-width:980px) {
      gap: 1rem;
      justify-content: flex-start;
    }
    .right {
      @media  (max-width:980px) {
     h2 {
      font-size: 1.6rem;
     }
    }
    .left {
      @media  (max-width:980px) {
     h3 {
      font-size: 1.4rem;
      span {
      font-size: 1rem;
      }
     }
    }
    }
  }
  .justify-end {
    justify-content: flex-end;
  }
  .items {
    position: relative;
  }
  .imageWrapper {
    @media  (max-width:980px) {
      h3 {
        display:none;
      }
    }
  }
  .image {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    @media  (max-width:980px) {
      width: 5rem;
    height: 5rem;
    }
  }
  .img-fluids {
    width:4rem;
    height:4rem;
  }
}
`;
