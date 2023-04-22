import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TableCard, Alert } from "../components";
import { Table } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAlltransaction, gettransactionById } from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Transaction() {
  // getting the userinfo
  const { transaction, isLoading, isSuccess, isError, alertText, alertType } =
    useSelector((store) => store.transaction);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if (userInfo.isAdmin) {
      dispatch(getAlltransaction());
    } else {
      dispatch(gettransactionById());
    }
  }, []);

  const transactionData = [
    {
      firstname: "Edidiong",
      lastname: "Essien",
      country: "Nigeria",
      state: "Lagos",
      phone: "1456-93837-5883",
      email: "edidie@gmail.com",
      createdAt: "1/17/2023",
      _id: 32536388494,
      startDate: "1/17/2023",
      endDate: "1/27/2023",
      description: "Lorem ipsum dolor sit amet consectetur.",
      amount: 1200,
      tier: "tier1",
      status: "pending",
    },
    {
      firstname: "Daniel",
      lastname: "Joel",
      country: "Nigeria",
      state: "Lagos",
      phone: "1456-93837-5883",
      email: "john@gmail.com",
      createdAt: "1/17/2023",
      _id: 32536388494,
      startDate: "1/17/2023",
      endDate: "2/27/2023",
      description: "Lorem ipsum dolor sit amet consectetur.",
      amount: 1400,
      tier: "tier2",
      status: "pending",
    },
    {
      firstname: "Matthew",
      lastname: "Victor",
      country: "Nigeria",
      state: "Lagos",
      phone: "1456-93837-5883",
      email: "mat@gmail.com",
      createdAt: "1/17/2023",
      _id: 32536388494,
      startDate: "1/17/2023",
      endDate: "1/27/2023",
      description: "Lorem ipsum dolor sit amet consectetur.",
      amount: 1200,
      tier: "tier1",
      status: "pending",
    },
    {
      firstname: "Issaih",
      lastname: "Caleb",
      country: "Nigeria",
      state: "Lagos",
      phone: "1456-93837-5883",
      email: "caleb@gmail.com",
      createdAt: "1/17/2023",
      _id: 32536388494,
      startDate: "1/17/2023",
      endDate: "2/27/2023",
      description: "Lorem ipsum dolor sit amet consectetur.",
      amount: 1400,
      tier: "tier3",
      status: "pending",
    },
  ];
  // user's state
  // const dispatch = useDispatch();
  return (
    <>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <TransactionContainer>
        {transaction?.length === 0 && <Message alertText={'You have no transaction'} alertType={'danger'}/>}
        {isError && <Alert alertText={alertText} alertType={alertType} />}
        <Table>
          <div className="TableTop">
            <div className="TableTopRight">
              <h3>Transaction List </h3>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              {userInfo?.isAdmin ? (
                <>
                  <thead>
                    <tr>
                      <th>Transaction Id</th>
                      <th>First Name</th>
                      <th>Country</th>
                      <th>Email</th>
                      <th>status</th>
                      <th>profit</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </>
              ) : (
                <>
                  <thead>
                    <tr>
                    <th>Transaction Id</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>amount</th>
                      <th>tier</th>
                      <th>status</th>
                    </tr>
                  </thead>
                </>
              )}
              <tbody>
                {userInfo?.isAdmin
                  ? transaction?.map((x) => {
                      return <TableCard x={x} key={x?._id}/>;
                    })
                  : transaction?.map((x) => {
                      return <TableCard x={x} key={x?._id} type='userInvestment'/>;
                    })}
              </tbody>
            </table>
          </div>
          {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
        </Table>
      </TransactionContainer>
    </>
  );
}

const TransactionContainer = styled.div`
  width: 100%;
`;
