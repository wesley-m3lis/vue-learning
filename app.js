// Simply writes date and time and displays an About me link.

const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Learn some Vue and JS',
            aboutMe: 'https://br.pinterest.com/wesleyameixoeira/'
        };
    },

    methods: {
        date(){
            return Date()
        }
    }
});

app.mount('#user-goal');