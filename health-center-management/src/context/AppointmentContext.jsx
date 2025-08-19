import { createContext, useState } from "react";
import { getPatientAppointments } from "../services/appointmentService";

export const AppointmentContext = createContext();


export default function AppointmentContextProvider({children}) {
    const [appointments,setAppointments] = useState(()=>{
      const saved = getPatientAppointments();
      return saved ? JSON.parse(saved) : [];
    });
  return (
    <AppointmentContext.Provider value={{appointments,setAppointments}}>
        {children}
    </AppointmentContext.Provider>
  )
}


