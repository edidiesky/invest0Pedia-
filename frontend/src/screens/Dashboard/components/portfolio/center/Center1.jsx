import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Center1() {
  const {
    marketIsLoading,
    marketIsError,
    alertType,
    alertText,
    showAlert,
    market,
    marketIsSuccess,
  } = useSelector((store) => store.market);
  return (
    <Center1Container className="back-white shadow radius-1 px-3 py-3 flex column gap-2 item-start">
      <h3 className="uppercase text-extra-bold">
        Overall Market Analysis{" "}
        <span className="fs-12 capitalize block text-light text-grey">
          Lorem ipsum dolor sit amet, consectetur
        </span>
      </h3>
      {marketIsLoading ? (
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
        <div className="pt-2 grid grid-gap2 item-center justify-center w-100">
          <h3 className=" text-extra-bold text-center">
            <span className="fs-16 block text-grey text-light">Price</span>$
            {market[0]?.price}
          </h3>
          <h3 className={market[0]?.rate < 1 ?" text-extra-bold text-red text-center":" text-extra-bold text-green text-center"}>
            <span className="fs-16 block text-grey text-light">
              24h% change
            </span>
            {market[0]?.rate}%{" "}
            {market[0]?.rate < 1 ? (
              <FaArrowDown className="fs-20 text-red" />
            ) : (
              <FaArrowUp className="fs-20 text-green" />
            )}
          </h3>
          <h3 className=" text-extra-bold text-center">
            <span className="fs-16 block text-grey text-light">
              Volume (24h)
            </span>
            ${market[0]?.volume}B
          </h3>
          <h3 className=" text-extra-bold text-center">
            <span className="fs-16 block text-grey text-light">Market Cap</span>
            ${market[0]?.capacity}B
          </h3>
        </div>
      )}
    </Center1Container>
  );
}

const Center1Container = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 2rem;
  }
`;
