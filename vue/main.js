new Vue({
    el: '#root',
    data: {
        username: 'fishyfishphil'
    },
    methods: {
        find() {
            axios.post('https://soadagyfl9.execute-api.eu-west-1.amazonaws.com/dev/find',
                { user: this.username })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        username = 'wesbos'
        find()

    }
})