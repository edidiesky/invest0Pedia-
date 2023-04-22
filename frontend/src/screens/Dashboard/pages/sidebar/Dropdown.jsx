import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { offSidebar } from "../../../../Features";

export const sidebarData = [
  {
    id: 1,
    title: "My Portfolio",
    path: "",
  },
  {
    id: 2,
    title: "Investments",
    path: "investments",
  },
  {
    id: 3,
    title: "Transactions",
    path: "transactions",
  },
  {
    id: 4,
    title: "Deposit | Withdrawal",
    path: "deposit",
  },
];
export const sidebarData2 = [
  {
    id: 1,
    title: "My Portfolio",
    path: "",
  },
  {
    id: 2,
    title: "Investments",
    path: "investments",
  },
  {
    id: 3,
    title: "Manage Transactions",
    path: "transactions",
  },
  {
    id: 4,
    title: "Deposit | Withdrawal",
    path: "deposit",
  },
  {
    id: 5,
    title: "Manage Clients",
    path: "clients",
  },
  {
    id: 7,
    title: "Manage Market",
    path: "market",
  },
  {
    id: 6,
    title: "Manage Investment",
    path: "investment-list",
  },
  {
    id: 8,
    title: "Manage Wallet Address",
    path: "manage-wallet",
  },
];


export default function Dropdown({ togglesidebar }) {
    // user's state
    const dispatch = useDispatch()
    const {
      userInfo,
    } = useSelector((store) => store.user);
  return (
    <DropDownContainer className={togglesidebar ? "w-100 active" : "w-100"}>
      <div className="list">
        { userInfo?.isAdmin?
        sidebarData2.map((x) => {
          return (
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={`${x.path}`} 
              onClick={() => dispatch(offSidebar())} 
              key={x.id}
            >
              {x.title}
            </NavLink>
          );
        }):
        sidebarData.map((x) => {
          return (
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={`${x.path}`}
              onClick={() => dispatch(offSidebar())}
              key={x.id}
            >
              {x.title}
            </NavLink>
          );
        })
        }
      </div>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
max-height:0;
transition: all .5s ease-in-out;
opacity:0;
visibility:hidden;
&.active {
    max-height: 25rem;
    opacity:1;
    visibility:visible;
}
`;
