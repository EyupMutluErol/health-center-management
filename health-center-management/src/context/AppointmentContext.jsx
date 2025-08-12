import { createContext, useState } from "react";

export const AppointmentContext = createContext();


export default function AppointmentContextProvider({children}) {
    const [appointments,setAppointments] = useState([]);
  return (
    <AppointmentContext.Provider value={{appointments,setAppointments}}>
        {children}
    </AppointmentContext.Provider>
  )
}


