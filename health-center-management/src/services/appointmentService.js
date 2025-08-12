const AUTH_KEY = 'isThereAppointment';
const PATIENT_KEY = 'patient'

export function setAppointmentsToLS(data) {
    localStorage.setItem(AUTH_KEY, 'true');
    localStorage.setItem(PATIENT_KEY, JSON.stringify(data));
}

export function getPatientAppointments() {
    return JSON.parse(localStorage.getItem(PATIENT_KEY) || "[]");
}

export function clearAuth() {
    localStorage.removeItem(PATIENT_KEY);
    localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
}
