import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Meta } from "../components/common";

const SuccessListContainer = styled.div`
  width: 100%;
  padding: 8rem 0;
  min-height: 100vh;
  .SuccessListWrapper {
    width: 85%;
    margin: 0 auto;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 4rem;
      font-weight: 600;
      color: #333;
    }
    .successImage {
      width: 100%;
      height: 27rem;
    }
    .link {
      font-size: 1.6rem;
      background: var(--red);
      font-weight: 500;
      color: #fff;
      padding: 1rem 0;
      min-width: 20rem;
      border-radius: 40px;
      text-align: center;
      font-family: inherit;
      &:hover {
        background: var(--blue-2);
      }
    }
  }
`;
export default function Success(argument) {
  // body...

  return (
    <>
      <Meta title="Error - Not found" />
      <SuccessListContainer>
        <div className="SuccessListWrapper">
          <h2>Page Not Found</h2>
          <img
            src={"/notfound.svg"}
            alt="order-success"
            className="successImage"
          />
          <Link to={"/"} className="link">
            Back Home
          </Link>
        </div>
      </SuccessListContainer>
    </>
  );
}
