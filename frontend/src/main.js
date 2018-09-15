import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
  
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAWaI8cSqRLwvcJtu4hbDZvK0c9b7EnM8Y',
    libraries: 'places',
  },
});
