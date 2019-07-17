new Vue({
    el: "#app",
    data: {
        healthMy: 100,
        healthMonster: 100,
        startGame: true,
        turns: []
    },
    methods: {
        attackButton(){
            let y = Math.floor(Math.random() * 10) +1;
            this.healthMonster -= y;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + y
            });
            if( this.healthMonster <= 0) {
                alert('You won');
                this.startGame = true;
                return;
            }
            this.monsterAttack();
            if( this.healthMy <= 0) {
                alert('You lost');
                this.startGame = true;
                return;
            }
           
        },
        specialAttackButton(){
            let y = (Math.floor(Math.random() * 10)) +11;
            this.healthMonster -= y;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + y
            });
            if( this.healthMonster <= 0) {
                alert('You won');
                this.startGame = true;
                return;
            }
            this.monsterAttack();
            if( this.healthMy <= 0) {
                alert('You lost');
                this.startGame = true;
                return;
            }
            
        },
        healButton(){
            if(this.healthMy <= 90) {
                this.healthMy += 10;
            }
            else this.healthMy = 100;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        monsterAttack() {
            let x = Math.floor(Math.random() * 10) +1;
            this.healthMy -= x;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + x
            });
        },
    },
})