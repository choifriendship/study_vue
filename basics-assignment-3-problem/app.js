const app = Vue.createApp({
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add5() {
            this.num += 5;
        },
        add1() {
            this.num += 1;
        }
    },
    computed: {
        number() {
            if(this.num < 37 ) {
                return "Not there yet"
            }
            else if(this.num > 37) {
                return "Too much!"
            }
            else {
                return this.num;
            }
        }
    },
    watch: {
        num(value) {
            if (value == 37) {
                const that = this;
                setTimeout(function() {
                    that.num = 0;
                }, 5000);
            }
        }
    }
});

app.mount('#assignment')