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
                <td>{{getallchosen[index]}}</td>
                <td>{{ question['question'] === getallchosen[index] ? 1 : 0 }}</td>
                </tr>
                
            </tbody>
            </table>
            <button class="btn btn-dark">Restart</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Results",
    computed:mapGetters(['getQuestions','getAmount','getallchosen','getAnsweredn']),
    methods:{
        ...mapActions(['fillId','editChosen','setAnsweredn','editChosenid']),
    },
    created(){
        console.log(this.getallchosen)
    }
    
}
</script>
 
<style scoped>
</style>