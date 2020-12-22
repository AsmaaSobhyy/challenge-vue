<template>
    <div class ='container my-5' v-if="isLoaded">
        <div class="card" style="width: 95%;">
            <div class="card-header">
                {{this.questions[this.id]['question']}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[0]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[1]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[2]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.answers[3]}}
                    </label>
                </li>
            </ul>
            <div class="card-footer">
                <button class="btn btn-dark mx-2" >prev</button>
                <button class="btn btn-dark">next</button>
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
        questions:[],
        id:1,
        answers:[],
        isLoaded:false

        }
        
    },
    created() {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
        .then(res =>{
        this.questions = res.data.results
        this.id = location.pathname.split('/')[2]-1
        this.answers=this.questions[this.id]['incorrect_answers']
        this.answers.push(this.questions[this.id]['correct_answer'])
        this.answers.sort()
        this.isLoaded=true
        console.log(this.answers)
        console.log(this.questions[this.id]['correct_answer'])
        })
        }
        
    }
</script>
 
<style scoped>

</style>