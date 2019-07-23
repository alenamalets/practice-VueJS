<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='quote'">Quote</button>
                <button @click="selectedComponent='author'">Author</button>
                <button @click="selectedComponent='new'">New</button>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
               
               <!-- <quote>
                   <h2 slot="title"> {{quoteText }}</h2>
                    <p>A wonderful quote</p>
               </quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    export default {
        data() {
            return {
                 quoteText: "Hello",
                 selectedComponent: "quote"
            }     
        },
        components: {
            Quote,
            Author,
            New
        }
    }
</script>

<style>
    p {
        color: gray;
    }
</style>
