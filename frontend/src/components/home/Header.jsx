import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { onSidebar } from "../../Features";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <ListStyled className="w-100 flex item-center justify-space">
      <div className="flex-1 flex item-center" style={{ padding: "3rem 0" }}>
        <Link to={"/"} className="flex gap-1 item-center">
          <img
            src="/images/logoMoon.svg"
            alt="dealer-image"
            style={{ width: "6rem", height: "6rem" }}
          />

          <h3 className="uppercase text-bold text-dark">INVESSTOCK</h3>
        </Link>
        <div className="flex right gap-3 px-2 item-center">
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
              to={"/reserve"}
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
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/page-login"} className="loginBtn btn2">
        Login
      </Link>
      <Link to={"/page-login"} className="loginBtn btn1">
        Login
      </Link>
      <div className="icon">
        <FiMenu
          className="fs-26 text-extra-bold"
          onClick={() => dispatch(onSidebar())}
        />
      </div>
    </ListStyled>
  );
}

const ListStyled = styled.div`
  .right {
    @media (max-width: 980px) {
      display: none;
    }
  }
  .icon {
    width: 6rem;
    height: 6rem;
    display: grid;
    place-items: center;
    @media (min-width: 980px) {
      display: none;
    }
  }
  .btn1 {
    @media (max-width: 980px) {
      display: none;
    }
  }
  .btn2 {
    @media (min-width: 980px) {
      display: none;
      font-size: 2rem;
    }
  }
  .loginBtn {
    border: none;
    font-size: 1.6rem;
    font-weight: 600;
    position: relative;
    color: var(--primary);
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
