import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { offSidebar, onSidebar } from "../../Features";
import { FiMenu } from "react-icons/fi";

export default function SmallSidebar() {
  const dispatch = useDispatch();
  const [togglesidebar, setToggleSidebar] = useState(false);
  const { sidebar } = useSelector((store) => store.toggle);
  return (
    <SmallSidebarContent className={sidebar ? "active" : ""}>
      <div className={sidebar ? "wrapper active" : "wrapper "}>
        <div className="barWrapper1">
          <RxCross2 onClick={() => dispatch(offSidebar())} />
        </div>
        <div className="smallSidebarWrapper">
          <Link to={"/"} className="flex gap-1 item-center">
            <img
              src="/images/logoMoon.svg"
              alt="dealer-image"
              style={{ width: "6rem", height: "6rem" }}
            />

            <h3 className="uppercase text-bold text-dark">INVESSTOCK</h3>
          </Link>
          <ul className="flex column gap-1">
            <div className="flex right column gap-3 px-2 item-center">
              <div className="list column flex item-center">
                <Link
                  to={"/investing"}
                  className="fs-18 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
                >
                  Investing
                </Link>
              </div>
              <div className="list column flex item-center">
                <Link
                  to={"/reserve"}
                  className="fs-18 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
                >
                  High Apy Yield
                </Link>
              </div>
              <div className="list column flex item-center">
                <Link
                  to={"/reserve"}
                  className="fs-18 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
                >
                  Support
                </Link>
              </div>

              <div className="list column flex item-center">
                <Link
                  to={"/about-us"}
                  className="fs-18 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
                >
                  About
                </Link>
              </div>

              <div className="list column flex item-center">
                <Link
                  to={"/contact"}
                  className="fs-18 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
                >
                  Contact Us
                </Link>
              </div>
            </div>
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
      </div>
    </SmallSidebarContent>
  );
}

const SmallSidebarContent = styled.div`
  position: fixed;
  left: -200%;
  width: 100vw;
  z-index: 2200;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.6s;
  &.active {
    left: 0;
  }
  p {
    font-size: 1.6rem;
  }
  .barWrapper1 {
    &:hover {
      svg {
        color: var(--primary-hover);
      }
    }
  }
  .wrapper {
    width: 350px;
    background: #fff;
    height: 100vh;
    top: 10%;
    padding-top: 2rem;
    left: -100%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.6s;
    &.active {
      left: 0;
    }
    @media (min-width: 980px) {
      display: none;
    }
    ul {
      padding: 3rem 0;
      .right {
        display: flex;
        align-items: flex-start;
        gap: 2rem;

      }
    }
    .barWrapper1 {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 2rem 3rem;
      cursor: pointer;
      @media (min-width: 780px) {
        display: none;
      }
      svg {
        width: 3rem;
        height: 3rem;
        color: #222;
      }
    }
    .smallImage {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .smallSidebarWrapper {
      width: 90%;
      display: flex;
      flex-direction: column;
      z-index: 400;
      margin: 0 auto;
      align-items: flex-start;
      a {
        padding: 18px 18px;
        font-size: 2.4rem;
        font-weight: 400;
        margin: 0 auto;
        width: 100%;
        border-radius: 4px;
        color: var(--grey-1);
        font-family: "Sintony", sans-serif;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.4rem;
        &:hover {
          background: var(--primary-hover);
          color: #fff;
        }
        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;
