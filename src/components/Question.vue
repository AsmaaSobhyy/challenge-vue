<template>
    <div class ='container my-5'>
        <div class="card" style="width: 95%;">
            <div class="card-header">
                {{this.questions[0]['question']}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        {{this.questions[0]['correct_answer']}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        answer 2
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        answer 3
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3" type="radio" name="exampleRadios" id="radio1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        answer 4
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
        questions:[]
        }
    },
    created() {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
        .then(res => this.questions = res.data.results)
       
        }
        
    }
</script>
 
<style scoped>

</style>