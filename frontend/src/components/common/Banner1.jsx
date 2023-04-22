import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Banner1({ type }) {
  if (type === "reserve") {
    return (
      <Banner1Container>
        <img
          src="https://resources.betterment.com/hubfs/Graphics/webpage-graphics/Landscapes/Landscape-Lake-Sunrise-Gold50_desktop.svg"
          alt=""
          className="w-100 img"
        />
        <div className="header flex column gap-2 item-center">
          <h2 className="fs-40 text-dark">Start your Journey with Us</h2>
          <Link to={"page-login"} className="btn-primary py-2 px-3">
            Get Started
          </Link>
        </div>
      </Banner1Container>
    );
  }

  if (type === "investing") {
    return (
      <Banner1Container>
        {/* <svg
          width="2000"
          height="150"
          viewBox="0 0 2000 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Triangle illustration </title>
          <path
            d="M0 122.922L1004.7 0L2000 122.922V149.5H0V122.922Z"
            fill="#e3f8ff"
          ></path>
        </svg> */}
        <svg
          style={{width:'100%', height:"7rem",position:'absolute',top:"-8%"}}
          viewBox="0 0 2000 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Triangle illustration </title>
          <path
            d="M0 122.922L1004.7 0L2000 122.922V149.5H0V122.922Z"
            fill="#e3f8ff"
          ></path>
        </svg>
        <img
          src="https://resources.betterment.com/hubfs/Graphics/webpage-graphics/Landscapes/Landscape-Lake-Day-Blue10_destkop.svg"
          alt=""
          className="w-100 img"
        />
        <div className="header flex column gap-2 item-center">
          <h2 className="fs-40 text-dark">Invest today. Stock tomorrow.</h2>
          <Link to={"/page-login"} className="btn-primary py-2 px-3">
            Get Started
          </Link>
        </div>
      </Banner1Container>
    );
  }

  //
  if (type === "contact") {
    return (
      <Banner1Container
        style={{
          minHeight: "70vh",
          background: "#e3f8ff",
          display: "flex",
          padding: "8rem 0",
        }}
      >
        <img
          src="images/two-people-laptops-connected.png "
          alt=""
          className="imgs"
        />
        <div className="header pt-6 flex column gap-2 item-center">
          <h2 className="fs-36 text-dark">Start your Journey with Us</h2>
          <p className="fs-20 text-dark">
            Get the help you’re looking for by chatting with our virtual
            assistant. This service is available 24/7 for all of your pressing
            questions.
          </p>
          <Link to={"/page-login"} className="btn-primary py-2 px-3">
            Get Started
          </Link>
        </div>
      </Banner1Container>
    );
  }

  return (
    <Banner1Container>
      <img
        src="https://resources.betterment.com/hubfs/Graphics/webpage-graphics/Landscapes/Landscape-Lake-Day-Blue10_destkop.svg"
        alt=""
        className="w-100 img"
      />
      <div className="header flex column gap-2 item-center">
        <h2 className="fs-40 text-dark">Start your Journey with Us</h2>
        <Link to={"/page-login"} className="btn-primary py-2 px-3">
            Get Started
          </Link>   
      </div>
    </Banner1Container>
  );
}

const Banner1Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  h2 {
    font-size: 38px;
  }
  p {
    width: 60%;
    margin: 0 auto;
    line-height: 1.8;
    font-size: 1.7rem;
    text-align: center;
    @media (max-width: 780px) {
      width: 90%;
    }
  }
  .img {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
  }
  .imgs {
    width: 36rem;
  }
  .header {
    z-index: 40;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    h2 {
      font-size: 4.5rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;
