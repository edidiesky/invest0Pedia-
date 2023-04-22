import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../../../components/forms";
import { Links, Header, Alert } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProfile,
  getSingleCustomer,
  clearUserAlertError,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function Profile() {
  // getting the userinfo
  //  id && userInfo?._id
  // user's state
  //  get id from params
  const { id } = useParams();
  const {
    userDetails,
    userInfo,
    isLoading,
    isError,
    isSuccess,
    alertType,
    alertText,
    showAlert,
  } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  // fetch the user
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (userInfo?.isAdmin) {
      dispatch(getSingleCustomer(id));
    } else {
      dispatch(getSingleCustomer(userInfo?._id));
    }
  }, [id, userInfo?.isAdmin, userInfo?._id]);

  // formdata for admin
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    deposit: 0,
    profit: 0,
    tax: 0,
  });

  // formdata for user that is anot admin
  const [formdata2, setFormData2] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
  });

  useEffect(() => {
    // check if the user is admin or not

    if (userDetails?.isAdmin) {
      const {
        firstname,
        lastname,
        email,
        country,
        deposit,
        phone,
        profit,
        tax,
      } = userDetails;
      setFormData({
        firstname,
        lastname,
        email,
        country,
        deposit,
        phone,
        profit,
        tax,
      });
    } else {
      setFormData2({
        firstname:userDetails?.firstname,
        lastname:userDetails?.lastname,
        email:userDetails?.email,
        country:userDetails?.country
      });
    }
  }, [setFormData, setFormData2, userDetails]);

  const inputData = [
    {
      id: 1,
      name: "firstname",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "firstname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Doe",
      type: "text",
      text: "Last name",
      errorMessage:
        "lastname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 3,
      name: "email",
      placeholder: "example@site.com",
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
    },
    {
      id: 5,
      name: "deposit",
      placeholder: "deposit",
      type: "text",
      text: "deposit",
      errorMessage:
        "deposit should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 6,
      name: "phone",
      placeholder: "Doe",
      type: "text",
      text: "phone",
      errorMessage:
        "phone should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 7,
      name: "country",
      placeholder: "country",
      type: "text",
      text: "Country",
      errorMessage:
        "country should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 8,
      name: "profit",
      placeholder: "profit",
      type: "text",
      text: "profit",
      errorMessage:
        "profit should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
  ];
  const inputData2 = [
    {
      id: 1,
      name: "firstname",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "firstname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Doe",
      type: "text",
      text: "Last name",
      errorMessage:
        "lastname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 3,
      name: "email",
      placeholder: "example@site.com",
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
    },
    {
      id: 6,
      name: "phone",
      placeholder: "Doe",
      type: "text",
      text: "phone",
      errorMessage:
        "phone should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 7,
      name: "country",
      placeholder: "country",
      type: "text",
      text: "Country",
      errorMessage:
        "country should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
  ];
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setFormData2({ ...formdata2, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    if (userDetails?.isAdmin) {
      dispatch(UpdateProfile(formdata));
    } else {
      dispatch(UpdateProfile(formdata2));
    }
  };

  // navigate back to the user dashboard when update is successfull
  // useEffect(() => {
  //   if (showAlert) {
  //     setTimeout(() => {
  //       dispatch(clearUserAlertError());
  //     }, 6000);
  //   }
  // }, [showAlert]);

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
      <ProfileContainer>
        <div className="profileWrapper">
          {isError && <Message alertText={alertText} alertType={alertType} />}
          <div className="EditProfileWrapperTopLeft">
            <h3>Edit {userDetails?.isAdmin ? "Client" : "Your"} Profile</h3>
          </div>

          <form
            className="profileForm shadow"
            onSubmit={handleUpdateUserProfile}
          >
            {/* select absed o admin role or not */}
            {userDetails?.isAdmin ? (
              <>
                <div className="profileFormBottom">
                  {inputData.slice(0, 6).map((input) => {
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
                </div>
                <div className="ProfileBottom">
                  <h3>Personal Address</h3>
                  <div className="profileFormBottom">
                    {inputData.slice(6, 9).map((input) => {
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
                  </div>
                </div>
              </>
            ) : (
              <div className="profileFormBottom">
                {inputData?.map((input) => {
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
              </div>
            )}
            <div className="btnWrapper">
              <button type="submit" className="editBtn">
                Edit {userDetails?.isAdmin ? "Client" : "Your"} Profile
              </button>
            </div>
          </form>
        </div>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditProfileWrapperTopLeft {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--dark-1);
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
      box-shadow: 0 2px 2px var(--grey-2);
      border-radius: 10px;
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
          background: var(--blue-2);
          padding: 1.3rem 4rem;
          cursor: pointer;
          &:hover {
            background: var(--red);
          }
        }
      }
      .ProfileBottom {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.4rem 0;
        h3 {
          font-size: 1.8rem;
          color: var(--dark-1);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
      .profileFormBottom {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1.4rem;
        padding: 0.4rem 0;
        @media (max-width:780px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
