<template lang="">
    <div class = "container">
       <form @submit.prevent = 'addUser' class = "form">
        <input placeholder = "Come up with a name" type="text">
        <input id = 'password' placeholder = "Come up with a password" type="password">
        <button>Sign Up</button>
       </form>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
data() {
    return {
        router: useRouter()
    }
},

   methods: {
    addUser(e){
        const Obj = {
            name: e.target[0].value,
            password: e.target[1].value
        }
        
        fetch('http://localhost:3004/newUser',{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(Obj),
        })
        .then(res=>res.json())
        .then(data => {
            localStorage.setItem('name', data.name)
            localStorage.setItem('id', data.id)
            this.router.push({name: 'MainPage'})
        })

    }
   },
}

    
</script>
<style scoped>   
.form{
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
} 

.form input{
    margin-top: 10%;
    outline: none;
    border: 0;
    border-bottom: 1px solid mediumseagreen;
    width: 100%;
    font-size: medium;
    padding-bottom: 7px;
    margin-bottom: 5%;
    border-radius: 10px;
}

.form button{
    margin-top: 10%;
    display: block;
    margin: 0 auto;
    width: 50%;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid  darkblue;
    background-color: hsla(160, 100%, 37%, 1);
}

.form button:hover{
    background-color: hsla(160, 100%, 37%, 0.2);
    transition: 0.4s;
}

</style>