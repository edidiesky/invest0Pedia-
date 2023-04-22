import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Center2() {
  const { isLoading, investment } = useSelector((store) => store.investment);
  return (
    <div className="flex column gap-2">
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
        <>
          <Center2Container className="grid-2 grid-gap2">
            <div className="back-white shadow radius-1 py-3 column gap-2 center w-100">
              <div className="px-3 flex item-center gap-2 pb-3 border-bottom">
                <img
                  src={investment[0]?.image}
                  alt=""
                  className="img-fluid h-6"
                />
                <h3 className="text-extra-bold">
                  INVSSTCK #78
                  <div className="block fs-16 text-light">
                    NDV(USD) = ${investment[0]?.price}
                    <span
                      className={
                        investment[0]?.rate < 1 ? "text-red" : "text-green"
                      }
                    >
                      ({investment[0]?.rate}%)
                    </span>
                  </div>
                </h3>
              </div>
              <div className="pt-2 grid-3 grid-gap2 item-center justify-center w-100">
                <h3 className=" text-extra-bold text-center">
                  {investment[0]?.investors}
                  <span className="fs-16 block text-grey text-light">
                    Investors
                  </span>
                </h3>
                <h3 className=" text-extra-bold text-center">
                  {investment[0]?.network}
                  <span className="fs-16 block text-grey text-light">
                    Networks
                  </span>
                </h3>
                <h3 className=" text-extra-bold text-center">
                  {investment[0]?.countries}
                  <span className="fs-16 block text-grey text-light">
                    Countries
                  </span>
                </h3>
              </div>
            </div>
            <div className="back-white shadow radius-1 py-3 column gap-2 center w-100">
              <div className="px-3 flex item-center gap-2 pb-3 border-bottom">
                <img
                  src={investment[1]?.image}
                  alt=""
                  className="img-fluid h-6"
                />
                <h3 className="text-extra-bold">
                  INVSSTCK #78
                  <div className="block fs-16 text-light">
                    NDV(USD) = ${investment[1]?.price}
                    <span
                      className={
                        investment[1]?.rate < 1 ? "text-red" : "text-green"
                      }
                    >
                      ({investment[1]?.rate}%)
                    </span>
                  </div>
                </h3>
              </div>
              <div className="pt-2 grid-3 grid-gap2 item-center justify-center w-100">
                <h3 className=" text-extra-bold text-center">
                  {investment[1]?.investors}
                  <span className="fs-16 block text-grey text-light">
                    Investors
                  </span>
                </h3>
                <h3 className=" text-extra-bold text-center">
                  {investment[1]?.network}
                  <span className="fs-16 block text-grey text-light">
                    Networks
                  </span>
                </h3>
                <h3 className=" text-extra-bold text-center">
                  {investment[1]?.countries}
                  <span className="fs-16 block text-grey text-light">
                    Countries
                  </span>
                </h3>
              </div>
            </div>
          </Center2Container>
          <div className="back-white shadow radius-1 py-3 column gap-2 center w-100">
            <div className="px-3 flex item-center gap-2 pb-3 border-bottom">
              <img
                src={investment[2]?.image}
                alt=""
                className="img-fluid h-6"
              />
              <h3 className="text-extra-bold">
                INVSSTCK #78
                <div className="block fs-16 text-light">
                  NDV(USD) = ${investment[2]?.price}
                  <span
                    className={
                      investment[2]?.rate < 1 ? "text-red" : "text-green"
                    }
                  >
                    ({investment[2]?.rate}%)
                  </span>
                </div>
              </h3>
            </div>
            <div className="pt-2 grid-3 grid-gap2 item-center justify-center w-100">
              <h3 className=" text-extra-bold text-center">
                {investment[2]?.investors}
                <span className="fs-16 block text-grey text-light">
                  Investors
                </span>
              </h3>
              <h3 className=" text-extra-bold text-center">
                {investment[2]?.network}
                <span className="fs-16 block text-grey text-light">
                  Networks
                </span>
              </h3>
              <h3 className=" text-extra-bold text-center">
                {investment[2]?.countries}
                <span className="fs-16 block text-grey text-light">
                  Countries
                </span>
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const Center2Container = styled.div``;
