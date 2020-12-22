import axios from 'axios'

const state={
    api:"https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple",
    questions:[],
    amount:0,
    id:0,
    chosen:[],
    answeredn:0,
}

const getters={
    getQuestion : (state) => state.questions[state.id],
    getId : (state) => state.id
}

const actions ={
    fillchosen({ commit }){
        let X =[]
        for (var i = 0; i < this.amount; i++) {
            X.push('')
        }
        commit('setChosen',X)
    },
    async fetchQuestions({ commit }){
        const response = await axios.get(state.api)
        //console.log(response.data.results)
        commit('setQuestions',response.data.results)
    },
    fillAmount({ commit }){
        commit('setAmount',state.api.split('amount=')[1].split('&')[0])
    },
    fillId({commit},id){
        commit('setId',id)
    }

}

const mutations={
    setQuestions:(state,questions)=> (state.questions = questions),
    setChosen : (state,emptyarr) => (state.chosen = emptyarr),
    setAmount : (state,amount) => (state.amount = amount),
    setId : (state,id) => (state.id = id)
}

export default {
    state,
    getters,
    actions,
    mutations
}