<template>
  <div class ="hello">
    Sign-up
    <div class= 'holder'>
      <form class="" method="post" @submit.prevent="postNow">
        <div>
          <input type="text" name="" value="" v-model="signUp">
            {{signUp}}
        </div>
        <div>
          <input type="text" name="" value="" v-model="password">
            {{password}}
        </div>
        <div>
          <button type="submit" name="button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { log } from 'async';

export default {
  name: 'signup',
  obj: {},
  data () {
    return {
      signUp: '',
      password: ''
    };
  },
  methods:{
    postNow() {
      axios.post('/signup',{username: this.signup, password: this.password },
        {headers: { 'Content-type': 'application/json' }}
      ).then(response => {
        console.log(response);
      })
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