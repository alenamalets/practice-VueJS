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

new Vue({
    el: '#app2',
    data: {
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        increase: function(step, event) {
            this.counter+=step;
            console.log('event', event);
            
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }   
})