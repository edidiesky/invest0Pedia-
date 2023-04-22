import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";  
import { MdOutlineContentCopy } from "react-icons/md";
// import WAValidator from 'multicoin-address-validator/dist/wallet-address-validator'
import { clearUserAlertError, getWallet } from "../../../Features";
import { AiFillWarning } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
export default function Payment({ type, open, setOpen }) {
  // dispatch

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getWallet());
  }, []);
  const {
    isLoading,
    Wallet
  } = useSelector((store) => store.wallet);
  const [address, setAddress] = useState(
    ""
  );

  useEffect(() => {
    if (Wallet) {
      setAddress(Wallet[0]?.address);
    }
  }, [setAddress, Wallet]);

    const handleCopyText = (e) => {
      setAddress(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(address);
    }

  return (
    <PaymentContainer className={open ? "active" : ""}>
      <div className={open ? "PaymentCard active" : "PaymentCard"}>
        <div className="cross" onClick={() => setOpen(false)}>
          <RxCross2 />
        </div>
        <div className="paymentTop flex column py-1 gap-1">
          <h2 className="fs-30 text-bold capitalize">Scan Wallet</h2>
          <QRCode size={350} value={address} renderAs="canvas" />
          <div className="w-100 flex pt-2 column gap-1">
            <h5>Copy wallet address</h5>
            <div className="forminput">
              <input
                type="text"
                className="forminput"
                name="address"
                value={address}
                onChange={handleCopyText}
              />
              <div className="copy flex item-center justify-center fs-13" onClick={copyToClipboard}>
                <MdOutlineContentCopy />
                copy
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  .forminput {
    height: 6rem;
    width: 100%;
    border: 1px solid var(--grey-1);
    display: flex;
    align-items: center;  
    border-radius: 40px;
    background: #f7f7f7;
    padding: 0 1rem;
    
    .copy {
      width: 4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-weight: 600;
      cursor: pointer;
      svg {
        font-size: 20px;
      }
    }
    input {
      
      background: transparent;
      padding: 0 2.4rem;
      width: 100%;
      border: none;
      outline: none;
      font-size: 1.4rem;
      font-weight: 400;
      font-family: inherit;
      height: 100%;

      &::placeholder {
        font-size: 1.5rem;
      }
    }
  }
  .PaymentCard {
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    padding: 4rem 1rem;
    gap: 2rem;
    border-radius: 6px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    opacity: 0;
    transform: scale(0.7);
    visibility: hidden;
    transition: all 0.5s;
    &.active {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-2);
      }
      svg {
        font-size: 20px;
      }
    }
    .paymentTop {
      form {
        width: 100%;
        height: 4.67rem;
        display: flex;
        input {
          height: 100%;
          border-radius: 40px;
          background: var(--white);
          padding: 0 2.4rem;
          width: 100%;
          border: 1px solid var(--grey-1);
          outline: none;
          font-size: 1.4rem;
          font-weight: 400;
          font-family: inherit;

          &::placeholder {
            font-size: 1.5rem;
          }
          &:focus {
            border: 1px solid #222;
          }
        }
      }
    }
    .PaymentCardBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      gap: 1rem;
      button {
        padding: 1.2rem 2rem;
        border: none;
        font-size: 1.4rem;
        font-weight: 400;
        background: var(--grey-2);
        color: #fff;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        &:hover {
          background: var(--grey-3);
          color: var(--text-color);
        }
        &.PaymentBtn {
          background: var(--red);
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .PaymentCardCenter {
      padding: 2rem;
      width: 100%;
      background: var(--grey-3);
      border-left: 5px solid var(--red);
      display: flex;
      align-items: center;
      gap: 2rem;
      svg {
        font-size: 2rem;
        color: var(--red);
      }
      h4 {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--red);
        .PaymentSpan {
          font-weight: 600;
          display: block;
          padding-bottom: 1rem;
        }
      }
    }
  }
`;
