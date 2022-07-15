const app = Vue.createApp({
  data(){
    return{
      counter: 0,
      name: ''
    }
  },

  methods : {
    increments(num){
      this.counter = this.counter + num
    },

    decrements(num){
      this.counter = this.counter - num
    },

    setName(event){
      this.name = event.target.value
    }
  }
})

app.mount('#events');
