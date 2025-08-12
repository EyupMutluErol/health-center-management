import React, { useContext } from 'react'
import { AppointmentContext } from '../../context/AppointmentContext'
import { getPatientAppointments } from '../../services/appointmentService'

function Appointments() {
    const appointments = getPatientAppointments();
  return (
    <div>
      {appointments.length > 0 ? (
                appointments.map((appt, index) => (
                    <div key={index}>
                        <p>{appt.clinic}</p>
                        <p>{appt.doctor}</p>
                        <p>{appt.date}</p>
                        <p>{appt.time}</p>
                        <p>{appt.note}</p>

                    </div>
                ))
            ) : (
                <p>Randevu bulunamadı</p>
            )}
    </div>
  )
}

export default Appointments
