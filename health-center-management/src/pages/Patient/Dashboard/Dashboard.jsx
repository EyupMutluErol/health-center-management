import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {getUserInfo } from '../../../services/authService';

function Dashboard() {
    const {user} = useContext(AuthContext);
    const userInfo = JSON.parse(getUserInfo());
  return (
    <div>
      Hoşgeldin {userInfo.email}
      
    </div>
  )
}

export default Dashboard
