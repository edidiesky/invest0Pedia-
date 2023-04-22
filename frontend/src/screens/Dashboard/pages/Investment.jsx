import React, {useEffect} from "react";
import styled from "styled-components";
import {
  Alert,
} from "../components";
import {getAllCoinCart} from "../../../Features"
import Investmentindex from "../components/investment";
import { useSelector, useDispatch } from "react-redux";

import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Investments() {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCoinCart())
  }, [])

  
  const {
    coincartIsLoading,
    coincartIsError,
    coincartIsSuccess,
    alertText,
    alertType
  } = useSelector((store) => store.coincart);

  return (
    <InvestmentsContainer>
      
      {coincartIsError && <Alert alertText={alertText} alertType={alertType} />}
      {coincartIsLoading ? <LoaderIndex loading={coincartIsLoading} />  : (
        <Investmentindex />
      )}
      
    </InvestmentsContainer>
  );
}

const InvestmentsContainer = styled.div`
  width: 100%;
`;
