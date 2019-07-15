new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Gooog</a>',
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