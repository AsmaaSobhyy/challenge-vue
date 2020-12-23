<template>
    <div class ='container my-5'>
        <div class="card" style="width: 95%;">
            <div class="card-header">
                {{getQuestion['question']}}
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
                <button class="btn btn-dark mx-2" v-bind:class="{ disabled: (getId+1) <= 1}" v-on:click="onPrev" >prev</button>
                <button class="btn btn-dark" v-bind:class="{ disabled:(getId+1) >= getAmount }" v-on:click="onNext">next</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Question",
    data(){
        return{
        answers:[],
        answerid:'',

        }
        
    },
    computed:mapGetters(['getQuestion','getId','getAmount','getChosen']),
    methods:{
        ...mapActions(['fillId','editChosen','setAnsweredn']),
        // saves the chosen value and add answered count, unchicks next page we're going to if not answered
        takeValue(){
            if(this.answers[this.answerid]){
                if(this.getChosen == ''){
                  this.setAnsweredn()
                }
                this.editChosen(this.answers[this.answerid])
            }
        },
        onNext(){
            this.takeValue(this.getId+1)
            this.fillId(this.getId+1)
            this.$router.push({ path: `/question/${this.getId+2}` })
            this.updateData()
            this.unCheck()
            // console.log(this.answeredn)
        },
        onPrev(){
            this.takeValue(this.getId-1)
            this.fillId(this.getId-1)
            this.$router.push({ path: `/question/${this.getId}` })
            this.unCheck()
            this.updateData()
            
        },
        updateData(){
            this.answers=this.getQuestion['incorrect_answers']
            this.answers.push(this.getQuestion['correct_answer'])
            this.answers.sort()
            console.log(this.getQuestion['correct_answer'])
        },
        unCheck(){
            this.answerid = false;
        }
    },
        
    created() {
        this.fillId(location.pathname.split('/')[2]-1)
        this.id=this.getId
        console.log(this.getId)
        this.updateData()
        }
        
    }
</script>
 
<style scoped>

</style>