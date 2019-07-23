<template lang="pug">
    div 
        .title
            slot(name="title")
            span 
                slot(name="subtitle") Subtitle
        div
            slot
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    .title {
        color: red;
        font-style: italic
    }
</style>
