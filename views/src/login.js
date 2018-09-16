

const login = new Vue({
  el: '#login',
  data: {
    message: 'That\'s a shame',
    username: '',
    password: '',
  },
  methods: {
    postNow() {
      axios.post('/login', { username: this.username, password: this.password }, { headers: { 'Content-type': 'application/json' } })
        .then( (response) => {
          console.log(response);
        });
    },
  },
});

console.log(login.data);
