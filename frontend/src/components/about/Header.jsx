import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <ListStyled className="w-100 flex item-center justify-space">
      <div
        className="right w-100 flex item-center"
        style={{ width: "85%", margin: "0 auto", padding: "1rem 0" }}
      >
        <Link to={"/"} className="flex gap-1 item-center">
          <img
            src="/images/logoMoon.svg"
            alt="dealer-image"
            style={{ width: "6rem", height: "6rem" }}
          />
          <h3 className="uppercase text-bold text-dark">INVESSTOCK</h3>
        </Link>
        <div className="flex gap-3 px-2 item-center">
          <div className="list column flex item-center">
            <Link
              to={"/investing"}
              className="fs-14 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
            >
              Investing <BiChevronDown />
            </Link>
          </div>
          <div className="list column flex item-center">
            <Link
              to={"/reserve"}
              className="fs-14 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
            >
              High Apy Yield <BiChevronDown />
            </Link>
          </div>
          <div className="list column flex item-center">
            <Link
              to={"/support"}
              className="fs-14 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
            >
              Support
            </Link>
          </div>

          <div className="list column flex item-center">
            <Link
              to={"/about-us"}
              className="fs-14 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
            >
              About <BiChevronDown />
            </Link>
          </div>

          <div className="list column flex item-center">
            <Link
              to={"/contact"}
              className="fs-14 text-extra-bold text-dark flex item-center gap-1 text-light text-dark"
            >
              Contact Us <BiChevronDown />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/page-login"} className="loginBtn">
        Login
      </Link>
    </ListStyled>
  );
}

const ListStyled = styled.div`
  .loginBtn {
    border: none;
    font-size: 1.6rem;
    font-weight: 600;
    position: relative;
    &:hover:after {
      width: 100%;
      opacity: 1;
      visibility: visible;
    }
    &::after {
      width: 0;
      position: absolute;
      bottom: -10%;
      height: 3px;
      left: 0%;
      border-radius: 5px;
      background-color: var(--blue-2);
      content: "";
      transition: all 0.6s;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      color: var(--blue-2);
    }
  }
  h3 {
    &:hover {
      color: var(--primary-hover);
    }
  }
  .list {
    position: relative;
    a {
      &:hover {
        color: var(--primary-hover);
      }
    }
    ul {
      position: absolute;
      bottom: -280%;
      width: 20rem;
      /* opacity: 0;
            visibility: hidden;
            display: none; */
      li {
        text-align: center;
      }
    }
  }
`;
