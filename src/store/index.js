import Vue from 'vue'
import Vuex from 'vuex'
import Questions from './modules/Questions'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        Questions
    }
})