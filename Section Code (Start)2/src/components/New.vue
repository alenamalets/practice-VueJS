<template lang="pug">
    div
        h3 New component
        button(@click="counter++") Increase
        p {{ counter }}
</template>
<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log("Destroyed!");  
    },
    deactivated() {
       console.log("Deactivated");    
    },
    activated(){
        console.log("Activated");  
    }
}
</script>