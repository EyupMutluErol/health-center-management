const AUTH_KEY = 'isAuthenticated';
const USER_KEY = 'user'

export function setAuth(data){
    localStorage.setItem(AUTH_KEY,'true');
    localStorage.setItem(USER_KEY,JSON.stringify({
        email:data.email,
        role:data.role
    }));
}

export function clearAuth(){
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
}

export function getUserInfo() {
    return localStorage.getItem(USER_KEY);
} 