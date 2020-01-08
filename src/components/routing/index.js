export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
            return false
    }
    if(localStorage.token){
        return localStorage.token
    }else{
        return false
    }
}