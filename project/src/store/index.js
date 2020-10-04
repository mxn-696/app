import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        token:'',
        username:''
    },
    mutations:{
        set_username:(state,username)=>{
            state.username=username
        }
    }
})





export default store