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
                <!-- <button class="btn btn-dark mx-2" v-bind:class="{ disabled:page <= 1}" v-on:click="onPrev" >prev</button>
                <button class="btn btn-dark" v-bind:class="{ disabled:page >= amount}" v-on:click="onNext">next</button> -->
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
        answerid:''

        }
        
    },
    computed:mapGetters(['getQuestion','getId']),
    methods:{
        ...mapActions(['fillId']),
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
            // this.takeValue(this.id+1)
            // this.page=this.page + 1
            // this.$router.push({ path: `/question/${this.page}` })
            // this.updateData()
            // console.log(this.answeredn)
            console.log('next')
        },
        onPrev(){
            // this.takeValue(this.id-1)
            // this.page=this.page -1
            // this.$router.push({ path: `/question/${this.page}` })
            // this.updateData()
            console.log('prev')
        },
        updateData(){
            this.answers=this.getQuestion[this.getId]['incorrect_answers']
            this.answers.push(this.getQuestion[this.getId]['correct_answer'])
            this.answers.sort()
            console.log(this.questions[this.getId]['correct_answer'])
        },
        unCheck(){
            this.answerid = false;
        }
    },
        
    created() {
        this.fillId(location.pathname.split('/')[2]-1)
        }
        
    }
</script>
 
<style scoped>

</style>