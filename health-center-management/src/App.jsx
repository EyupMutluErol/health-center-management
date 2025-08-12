import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import TakeAppointment from './pages/Patient/TakeAppointment/TakeAppointment/'; 
import AppointmentHistory from './pages/Patient/AppointmentHistory/AppointmentHistory';
import Dashboard from './pages/Patient/Dashboard/Dashboard';
import './styles/global.css';
import PrivateRoute from './components/Routes/PrivateRoute';
import AuthContextProvider from './context/AuthContext';
import AppointmentContextProvider from './context/AppointmentContext';

function App() {


  return (
    <AppointmentContextProvider>
    <AuthContextProvider>

          <Routes>
            
            <Route path='/' element={<Login />} />

            <Route path='/login' element={<Login />} />


            <Route path='/register' element={<Register />} />


            <Route path='/appointments' element={
              <PrivateRoute>
                <TakeAppointment />
              </PrivateRoute>
              } />


            <Route path='/history' element={
              <PrivateRoute>
                <AppointmentHistory />
              </PrivateRoute>
              } />

              <Route path='/dashboard' element={<Dashboard/>}/>
              
          </Routes>

    </AuthContextProvider>
    </AppointmentContextProvider>

  )
}

export default App
