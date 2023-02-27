import { redirect } from "react-router-dom";

export function getTokenDuration(){
    const storedExpiryDate = localStorage.getItem('expire');
    const expiryDate = new Date(storedExpiryDate);
    const currentDate = new Date();
    const duration = expiryDate.getTime() - currentDate.getTime();
    return duration;
}

export function getAuthToken(){
    const token = localStorage.getItem('token');

    if(!token){   return null;   }
    const tokenDuration = getTokenDuration();

    if(tokenDuration<0){
        return 'expired';
    }
    return token;
}

export function loaderToken(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){   return redirect('/auth');   }
    return true;
}