<template>
    <div class = "container my-5"> 
        <table class="table border">
                
            <tbody>
                <tr class="text-muted py-5">
                   <td colspan="4">Results</td>
                </tr>
                <tr class="table-active font-weight-light">
                <td scope="col">The Question</td>
                <td scope="col">Correct Answer</td>
                <td scope="col">Your Answer</td>
                <td scope="col">Points</td>
                </tr>
                <tr class ="text-dark">
                <td scope="row">1</td>
                <td >Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                
            </tbody>
            </table>
            <button class="btn btn-dark">Restart</button>
    </div>
</template>

<script>
export default {
    name: "Results"
    
}
</script>
 
<style scoped>
</style>