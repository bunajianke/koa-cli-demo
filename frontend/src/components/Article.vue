<template>
    <div class="">
        <input type="text" v-model="title">
        <input type="text" v-model="author">
        <input type="text" v-model="content">
        <input type="text" v-model="category">
        <button @click="create">create</button>
    </div>
</template>

<script>
import { createArticle } from "@/api/article";
import axios from "@/utils/http";
export default {
    data() {
        return {
            title: '',
            author: '',
            content: '',
            category: ''
        }
    },
    methods: {
        create() {
            let { title, author, content, category } = this
            
            createArticle({
                title, author, content, category
            }).then(res => {
                console.log(res);
                
            })

            // createArticle()

            /* axios.post('/art/create', {
                title, author, content, category
            }).then(res => {
                console.log(res);
            }) */

            /* this.$http.post('/api/art/create', {
                title, author, content, category
            }).then(res => {
                console.log(res);
                
            }) */
        }
    }
}
</script>

<style>

</style>