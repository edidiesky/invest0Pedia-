import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";


// let stockusd = stockData.reduce((acc, total)=> {
//   const {usd} = total
//   acc += usd
//   return acc
// }, 0)
// stockusd = parseFloat(stockusd.toFixed(2))
// console.log(stockusd)
export default function Bottom1() {
  const { isLoading, investment } = useSelector((store) => store.investment);
  return (
    <Bottom1Container className="back-white shadow radius-1 px-3 py-3 flex column gap-2 item-start">
      <h3 className="uppercase text-extra-bold">
        Our Private Stock Info{" "}
        <span className="fs-12 capitalize block text-light text-grey">
          Lorem ipsum dolor sit amet, consectetur
        </span>
      </h3>
      <div className="w-100 flex column item-start">
        {investment?.map((x) => {
          return (
            <div
              className="w-100 border-bottom py-1 pb-1 flex justify-space"
              key={x?._id}
            >
              <div className="flex item-start gap-2">
                <img src={x?.image} alt="" className="img-fluid h-4" />
                <h4 className="text-bold fs-16">
                  {x?.title}
                  <span className="block text-light fs-14">{x?.rate}%</span>
                </h4>
              </div>
              <h4 className="fs-16 text-bold">
                ${x?.price}
                <span className="block text-light fs-14">{x?.profit} USD</span>
              </h4>
            </div>
          );
        })}
      </div>
      <div className="pt-2 grid-3 grid-gap2 item-center justify-center w-100">
        <h3 className=" text-extra-bold text-center">
          {investment[0]?.investors}
          <span className="fs-16 block text-grey text-light">Investors</span>
        </h3>
        <h3 className=" text-extra-bold text-center">
          {investment[0]?.network}
          <span className="fs-16 block text-grey text-light">Networks</span>
        </h3>
        <h3 className=" text-extra-bold text-center">
          {investment[0]?.countries}
          <span className="fs-16 block text-grey text-light">Countries</span>
        </h3>
      </div>      
    </Bottom1Container>
  );
}

const Bottom1Container = styled.div``;
