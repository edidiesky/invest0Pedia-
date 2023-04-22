import React from 'react'
import BottomIndex from './bottom'
import CenterIndex from './center'
import TopIndex from './top'

export default function Portfolioindex() {
  return (
    <div className='flex column gap-2 item-start'>
        <TopIndex/>
        <CenterIndex/>
        <BottomIndex/>
    </div>
  )
}
