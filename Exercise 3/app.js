new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timer: 5000,
        },
        computed: {
            result() {
                return this.value >= 37 ? 'Done' : 'Not there yet';
            }
        },
        watch: {
            result() {
                const vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, vm.timer)
            }
        },
    });