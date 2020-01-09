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

// import React from 'react'

//  export const isAuthenticated =() =>{
//     return (
//         <div>
            
//         </div>
//     )
// }


// export default isAuthenticated;