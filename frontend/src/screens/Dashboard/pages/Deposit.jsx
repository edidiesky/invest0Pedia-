import React, {useState} from 'react'
import styled from 'styled-components'
import Payment from './Payment'

export default function Deposit() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Payment open={open} setOpen={setOpen}/>
    <DepositContainer>
      <div className="depositLeft">
        <div className="card py-4">
          <h3 className='border-bottom px-3 pb-2'>Top Up</h3>
          <div className="cardBottom px-3 flex item-center gap-1">
            <p>Amount:</p>
            <div className="amount flex flex-1">
              <input type="text" placeholder='1.00000' />
              <button onClick={()=> setOpen(true)}>Pay with Bitcoin</button>
            </div>
          </div>
        </div>
      </div>
      <div className="depositRight">
      <div className="card py-4">
          <h3 className='border-bottom px-3 pb-2'>Withdraw</h3>
          <div className="cardBottom px-3 flex item-center gap-1">
            <p>Amount:</p>
            <div className="amount flex flex-1">
              <input type="text" placeholder='1.00000' />
              <button>Req</button>
            </div>
          </div>
        </div>
      </div>
    </DepositContainer>
    </>
  )
}

const DepositContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 2rem;
   @media (max-width:980px) {
    grid-template-columns:1fr;
   }
   .cardBottom {
    /* @media (max-width:980px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
   } */
   }
   .amount {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: flex-start;
    input {
      border: 1px solid var(--grey-1);
      outline: none;
      font-size: 1.6rem;
      height: 100%;
      color: var(--grey-1);
      font-weight: 600;
      font-family: inherit;
      padding: 0 2rem;
      width:100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      &:focus {
        border: 2px solid #222;
      }
    }
    button {
      border: none;
      background-color: var(--primary);
      outline: none;
      height: 100%;
      font-size: 1.3rem;
      color: #fff;
      font-weight: 600;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 0 2rem;
      cursor: pointer;
      font-family: "Sintony", sans-serif;
      &:hover {
        background-color: var(--primary-hover);
      }
    }
   }
   .depositLeft, .depositRight {
    width: 100%;
    .card {
      width:100%;
      box-shadow: 0 2px 3px rgba(0,0,0,.07);
      background-color: #Fff;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-radius: 15px;
    }
   }
`
