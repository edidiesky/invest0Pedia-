import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Input } from "../../../../components/forms";
import { Links, Header, Alert } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  AdminUpdateInvestment,
  getinvestmentById,
  clearUserAlertError,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Investment() {
  const { id } = useParams();
  const { marketIsLoading, marketIsError, market, marketIsSuccess } =
    useSelector((store) => store.market);
  const dispatch = useDispatch();

  const {
    isLoading,
    investmentDetails,
    investment,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.investment);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getinvestmentById(id));
  }, [id]);

  const [formdata, setFormData] = useState({
    price: "",
    plan: "",
    endDate: "",
    volume: "",
    startDate: 0,
    profit: "",
    image: "",
    rate: "",
    investors: 0,
    network: 0,
    companies: 0,
    countries: 0,
  });

  useEffect(() => {
    if (investmentDetails) {
      const {
        price,
        plan,
        endDate,
        volume,
        startDate,
        profit,
        image,
        rate,
        network,
        companies,
        countries,
        investors,
      } = investmentDetails;

      setFormData({
        price,
        plan,
        endDate,
        volume,
        startDate,
        profit,
        image,
        rate,
        investors,
        network,
        companies,
        countries,
        investors,
      });
    }
  }, [investmentDetails, setFormData]);

  const inputData = [
    {
      id: 1,
      name: "price",
      placeholder: "Investment Price",
      type: "number",
      text: "Investment Price",
    },
    {
      id: 2,
      name: "profit",
      placeholder: "Investment Profit",
      type: "number",
      text: "profit",
    },
    {
      id: 3,
      name: "rate",
      placeholder: "Investment rate",
      type: "number",
      text: "rate",
    },
    {
      id: 4,
      name: "volume",
      placeholder: "Investment volume",
      type: "number",
      text: "volume",
    },
    {
      id: 7,
      name: "capacity",
      placeholder: "capacity",
      type: "number",
      text: "Capacity",
    },
    {
      id: 8,
      name: "plan",
      placeholder: "plan",
      type: "text",
      text: "plan",
    },
    {
      id: 9,
      name: "network",
      placeholder: "Network value",
      type: "number",
      text: "Network",
    },
    {
      id: 10,
      name: "countries",
      placeholder: "countries value",
      type: "number",
      text: "countries",
    },
    {
      id: 11,
      name: "investors",
      placeholder: "investors value",
      type: "number",
      text: "investors",
    },
  ];

  const [tier, setTier] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    // get the file
    const file = e.target.files[0];
    setUploading(true);
    // create formdata)
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true)
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/v1/upload", formData, config);
      setImage(data);
      console.log(data);  
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const data = { ...formdata, tier, image };
  // handling the users profile update
  const handleUpdateInvest = (e) => {
    e.preventDefault();
    dispatch(AdminUpdateInvestment(formdata));
  };

  // navigate back to the user dashboard when update is successfull
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/dashboard/investment-list')
      }, 6000);
    }
  }, [isSuccess, navigate]);

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
      {/* <Header text={"Customer Investment"} /> */}
      <MarketContainer>
        <div className="profileWrapper">
          {marketIsError && (
            <Message alertText={alertText} alertType={alertType} />
          )}
          <div className="EditMarketWrapperTopLeft ">
            <h3>Manage Investment</h3>
            
          </div>

          <form className="profileForm shadow" onSubmit={handleUpdateInvest}>
            <div className="profileFormBottom">
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
              <div className="column flex gap-1 w-100">
                <h5 className="fs-12">Tiers</h5>
                <select
                  className="select"
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                >
                  <option value="tier1">tier1</option>
                  <option value="tier2">tier2</option>
                  <option value="tier3">tier3</option>
                </select>
              </div>
              <div className="column flex gap-1 w-100">
                <h5 className="fs-12">Image</h5>
                <label className="selectLabel" htmlFor="upload">
                  Upload File here{" "}
                  {uploading ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress color="success" size={30} />
                    </Box>
                  ) : (
                    <FaFileUpload />
                  )}
                  <input
                    type="file"
                    id="upload"
                    placeholder="Product Image"
                    autoComplete="off"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                    multiple
                  />
                </label>
              </div>
            </div>
            <div className="btnWrapper">
              <button type="submit" className="editBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </MarketContainer>
    </>
  );
}

const MarketContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditMarketWrapperTopLeft {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      .MarketBottom {
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
        .select {
          height: 4.5rem;
          border-radius: 40px;
        }
        .selectLabel {
          height: 4.5rem;
          border-radius: 40px;
          border: 1px solid #222;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          cursor: pointer;
          font-weight: 400;
          gap: 1rem;
        }
      }
    }
  }
`;
