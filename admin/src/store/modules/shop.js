import { getkind, upload, getlist, addshop, getthisshop, putshop, delshop } from '@/api/shop'
import { getToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }

}

const actions = {
  getkind({ commit }) {
    return new Promise((resolve, reject) => {
      getkind().then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  upload({ commit }, data) {
    return new Promise((resolve, reject) => {
      upload(data).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  addshop({ commit }, data) {
    return new Promise((resolve, reject) => {
      addshop(data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getlist({ commit }, data) {
    return new Promise((resolve, reject) => {
      getlist(data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  delshop({ commit }, id) {
    return new Promise((resolve, reject) => {
      delshop(id).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getthisshop({ commit }, id) {
    return new Promise((resolve, reject) => {
      getthisshop(id).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  putshop({ commit }, data) {
    return new Promise((resolve, reject) => {
      putshop(data).then(res => {
        resolve(res)
      }).catch(err => {
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
