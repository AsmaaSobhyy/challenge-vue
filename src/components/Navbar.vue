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
                    <button class="nav-link btn">Previous</button>
                    </li>
                    <li class="nav-item">
                    <i class="fas fa-info-circle"></i>
                    <a class="nav-link" >
                    {{this.getId+1}}/10</a>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link btn">next</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link btn">Results</button>
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
    computed:mapGetters(['getQuestion','getId','getAmount','getChosen','getChosenid','getallchosen','getallchosen','getAnsweredn']),
    methods:{
        ...mapActions(['fillId','editChosen','setAnsweredn','editChosenid']),
    }

}
</script>
 
<style scoped>

</style>