<template>
    <div class ='container my-5'>
        <div class="card" style="width: 95%;">
            <div class="card-header">
                {{getQuestion['question']}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3 radio" type="radio" v-model="answerid" value="0" id="0">
                    <label class="form-check-label" for="exampleRadios1">
                        {{getcurrentAnswers[0]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3 radio" type="radio" v-model="answerid" value="1" id="1" >
                    <label class="form-check-label" for="exampleRadios1">
                        {{getcurrentAnswers[1]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3 radio" type="radio" v-model="answerid" value="2" id ='2' >
                    <label class="form-check-label" for="exampleRadios1">
                        {{getcurrentAnswers[2]}}
                    </label>
                </li>
                <li class="list-group-item px-2">
                    <input class="form-check-input mx-3 radio" type="radio" v-model="answerid" value= '3' id='3'>
                    <label class="form-check-label" for="exampleRadios1">
                        {{getcurrentAnswers[3]}}
                    </label>
                </li>
                
            </ul>
            <div class="card-footer">
                <button class="btn btn-dark mx-2" v-bind:class="{ disabled: (getId+1) <= 1}" v-on:click="onPrev" >prev</button>
                <button class="btn btn-dark" v-bind:class="{ disabled:(getId+1) >= getAmount }" v-on:click="onNext">next</button>
            </div>
        </div>
        <span class="text-muted"></span>
        <button class="btn btn-dark my-5" v-bind:class="{ disabled: !((getAnsweredn >= getAmount-1 ) && this.getChosenid == -1)  }" v-on:click="onSubmit" >Submit</button>
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
    computed:mapGetters(['getQuestion','getId','getAmount','getChosen','getChosenid','getallchosen','getallchosen','getAnsweredn','getcurrentAnswers']),
    methods:{
        ...mapActions(['fillId','editChosen','setAnsweredn','editChosenid','setCurrentAnswers']),
        // saves the chosen value and add answered count, unchicks next page we're going to if not answered
        async takeValue(){
            if(this.getcurrentAnswers[this.answerid]){
                if(this.getChosenid == -1){
                    //console.log('add')
                  await this.setAnsweredn()
                }
                await this.editChosen(this.getcurrentAnswers[this.answerid])
                await this.editChosenid(this.answerid)
            }
            
            
            

        },
        goto(toid){
            //console.log(toid)
            this.fillId(toid)
            this.$router.push({ path: `/question/${toid+1}` })
            this.updateData()
        },
        async onNext(){
            await this.takeValue()
            this.goto(this.getId+1)
            if(this.getChosenid == -1){
                this.unCheck()
            }

            // console.log(this.getallchosen)
            // console.log(this.getAnsweredn)

        },
        async onPrev(){
            await this.takeValue()
            this.goto(this.getId-1)
            if(this.getChosenid == -1){
                this.unCheck()
            }
            // console.log(this.getallchosen)
            // console.log(this.getAnsweredn)

        },
        updateData(){
            this.setCurrentAnswers()
            //this.answers.sort()
            //console.log(this.getQuestion['correct_answer'])
            //console.log(this.getId)
            
        },
        unCheck(){
            //document.getElementsByClassName("radio").checked ==false
            this.answerid =false
        },
        async onSubmit(){
            await this.takeValue()
            this.$router.push({ path: `/results` })

        }
    },
        
    created() {
        this.fillId(location.pathname.split('/')[2]-1)
        //console.log(this.getId)
        this.updateData()
        //console.log(this.getallchosen)
        }
        
    }
</script>
 
<style scoped>

</style>