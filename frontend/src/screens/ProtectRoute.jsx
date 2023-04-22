import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
 const ProtectRoute =({children})=> {
  // const navigate = useNavigate()
 const {userInfo} = useSelector(store=> store.user)
 if (!userInfo) {
  return <Navigate to='/page-login'/>
 }

 return (
  children
  )
}

export default ProtectRoute


