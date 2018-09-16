

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
        .then( ({ data }) => {
          console.log(data);

          // window.location.replace('/map');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

console.log(login.data);
