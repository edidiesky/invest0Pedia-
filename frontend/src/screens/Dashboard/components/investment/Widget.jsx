import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import styled from "styled-components";
import { getCoinDetails, createTransactionById } from "../../../../Features";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export default function Widget() {
  const { coincart } = useSelector((store) => store.coincart);
  const dispatch = useDispatch();
  let transactionItems = coincart;
  useEffect(() => {
    if (!transactionItems?.length === 0) {
      dispatch(createTransactionById(transactionItems));
    }
  }, [transactionItems]);
  return (
    <WidgetContainer className="w-10 py-2 flex column gap-2 item-start">
      <Link
        to={"/dashboard"}
        className="btn shadow fs-14 flex item-center px-2 gap-1 py-1 text-white text-bold"
      >
        <BiPlus /> Add Investment
      </Link>
      <div className="w-100 grid-2 grid-gap2">
        {coincart?.map((x) => {
          return (
            <div
              className="card shadow back-white py-2 w-100 flex column item-start radius-1"
              key={x?._id}
              onClick={() => dispatch(getCoinDetails(x))}
            >
              <img src={x?.icon} alt="" className="imgs" />
              <h2 className="px-2 text-white">
                <span className="block fs-16 text-grey">{x?.plan}</span>$
                {x?.price}
              </h2>
            </div>
          );
        })}
      </div>
    </WidgetContainer>
  );
}

const WidgetContainer = styled.div`
  width: 100%;
  .py-1 {
    padding: 1.5rem 2rem;
  }
  /* .grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
} */
  .imgs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .card {
    position: relative;
    &:nth-child(1) {
      background-color: #ac4cbc;
    }
    &:nth-child(2) {
      background-color: #ffab2d;
    }
    &:nth-child(3) {
      background-color: #3a82ef;
    }
    &:nth-child(4) {
      background-color: #363032;
      .Bottom1 {
        h4 {
          color: #fff;
        }
      }
    }
  }
`;
