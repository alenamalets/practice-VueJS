new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        link: 'http://google.com',
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function (){
            this.title = 'yeeeah'
            return this.title  //access data using this keywords
        },
    },
})