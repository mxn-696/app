import { getkind,upload,getlist,addfruit,getthisfruit,putfruit,delfruit } from '@/api/fruit'
import { getToken} from '@/utils/auth'


const state = {
    token: getToken(),
}



const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token
    },

}

const actions={
    getkind({commit}){
        return new Promise((resolve,reject)=>{
            getkind().then((res)=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    upload({commit},data){
        return new Promise((resolve,reject)=>{
            upload(data).then((res)=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    addfruit({commit},data){
        return new Promise((resolve,reject)=>{
            addfruit(data).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }, 
    getlist({commit},data){
        return new Promise((resolve,reject)=>{
            getlist(data).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },

    delfruit({commit},id){
        return new Promise((resolve,reject)=>{
            delfruit(id).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },


    getthisfruit({commit},id){
        return new Promise((resolve,reject)=>{
            getthisfruit(id).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    putfruit({commit},data){
        return new Promise((resolve,reject)=>{
            putfruit(data).then(res=>{
             resolve(res)
         }).catch(err=>{
             reject(err)
         })
     }) 
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}