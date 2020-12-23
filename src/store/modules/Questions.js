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
    getId : (state) => state.id,
    getAmount : (state) => state.amount,
    getChosen : (state) => state.chosen[state.id]
}

const actions ={
    //initial fill chosen array
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
    },
    //add chosen value to array
    editChosen({ commit },value){
        commit('setChosed',value)

    },
    setAnsweredn({ commit }){
        commit('fillAnsweredn',state.answeredn+1)
        console.log(state.answeredn)
    }

}

const mutations={
    setQuestions:(state,questions)=> (state.questions = questions),
    setChosen : (state,emptyarr) => (state.chosen = emptyarr),
    setAmount : (state,amount) => (state.amount = amount),
    setId : (state,id) => (state.id = id),
    setChosed : (state,value) => (state.chosen[state.id],value),
    fillAnsweredn : (state,value) => (state.answeredn,value)
}

export default {
    state,
    getters,
    actions,
    mutations
}