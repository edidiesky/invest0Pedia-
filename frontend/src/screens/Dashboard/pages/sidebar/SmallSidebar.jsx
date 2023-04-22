import React, {useState} from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { offSidebar } from "../../../../Features";
import Dropdown from "./Dropdown";

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
      <ul className="flex column gap-1">
          <li
            className="flex w-100 gap-1 column item-center fs-16 uppercase"
          >
            <div className="w-100 flex item-center gap-2 justify-space px-2 py-2 radius-1 back-blue text-white" onClick={() => setToggleSidebar(!togglesidebar)}>
              <div className="flex item-center gap-2">
                <MdOutlineDashboard className="fs-26" /> Dashboard
              </div>
              <BiChevronDown className="fs-30" />
            </div>
            {<Dropdown togglesidebar={togglesidebar} />}
          </li>
          <li className="flex w-100 gap-2 item-center px-2 fs-16 uppercase py-2 text-blue">
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
  .wrapper {
  width: 280px;
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
    a {
      padding: 9px 18px;
      font-size: 1.3rem;
      height: 3rem;
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
