<template v-slot:main>
    <h1>Products</h1>
    <ul v-for="index in productList">
        <li><NuxtLink :to="`/products/${ index }`">{{ index }}</NuxtLink></li>
    </ul>
</template>

<script setup>
    definePageMeta({
        layout: "default"
    })
    const productList = [0,1,2,3,4];
</script>

<style lang="scss" scoped>

</style>