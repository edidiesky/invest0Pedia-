import React from 'react'
import { useSelector } from "react-redux";
import moment from "moment";
export default function Details() {
  const {
    coindetails
  } = useSelector((store) => store.coincart);
  let createddate = moment(coindetails?.startDate);
  createddate = createddate.format("MMMM Do YYYY");

  let enddate = moment(coindetails?.endDate);
  enddate = enddate.format("MMMM Do YYYY");

  return (
    <div className='w-100 grid-2 grid-gap2'>
      <div className="w-100 flex column gap-1">
        <h5 className="text-grey fs-14 text-light">Investment Plans</h5>
        <h4 className="fs-18 text-bold">{coindetails?.plan}</h4>
      </div>
      <div className="w-100 flex column gap-1">
        <h5 className="text-grey fs-14 text-light">Investment Tier</h5>
        <h4 className="fs-18 text-bold">{coindetails?.tier}</h4>
      </div>
      <div className="w-100 flex column gap-1">
        <h5 className="text-grey fs-14 text-light">Start Date</h5>
        <h4 className="fs-18 text-bold">{createddate}</h4>
      </div>
      <div className="w-100 flex column gap-1">
        <h5 className="text-grey fs-14 text-light">End Date</h5>
        <h4 className="fs-18 text-bold">{enddate}</h4>
      </div>

      <div className="w-100 flex column gap-1">
        <h5 className="text-grey fs-14 text-light">Investment ID</h5>
        <h4 className="fs-18 text-bold">{coindetails?._id}</h4>
      </div>
    </div>
  )
}
