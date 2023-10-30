<template lang="">
    <div class = "Box">
        <h3 class = "title">Users</h3>
        <div v-for="(el, index) in listUsers " class = "inBox">
           
            <div :key="el.id">
                {{index + 1}} - {{el.name}}
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listUsers: []
        }
    },

    mounted() {
        fetch('http://localhost:3004/allUsers')
        .then(res => res.json())
        .then(data =>{
           this.listUsers = data;
        })
    },
    
}
</script>
<style scoped>
.Box{
    margin: 3% auto;
    border: 1px solid hsla(160, 100%, 37%, 1);
    border-radius: 10px;
    width: 20%;

}
.inBox{
    padding: 2%;
}
.title{
    text-align: center;
    border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}
    
</style>