<template>
<div class ="hello">
login
<div class= 'holder'>
  <div class='username'>
<input type='text' placeholder='Username' v-model="username" >
{{ username }}
 </div>
 <div class='password'> 
<input type='text' placeholder='Password' v-model="password" >
{{ password }}
</div>

</div>
</div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
  
}

</script>
<style>

.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>