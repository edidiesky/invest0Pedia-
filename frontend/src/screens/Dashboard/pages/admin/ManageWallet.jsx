import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/forms";
import { Links, Header, Alert } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  AdminUpdateWallet,
  getWallet,
  clearWallertAlert,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function Wallet() {
  const {
    isLoading,
    isError,
    alertType,
    alertText,
    showAlert,
    Wallet,
    isSuccess,
  } = useSelector((store) => store.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getWallet());
  }, []);

  const [addressdata, setAddressData] = useState('');

  useEffect(() => {
    if (Wallet) {
     setAddressData(Wallet[0]?.address);
    }
  }, [setAddressData, Wallet]);

  const inputData = [
    {
      id: 1,
      name: "wallet",
      placeholder: "Wallet ADDRESS",
      type: "text",
      text: "Wallet ADDRESS",
    },
  ];

  const navigate = useNavigate();

  const onChange = (e) => {
   setAddressData(e.target.value);
  };
  let id = Wallet?._id

  // handling the users profile update
  const handleUpdateUserWallet = (e) => {
    e.preventDefault();
    // console.log(addressdata,Wallet[0]?._id);
    dispatch(AdminUpdateWallet(addressdata));
  };

//   // navigate back to the user dashboard when update is successfull
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearWallertAlert());
      }, 6000);
    }
  }, [showAlert]);

  return (
    <>
      {isSuccess && (
        <Message
          showAlert={showAlert}
          alertText={alertText}
          alertType={alertType}
        />
      )}
      {isLoading && <LoaderIndex loading={isLoading} />}
      {/* <Header text={"Customer Wallet"} /> */}
      <WalletContainer>
        <div className="profileWrapper">
          {isError && (
            <Message alertText={alertText} alertType={alertType} />
          )}
          <div className="EditWalletWrapperTopLeft">
            <h3>Edit /Create Wallet</h3>
          </div>

          <form
            className="profileForm shadow"
            onSubmit={handleUpdateUserWallet}
          >
            <div className="profileFormBottom">
              {inputData.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={addressdata}   
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
            </div>
            <div className="btnWrapper">
              <button type="submit" className="editBtn">
                Edit / Create Wallet
              </button>
            </div>
          </form>
        </div>
      </WalletContainer>
    </>
  );
}

const WalletContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditWalletWrapperTopLeft {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--text-color);
        font-weight: 700;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
      }
    }
    .profileForm {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 3.7rem 6rem;
      background: #fff;
      border-radius: 6px;
      flex-direction: column;
      .btnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
        .editBtn {
          border: none;
          outline: none;
          font-size: 1.6rem;
          font-weight: 600;
          color: #fff;
          background: var(--primary);
          padding: 1.4rem 4rem;
          border-radius: 40px;
          cursor: pointer;
          &:hover {
            background: var(--primary-hover);
          }
        }
      }
      .WalletBottom {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.4rem 0;
        h3 {
          font-size: 1.8rem;
          color: var(--text-color);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
      .profileFormBottom {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1.4rem;
        padding: 0.4rem 0;
      }
    }
  }
`;
