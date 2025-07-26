const AUTH_KEY = 'isAuthenticated';
const EMAIL_KEY = 'email';

export function setAuth(data){
    localStorage.setItem(AUTH_KEY,'true');
    localStorage.setItem(EMAIL_KEY,data.email);
}

export function clearAuth(){
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(EMAIL_KEY);
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
}

export function getUserEmail() {
    return localStorage.getItem(EMAIL_KEY);
}