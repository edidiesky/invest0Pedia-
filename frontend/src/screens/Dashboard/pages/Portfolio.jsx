import React, { useEffect } from 'react'
import {
  getAllinvestment,
  getAllMarket
} from "../../../Features";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import Portfolioindex from '../components/portfolio'

export default function Portfolio() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllinvestment())
    dispatch(getAllMarket())
  }, [])
  return (
    <PortfolioContainer>
      <Portfolioindex/>
    </PortfolioContainer>
  )
}

const PortfolioContainer = styled.div`
    width: 100%;
`
