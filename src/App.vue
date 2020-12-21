<template>
  <div id="app">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import axios from 'axios'



export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return{
      questions:[]
    }
  },
  created() {
      //console.log("helloooooo")
      axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
      .then(res => console.log(this.questions=res.data.results))
      console.log(this.questions)
    }
  // methods: {
    
  // }
}
</script>

<style>

</style>
