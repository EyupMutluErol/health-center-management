import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import TakeAppointment from './pages/patient/TakeAppointment/TakeAppointment/'; 
import AppointmentHistory from './pages/patient/AppointmentHistory/AppointmentHistory';
import './styles/global.css';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {


  return (
    <>
    
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

            
          </Routes>

    </>
  )
}

export default App
