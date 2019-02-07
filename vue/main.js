new Vue({
    el: '#root',
    data: {
        items: [],
        isFullPage: true,
        username: 'fishyfishphil'
    },
    methods: {
        find() {
            const loadingComponent = this.$loading.open({
                container: this.isFullPage ? null : this.$refs.element.$el
            })
            axios.post('https://soadagyfl9.execute-api.eu-west-1.amazonaws.com/dev/find',
                { user: this.username })
                .then(response => {
                    this.items = response.data
                    loadingComponent.close()
                    console.log(items)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})
