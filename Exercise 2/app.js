new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Click');
            },
            showText: function (event) {
                this.value = event.target.value;
            }
        },
    });