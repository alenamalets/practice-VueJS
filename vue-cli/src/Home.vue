<template lang="pug">
    div
        app-server-status(v-for="server in 5") 
</template>

<script>
    import Status from './Status.vue'
    export default {
    components: {
        'app-server-status': Status
    }
    }
</script>

<style lang="scss">
    
</style>