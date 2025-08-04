import { AuthContext } from '../../../context/AuthContext'
import {getUserInfo } from '../../../services/authService';
import Navbar from '../../../components/Navbar/Navbar';
import Login from '../../Auth/Login/Login'

import DashboardBody from '../../../components/DashboardBody/DashboardBody';

function Dashboard() {
  
  const userInfo = JSON.parse(getUserInfo());
  return (
    <div>
      {userInfo?.email ? <Navbar userInfo={userInfo}/> : <Login/>}
      
      <DashboardBody/>
    </div>
  )
}

export default Dashboard
