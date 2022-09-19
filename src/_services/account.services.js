import Axios from "./caller.service"


let login = (credential) => {
    return Axios.post('/login',credential)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
   let token = localStorage.getItem('token')
   return !!token 
}

export const accountService = {
   login, saveToken, logout, isLogged
}