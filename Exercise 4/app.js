new Vue({
  el: '#exercise',
  data: {
      showEffect: {
        highlight: false,
        shrink: true,
      },
      changeClass: "",
      visible: true,
      myClass:{
        width: '100px',
        height: '100px',
        backgroundColor: 'orange'
      },
      prBar: {
        width: '0px',
        backgroundColor: 'orange',
      }
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(() => {
        vm.showEffect.highlight = !vm.showEffect.highlight,
        vm.showEffect.shrink = !vm.showEffect.shrink  
      }, 2000);
    },
    startProgressBar() {
      const vm = this;
      width = 0;
      setInterval(() => {
        width < 100 ? width = width + 10 : width=100;
        vm.prBar.width = width + 'px';
      }, 500);
    }
  }
});
