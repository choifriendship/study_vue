 const app = Vue.createApp({
    data() {
        return {
            name: 'woojeongchoi',
            age: 26,
            urlImage: 'https://i.namu.wiki/i/Y-R4WKobnTni6s2xq7ghHG-ng4qtPwz5rhpSnYHeSEio76ecRazUrZ8hKXAdAtzTmRxNvxSCgzLPrv5Ibhqn_Q.webp'
        }
    },
    methods: {
        agePlus5Year: function() {
            return this.age + 5;
        },
        randomNumber: function() {
            const num = Math.floor(Math.random() * 2);
            return num;
        }
    }
 });

app.mount('#assignment');