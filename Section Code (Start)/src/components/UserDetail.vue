<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name: {{ switchName() }}</p>
        <p> User Age: {{ userAge }}</p>
        <button @click="resetName"> Reset name</button>
        <button @click="resetFn()"> Reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default {
        props: {     //pass props from parent to child
            name: {
                type: [String, Array],     //VALIDATION
                required: true,
                // default: 'Max' or function(){ return { name: 'Max'}} -- for array or object
            },
            resetFn : Function,
            userAge: Number
        },
        methods:{
            switchName() {
                return this.name.split("").reverse().join("")
            },
            resetName() {
                this.name = 'Alena';
                this.$emit('nameWasReset', this.name);  //pass props from vhild to parent
            }
        },
        created() {
            eventBus.$on('ageWasChanged', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
