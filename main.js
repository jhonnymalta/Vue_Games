const app = Vue.createApp({
    data() {
        return {
            playerHealt: 100,
            monterHealt: 100,
            colorPlayer: '#93bd15'
        }
    },
    computed: {
        playerBarStyle() {
            return {
                width: this.playerHealt + '%',
                backgroundColor: this.colorPlayer

            };
        }
    },
    watch: {
        playerHealt(value) {
            if (value < 30) {
                this.colorPlayer = 'red'
            }
        }
    },
    methods: {
        MonsterAttack() {
            const attackValue = Math.floor(Math.random() * 10);
            this.playerHealt -= attackValue;
            console.log(this.playerHealt)
        }
    },
})

app.mount('#app')