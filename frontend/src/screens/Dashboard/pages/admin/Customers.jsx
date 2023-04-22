import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {
  Alert,
  Pagination,
  Header,
  TableCard,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../styles";
import {
  handleUserSearch,
  getAllCustomer,
  clearUserAlertError,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function Customers() {
  // user's state
  const {
    isLoading,
    users,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllCustomer());
  }, [userpage]);

  useEffect(() => {
    if (showAlert || isError) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [showAlert]);


  return (
    <>
      {isSuccess && <Message alertText={alertText} alertType={alertType} />}
      {isLoading && <LoaderIndex loading={isLoading} />}
      {/* <Header
        text={"My Customers"}
        subtext={"Here is what is happening with your Customers today"}
      /> */}
      <CustomersContainer>
        {isError && <Message alertText={alertText} alertType={alertType} />}
        <Table>
          <div className="TableTop">
            <div className="TableTopRight">
              <h3>Clients List </h3>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Clients Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })}
              </tbody>
            </table>
          </div>
          {usernoOfpage > 0 && <Pagination type="users" />}
        </Table>
      </CustomersContainer>
    </>
  );
}

const CustomersContainer = styled.div`
  width: 100%;
`;
