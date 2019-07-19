<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- pass props from parent to cild -->
                <app-user-detail :name="name" @nameWasReset="name=$event" :resetFn="resetFn" :userAge="age"></app-user-detail>   
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasChanged="age=$event" :ageFromParent="changeAgeParent"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data() {
            return {
                name: 'Alena',
                age: 27,
            }
        },
        methods: {
            changeName() {
                this.name = 'Kate'
            },
            resetFn() {
                this.name = 'Bob'
            },
            changeAgeParent() {
                this.age = 18
            }
        },

    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
