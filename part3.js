const data= {
    title: 'Title',
    text: 'My text'
}

Vue.component('hello', {
    template: '<h1> Hello! </h1>'
});

const vm1 = new Vue({
    data: data,
})

const vm2 = new Vue({
    template: '<h1> Header </h1>'
});

vm1.$mount('#app')
// vm2.$mount();
// document.getElementById('#app2').appendChild(vm2.$el);


new Vue({
    el: '#app3',
    data: {
        test: 'This is a test',
    },
    beforeCreate() {
        console.log("beforeCreate()");
    },
    created() {
        console.log("created()");
    },
    beforeMount() {
        console.log("beforeMount()");
    },
    mounted() {
        console.log("mounted()");
    },
    beforeUpdate() {
        console.log("beforeUpdate()");
    },
    updated() {
        console.log("updated()");
    },
    beforeDestroy() {
        console.log("beforeDestroy()");
    },
    destroyed() {
        console.log("destroyed()");
    },
    methods: {
        destroy() {
            this.$destroy();
        }
    },
});
