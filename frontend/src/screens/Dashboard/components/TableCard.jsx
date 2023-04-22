import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getInvestmentDetails } from "../../../Features";
export default function TableCards({ x, type }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");

  let endDate = moment(x?.transactionItems?.endDate)
  endDate = endDate.format("MMMM Do YYYY");

  let startDate = moment(x?.transactionItems?.startDate)
  startDate = startDate.format("MMMM Do YYYY");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // delete user function
  const handleDeleteUser = () => {
    dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`${x?._id}`);
  };

  // edit user function
  const handleEditInvestment = () => {
    navigate(`${x?._id}`);
  };

  const handleDeleteInvestment = () => {
    dispatch(getInvestmentDetails(x));
  };
  
  // edit-profile

  if (type === "userInvestment") {
    return (
      <>
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>{startDate}</td>
          <td>{endDate}</td>
          <td className="text-bold">{x?.transactionItems?.price}</td>
          <td>{x?.transactionItems?.tier}</td>
          <td>{x?.transactionItems?.status}</td>
        </tr>
      </>
    );
  }

  if (type === "investmentList") {
    return (
      <>
      <Delete type="investment" />
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>{x?.tier}</td>
          <td>{x?.price}</td>
          <td>{endDate}</td>
          <td>{startDate}</td>
          <td>{x?.investors}</td>
          <td>{x?.network}</td>
          <td>
          <div className="action">
            <div className="icons" onClick={handleDeleteInvestment}>
              <BsTrash />
            </div>
            <div className="icons" onClick={handleEditInvestment}>
              <MdEdit />
            </div>
          </div>
        </td>
        </tr>
      </>
    );
  }

  if (type === "users") {
    return (
      <>
        <Delete type="users" />
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>{x?.firstname}</td>
          <td>{x?.email}</td>
          <td>{x?.country}</td>
          <td>{x?.phone}</td>
          <td>
            <div className="action">
              <div className="icons" onClick={handleDeleteUser}>
                <BsTrash />
              </div>
              <div className="icons" onClick={handleEditUser}>
                <MdEdit />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }

  return (
    <>
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>{x?.createdBy?.firstname}</td>
        <td>{x?.createdBy?.country}</td>
        <td>{x?.createdBy?.email}</td>
        <td>{x?.status}</td> 
        <td>{x?.profit}</td>
        <td>
          <div className="action">
            <div className="icons" onClick={handleDeleteUser}>
              <MdEdit />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
