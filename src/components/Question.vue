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
                <button class="btn btn-dark mx-2" v-on:click="onPrev" >prev</button>
                <button class="btn btn-dark" v-on:click="onNext">next</button>
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
        page:1,
        answers:[],
        isLoaded:false

        }
        
    },
    methods:{
        onNext(){
            this.page=this.page + 1
            this.$router.push({ path: `/question/${this.page}` })
            this.updateData()
        },
        onPrev(){
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
        }
    },
        
    created() {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
        .then(res =>{
        this.questions = res.data.results
        this.updateData()
        this.isLoaded=true
        })
        }
        
    }
</script>
 
<style scoped>

</style>