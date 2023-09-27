<template>
    <h1>Product number : {{ id }}</h1>
</template>

<script setup>
    definePageMeta({
        layout: "products"
    })
    const { id } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>