<template>
<div class ="hello">
Sign-up
<div class= 'holder'>
<input type='text' placeholder='Username' v-model="signUp" >
{{ signUp }}
</div>
</div>

</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      signUp: ''
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