

const app = new Vue({
  el: '#app',
  data: {
    message: 'That\'s a shame',
    username: '',
    password: '',
  },
  methods: {
    postNow() {
      axios.post('/signup', { username: this.username, password: this.password }, { headers: { 'Content-type': 'application/json' } })
        .then( (response) => {
          console.log(response);
        });
    },
  },
});

console.log(app.data);
