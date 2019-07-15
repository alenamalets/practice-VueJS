new Vue({
    el:'#exercise',
    data: {
        name: 'Alena',
        age: 26,
        image:'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg'
    },
    methods: {
        age3: function() {
            return this.age * 3;
        },
        randomNumber: function() {
            return Math.random().toFixed(2);
        }

    },
})