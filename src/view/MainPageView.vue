<template lang="">
    <div class = 'text'>
        <h1>This is a Main Page!</h1>
        <h2>If you're here, you're authorized</h2>
    </div>


    <div>
     <Users />
    </div>


    <div>
    <Posts />
    </div>
    
</template>
<script setup>
import Users from '../components/Users.vue';
import Posts from '../components/Posts.vue';

</script>
<style scoped>
.text{
    text-align: center;
    margin-top: 15px;
    color: hsla(160, 100%, 37%, 1);
}
    
</style>