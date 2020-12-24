import axios from 'axios'

const state={
    api:"https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple",
    questions:[],
    amount:0,
    id:-1,
    chosen:[],
    answeredn:0,
    chosenids:[],
    currentAnswers:[]
}

const getters={
    getQuestion : (state) => state.questions[state.id],
    getQuestions : (state) => state.questions,
    getallchosen : (state) => state.chosen,
    getId : (state) => state.id,
    getAmount : (state) => state.amount,
    getChosen : (state) => state.chosen[state.id],
    getChosenid : (state) => state.chosenids[state.id],
    getAnsweredn : (state) => state.answeredn,
    getcurrentAnswers:(state) => state.currentAnswers
}

const actions ={
    //initial fill chosen array
    async fillchosen({ commit }){
        let X =[]
        for (var i = 0; i < state.amount; i++) {
            await X.push('')
        }
        await commit('setChosen',X)
        //console.log(state.chosen)
    },
    async fillchosenids({ commit }){
        let X =[]
        //console.log(state.amount)
        for (var i = 0; i < state.amount; i++) {
           await X.push(-1)
        }
        commit('setChosenids',X)
        //console.log(state.chosenids)
    },
    async fetchQuestions({ commit }){
        const response = await axios.get(state.api)
        //console.log(response.data.results)

        commit('setQuestions',response.data.results)
    },
    async fillAmount({ commit }){
        await commit('setAmount',state.api.split('amount=')[1].split('&')[0])
        //console.log(state.amount)

    },
    async fillId({commit},id){
        await commit('setId',id)
    },
    //add chosen value to array
    async editChosen({ commit },value){
        // console.log(value)
        await commit('setChosed',value)

    },
    async editChosenid({ commit },value){
        await commit('setChosedid',value)

    },
    async setAnsweredn({ commit }){
        let newn = await state.answeredn + 1
        // console.log(newn)
        await commit('fillAnsweredn',newn)
        // console.log('answared num')
        // console.log(state.answeredn)
    },
    setCurrentAnswers({ commit }){
        let ans=[]
        for(var i=0;i<3;i++){
            ans.push(state.questions[state.id]['incorrect_answers'][i]) 
        }
        ans.push(state.questions[state.id]['correct_answer'])
        ans.sort()
        commit('fillcurrentAnswered',ans)
    }

}

const mutations={
    setQuestions:(state,questions)=> (state.questions = questions),
    setChosen : (state,emptyarr) => (state.chosen = emptyarr),
    setChosenids : (state,emptyarr) => (state.chosenids = emptyarr),
    setAmount : (state,amount) => (state.amount = amount),
    setId : (state,id) => (state.id = id),
    setChosed : (state,value) => (state.chosen[state.id]=value),
    setChosedid : (state,value) => (state.chosenids[state.id]=value),
    fillAnsweredn : (state,value) => (state.answeredn=value),
    fillcurrentAnswered :(state,arr) => (state.currentAnswers = arr)
}

export default {
    state,
    getters,
    actions,
    mutations
}