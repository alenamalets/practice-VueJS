new Vue({
        el: '#exercise',
        data: {
            value: '',
            myvalue: ''
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