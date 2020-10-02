import Cookies from 'js-cookie'
const ToKenKey = 'token'

export function setToken(token){
    return Cookies.set(ToKenKey,token)

}
export function getToken(){
    return Cookies.get(ToKenKey)
}
export function removeToken(){
    return Cookies.remove(ToKenKey)
}