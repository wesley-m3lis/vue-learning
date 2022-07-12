const app = Vue.createApp({
    data(){
        return{
            image: 'https://i.pinimg.com/originals/5c/26/52/5c265259f626f75da99e9fb79c345ab8.png',
            myName: "Wesley",
            myAge: 36
        }
    },

    methods: {
        fiveInTime(){
            return this.myAge + 5
        },

        randomNumber(){
            return Math.random();
        }
    }
})

app.mount('#assignment')