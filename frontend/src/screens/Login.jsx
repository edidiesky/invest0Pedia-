import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/forms/Input";
import { loginCustomer, clearUserAlertError } from "../Features";
import LoaderIndex from "../components/loaders";
import Message from "../components/loaders/Message";
import { Meta } from "../components/common";

export default function Auth() {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputData = [
    {
      id: 3,
      name: "email",
      placeholder: "hello@example.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "Minimum 8 Characters",
      type: "password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
      required: true,
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // // getting the state from the slice
  const dispatch = useDispatch();
  const { isLoading, isSuccess, userInfo, isError, alertText, alertType } =
    useSelector((store) => store.user);

  // // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(formdata));
  };

  // // navigate if success to the login page
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        clearUserAlertError();
        navigate(`/dashboard`);
      }, 3000);
    }
  }, [navigate, isSuccess]);

  // clear the state if the request is failed or successfull
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <>
    <Meta title={'Login'}/>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <AuthContent>
        <div className="authContentWrapper">
          <div className="authContentForm shadow">
            {isSuccess && (
              <Message alertText={alertText} alertType={alertType} />
            )}
            {isError && <Message alertText={alertText} alertType={alertType} />}
            <img
              src="/images/logoMoon.svg"
              alt="dealer-image"
             style={{width:"6rem", height:"6rem"}}
            />
            <h3>Sign up your account</h3>
            <form className="authContentFormWrapper" onSubmit={handleSubmit}>
              {inputData.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
              <button className="submitBtn">Sign me up</button>
              <p>
                Don't have an account?{" "}
                <Link to={"/page-register"}>Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </AuthContent>
    </>
  );
}

const AuthContent = styled.div`
  width: 100%;
  background-color: var(--background);
  padding: 6rem 0;
  min-height: 100vh;
  .authContentWrapper {
    width: 100%;
    display: flex;
    max-width: 1600px;
    align-items: center;
    position: relative;
    .authImage {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
    .authContentForm {
      margin: 3rem auto;
      display: flex;
      width: 38%;
      align-items: center;
      padding: 4.5rem 5.5rem;
      border-radius: 10px;
      flex-direction: column;
      gap: 2rem;
      z-index: 400;
      background-color: #fff;
      @media (max-width: 1090px) {
        width: 70%;
      }
      @media (max-width: 780px) {
        width: 80%;
        padding: 4rem 3rem;
      }
      @media (max-width: 480px) {
        width: 80%;
        padding: 4rem 2rem;
      }
      .icon {
        width: auto;
        height: 8rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-color);
        width: 100%;
        text-align: center;

        .userSpan {
          display: block;
          font-size: 1.6rem;
          font-weight: 400;
          padding-top: 1.2rem;
          color: var(--grey);
        }
      }
      p {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--grey-2);
        width: 100%;
        text-align: center;

        a {
          font-weight: 600;
          color: var(--text-color);
          text-decoration: underline;
        }
      }
      .authContentFormWrapper {
        width: 100%;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;

        .submitBtn {
          width: 100%;
          border: none;
          outline: none;
          padding: 1.6rem 3rem;
          font-size: 1.6rem;
          margin: 1.4rem 0;
          font-weight: 600;
          color: #fff;
          background-color: var(--primary);
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.5s;
          &:hover {
            background-color: var(--primary-hover);
          }
        }
      }
    }
  }
`;
