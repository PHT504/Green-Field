<template>
  <div id="app">
  <signup/> 
  <login/>
  <googele-map name='example'/>
 

  <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
   </div>
</template>

<script>
import signup from './components/signup.vue'
import login from './components/login.vue'
import googeleMap from './components/googleMap.vue'
export default {
  name: 'app',
  components: {
    signup,
    login,
    googeleMap
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  
}
</script>

<style>
#app {
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
