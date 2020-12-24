<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand mx-5" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <button class="nav-link btn" v-bind:class="{ disabled: (getId+1) <= 1 && getId > getAmount }" v-on:click="onPrev" >Previous</button>
                    </li>
                    <li class="nav-item">
                    <i class="fas fa-info-circle"></i>
                    <a class="nav-link" >
                    {{this.getId+1}}/10</a>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link btn" v-bind:class="{ disabled:(getId+1) >= getAmount && getId >=1 }" v-on:click="onNext" >next</button>
                    
                    </li>
                    <li class="nav-item">
                    <button class="nav-link btn" v-bind:class="{ disabled: !((getAnsweredn >= getAmount ) && (this.answerid != '') && this.getChosenid == -1)  }" v-on:click="onSubmit" >Results</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
//import fontawesome from "@fortawesome/fontawesome";
//import brands from "@fortawesome/fontawesome-free-brands";
// import 1 icon if you just need this one. Otherwise you can import the whole module
//import faSpinner from "@fortawesome/fontawesome-free-solid/faSpinner"; 
//import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
    name: "Navbar",
    // components: {
    //     FontAwesomeIcon
    //     },
    data(){
        return{
        answers:[],
        answerid:'',
        }
    },
    computed:mapGetters(['getQuestion','getId','getAmount','getChosen','getChosenid','getallchosen','getallchosen','getAnsweredn']),
    methods:{
        ...mapActions(['fillId','editChosen','setAnsweredn','editChosenid','setCurrentAnswers']),
    
    async takeValue(){
            if(this.answers[this.answerid]){
                if(this.getChosenid == -1){
                    //console.log('add')
                  await this.setAnsweredn()
                }
                await this.editChosen(this.answers[this.answerid])
                await this.editChosenid(this.answerid)
                // console.log('answerid')
                // console.log(this.getChosenid)
                // console.log(this.answerid)
                // console.log(this.getChosen)
                // console.log(this.answers[this.answerid])
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
            this.unCheck()
            

            // console.log(this.getallchosen)
            // console.log(this.getAnsweredn)

        },
        async onPrev(){
            await this.takeValue()
            this.goto(this.getId-1)
            this.unCheck()
            // console.log(this.getallchosen)
            // console.log(this.getAnsweredn)

        },
        updateData(){
            this.setCurrentAnswers()
            
        },
        unCheck(){
            //document.getElementsByClassName("radio").checked ==false
            this.answerid =false
        },
        async onSubmit(){
            await this.takeValue()
            this.$router.push({ path: `/results` })

        }
    }

}
</script>
 
<style scoped>

</style>