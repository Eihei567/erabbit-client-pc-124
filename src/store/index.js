import { createStore } from 'vuex'
import cart from './modules/cart'
import catagory from './modules/category'
import user from './modules/user'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    catagory
  }
})
