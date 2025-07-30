import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {getUserInfo } from '../../../services/authService';
import Navbar from '../../../components/Navbar/Navbar';
import Login from '../../Auth/Login/Login'

function Dashboard() {
  const userInfo = JSON.parse(getUserInfo());
  return (
    <div>
      {userInfo?.email ? <Navbar userInfo={userInfo}/> : <Login/>}
      
    </div>
  )
}

export default Dashboard
