import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Alert, Pagination, Header, TableCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../styles";
import { getAllinvestment, clearInvestmentAlert } from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";
import { BiPlus } from "react-icons/bi";

export default function Customers() {
  // user's state
  const {
    isLoading,
    investment,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.investment);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearInvestmentAlert())
    dispatch(getAllinvestment());
  }, []);

  useEffect(() => {
    if (showAlert || isError) {
      setTimeout(() => {
        dispatch(clearInvestmentAlert());
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
              <h3>Investment List </h3>
              <Link
                to={"/dashboard/create-plan"}
                className="btn shadow fs-12 flex item-center px-2 gap-1 py-1 text-white text-bold"
              >
                <BiPlus /> Create an Investment
              </Link>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tier</th>
                  <th>Price</th>
                  <th>EndDate</th>
                  <th>StartDate</th>
                  <th>Investors</th>
                  <th>Network</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {investment?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="investmentList" />;
                })}
              </tbody>
            </table>
          </div>
          {usernoOfpage > 0 && <Pagination type="investment" />}
        </Table>
      </CustomersContainer>
    </>
  );
}

const CustomersContainer = styled.div`
  width: 100%;
`;
