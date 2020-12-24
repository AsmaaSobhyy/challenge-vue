<template>
    <div class = "container my-5"> 
        <table class="table border">
                
            <tbody>
                <tr class="text-muted py-5">
                   <td colspan="4">Results</td>
                </tr>
                <tr class="table-active font-weight-light">
                <td scope="col">The Question</td>
                <td scope="col">Correct Answer</td>
                <td scope="col">Your Answer</td>
                <td scope="col">Points</td>
                </tr>
                <tr class ="text-dark" v-for="(question, index) in getQuestions" :key="`question-${index}`" >
                <td scope="row">{{question['question']}}</td>
                <td >{{question['correct_answer']}}</td>
                <td class="text-success" v-bind:class="{ 'text-danger' :!(question['correct_answer'] === getallchosen[index]) }">{{getallchosen[index]}}</td>
                <td>{{ (question['correct_answer'] === getallchosen[index]) ? 1 : 0 }}</td>
                </tr>
                <tr class="table-active font-weight-light">
                <td colspan="3" >Total Points</td>
                <td scope="col">{{points}}</td>
                </tr>
                
            </tbody>
            </table>
            <button class="btn btn-dark" v-on:click="onRestart">Restart</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Results",
    data(){
        return{
        points:0

        }
        
    },
    computed:{
        ...mapGetters(['getQuestions','getAmount','getallchosen','getAnsweredn']),
        classObject: function () {
            return {
            'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },
    methods:{
        ...mapActions(["fetchQuestions",'fillAmount','fillchosen','fillchosenids']),
        async onRestart(){
            await this.fetchQuestions()
            await this.fillAmount()
            await this.fillchosen()
            await this.fillchosenids()
            this.$router.push({ path: `/` })
        }
    },
    created(){
        //console.log(this.getallchosen)
        for(var i=0;i<this.getAmount;i++){
            if(this.getQuestions[i]['correct_answer']===this.getallchosen[i]){
                this.points++
            }
        }
    }
    
}
</script>
 
<style scoped>
</style>