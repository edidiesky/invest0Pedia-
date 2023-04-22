import React from "react";
import { FiLogOut, FiMail, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ClearUserInfo } from "../../../Features/user/userSlice";

export default function Profile({ isactive, setIsActive }) {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    setIsActive(true)
    dispatch(ClearUserInfo());
  };
  
  return (
    <List
      className={
        isactive
          ? "py-1 back-white radius-1 column flex active"
          : "py-1 back-white radius-1 column flex"
      }
    >
      <Link to={'profile'}
        className="py-1 px-2 flex item-center text-dark gap-1 fs-14 text-bold"
        onClick={() => setIsActive(true)}
      >
        <FiUser className="fs-20 text-green" /> Profile
      </Link>
      <li
        className="py-1 px-2 flex item-center gap-1 fs-14 text-bold"
        onClick={() => setIsActive(true)}
      >
        <FiMail className="fs-20 text-green" /> Inbox
      </li>
      <li
        className="py-1 px-2 flex item-center gap-1 fs-14 text-bold"
        onClick={handleLogOut}
      >
        <FiLogOut className="fs-20 text-red" /> Logout
      </li>
    </List>
  );
}

const List = styled.ul`
  min-width: 169px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 120%;
  right: 0%;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  li {
    transition: all 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
