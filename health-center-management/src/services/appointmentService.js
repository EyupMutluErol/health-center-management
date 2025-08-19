const PATIENT_KEY = 'patient'

export function setAppointmentsToLS(data) {
    localStorage.setItem(PATIENT_KEY, JSON.stringify(data));
}

export function getPatientAppointments() {
    return localStorage.getItem(PATIENT_KEY);
}



