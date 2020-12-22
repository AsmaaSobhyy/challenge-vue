<template>
    <div class ='container my-5' v-if="isLoaded">
        <div class="card" style="width: 95%;">
            <div class="card-header">
                {{this.questions[this.id]['question']}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" v-model="answerid" value="0">
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[0]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" v-model="answerid" value="1" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[1]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" v-model="answerid" value="2" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[2]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" v-model="answerid" value= '3' >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[3]}}
                    </label>
                </li>
                
            </ul>
            <div class="card-footer">
                <button class="btn btn-dark mx-2" v-bind:class="{ disabled:page <= 1}" v-on:click="onPrev" >prev</button>
                <button class="btn btn-dark" v-bind:class="{ disabled:page >= amount}" v-on:click="onNext">next</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: "Question",
    data(){
        return{
        api:"https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple",
        amount:0,
        questions:[],
        id:1,
        page:1,
        answers:[],
        answerid:'',
        chosen:[],
        answeredn:0,
        isLoaded:false

        }
        
    },
    methods:{
        // saves the chosen value and add answered count, unchicks next page we're going to if not answered
        takeValue(toid){
            if(this.answers[this.answerid]){
                if(this.chosen[this.id] == ''){
                  this.answeredn++
                }
                this.chosen[this.id]=this.answers[this.answerid]
                
            }
            if(this.chosen[toid]==''){
                this.unCheck()
            }
        },
        onNext(){
            this.takeValue(this.id+1)
            this.page=this.page + 1
            this.$router.push({ path: `/question/${this.page}` })
            this.updateData()
            console.log(this.answeredn)
        },
        onPrev(){
            this.takeValue(this.id-1)
            this.page=this.page -1
            this.$router.push({ path: `/question/${this.page}` })
            this.updateData()
        },
        updateData(){
            this.id = location.pathname.split('/')[2]-1
            this.page=this.id+1
            this.answers=this.questions[this.id]['incorrect_answers']
            this.answers.push(this.questions[this.id]['correct_answer'])
            this.answers.sort()
            // console.log(this.id)
            // console.log(this.answers)
            console.log(this.questions[this.id]['correct_answer'])
        },
        fillchosen(){
            for (var i = 0; i < this.amount; i++) {
                this.chosen.push('')
            }
        },
        unCheck(){
            this.answerid = false;
        }
    },
        
    created() {
        axios.get(this.api)
        .then(res =>{
        this.questions = res.data.results
        this.updateData()
        this.isLoaded=true
        this.amount=this.api.split('amount=')[1].split('&')[0]
        this.fillchosen()
        console.log(this.amount)

        })
        }
        
    }
</script>
 
<style scoped>

</style>