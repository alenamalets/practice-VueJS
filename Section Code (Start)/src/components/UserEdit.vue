<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="ageFromParent()">Edit Age Parent</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js';

export default {
    props: {
        userAge: Number,
        ageFromParent: Function
    },
    methods: {
        editAge() {
            this.userAge = 30,
            // this.$emit('ageWasChanged', this.userAge)
            eventBus.$emit('ageWasChanged', this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
