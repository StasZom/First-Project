<template lang="">
  <div class = 'NavBar'>  
<!--  -->
<ul>
    <li >
 <router-link :to="{name: 'MainPage'}">MainPage</router-link>
    </li>
<!--  -->
    <li >
<router-link :to="{name: 'Chat'}">Chat</router-link>
    </li>
<!--  -->
    </ul>
    <div class = 'Entering'>
    <ul>
    <li>
<router-link :to="{name: 'SignIn'}">Sign In</router-link>
    </li>
<!--  -->
    <li>
      <router-link :to = "{name: 'SignUp'}">Sign Up</router-link>

    </li>
  </ul>
  </div>
   </div>

   
  
  <RouterView />
</template>
<script>
export default {
  
}
</script>
<style scoped>


.NavBar {
  display: flex;
  flex-wrap: wrap;
  justify-content: start; 
  margin: 20px;
}
.NavBar li{
  display: inline;
  margin-right: 20px;
  float: left;
  margin-bottom: 20px;
  
}
.Entering{
  margin-left: auto;
  margin-right: 0em;
}

.Entering li{
  display: inline;
  margin-right: 20px;
  float: left;
  margin-bottom: 20px;
  
}
  
</style>