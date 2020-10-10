import Cookies from 'js-cookie'
const ToKenKey = 'token'
const User='username'
const Ads='address'

export function setToken(token){
    return Cookies.set(ToKenKey,token)

}
export function getToken(){
    return Cookies.get(ToKenKey)
}
export function removeToken(){
    return Cookies.remove(ToKenKey)
}

export function getUser(){
    return Cookies.get(User)
}
export function setUser(username){
    return Cookies.set(User,username)
}
export function removeUser(){
    return Cookies.remove(User)
}

export function getAds(){
    return Cookies.get(Ads)
}
export function setAds(address){
    return Cookies.set(Ads,address)
}
export function removeAds(){
    return Cookies.remove(Ads)
}

