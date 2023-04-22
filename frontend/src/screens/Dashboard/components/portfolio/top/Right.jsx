import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCoinCart } from "../../../../../Features";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function TopRight() {
  const dispatch = useDispatch();
  const { isLoading, isError, investment, alertText, alertType } = useSelector(
    (store) => store.investment
  );

  const { userInfo } = useSelector((store) => store.user);

  return (
    <TopRightContainer className="back-white shadow radius-1 px-2 pb-3 py-3 flex column gap-2 item-start">
      <h3 className="uppercase text-extra-bold">Investment Plans</h3>
      {/* loading part */}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <div className="w-100 grid-2 grid-gap2">
          {investment?.map((x) => {
            return (
              <div
                className="card shadow back-white w-100 flex column item-start radius-1"
                key={x?._id}
              >
                <div className="flex item-center gap-1 px-2 py-2">
                  <img src={x?.image} alt="" className="img-fluid h-4" />
                  <h3 className="text-extra-bold text-white">
                    {x?.packageName}
                    <span className="text-light fs-16 block text-white">
                      {x?.tier}
                    </span>
                  </h3>
                </div>
                <h2 className="px-2 text-white">${x?.price}</h2>
                <h4 className="px-2 fs-14 text-white">{x?.rate}% this week</h4>
                <div className="Bottom1 flex w-100 py-2 px-2 item-center justify-space">
                  <h4 className="fs-12">
                    <span className="text-green text-extra-bold">Optin</span>{" "}
                    {x?.rate}% this week
                  </h4>
                  {!userInfo?.deposit < x?.price && (
                    <button
                      className="btn px-1 py-1 fs-12"
                      onClick={() => dispatch(CreateCoinCart(x))}
                    >
                      Invest Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </TopRightContainer>
  );
}

const TopRightContainer = styled.div`
  width: 100%;
  /* .grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
} */
  .card {
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
    &:nth-child(5) {
      background-color: #3a82ef;
    }
    &:nth-child(6) {
      background-color: #ac4cbc;
      .Bottom1 {
        h4 {
          color: #fff;
        }
      }
    }
  }
`;
