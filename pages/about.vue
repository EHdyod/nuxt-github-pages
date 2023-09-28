<template>
    <h1 class="page-title">About</h1>
    <p>{{ data }}</p>
</template>

<script setup>
    const { data } = await useFetch("/api/currency/GBP")
</script>

<style scoped>

</style>