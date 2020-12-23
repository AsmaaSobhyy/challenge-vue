<template>
  <div id="app" class="container my-5">
    <button class = "btn btn-dark mx-auto" v-on:click= "startQ" >Start Test</button>
    <!-- <i class="fas fa-info-circle"></i> -->
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
  },
  computed:mapGetters(['getQuestion']),
  methods:{
      ...mapActions(["fetchQuestions",'fillAmount','fillchosen','fillchosenids']),
    startQ(){
      this.$router.push({ path: `/question/1` })
    }
  },
  async created(){
    await this.fetchQuestions()
    await this.fillAmount()
    await this.fillchosen()
    await this.fillchosenids()
  }
  }
</script>

<style>

</style>
