const app = Vue.createApp({
    data() {
        return {
            keydownText: '',
            enterText: ''
        }
    },
    methods: {
        showAlert() {
            alert("Hello Vue");
        },
        keydownOutput(event) {
            this.keydownText = event.target.value;
        },
        enterOutput(event) {
            this.enterText = event.target.value;
        }
    }
});

app.mount('#assignment');