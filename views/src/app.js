

const app = new Vue({
  el: '#app',
  data: {
    message: 'This is working!',
    username: '',
    password: '',
  },
  methods: {
    postNow() {
      axios.post('/signup', { username: this.username, password: this.password }, { headers: { 'Content-type': 'application/json' } })
        .then( (data) => {
          console.log(data);
          
          window.location.replace('/login');
        });
    },
  },
});

console.log(app.data);
