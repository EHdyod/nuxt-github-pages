<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Mojo Dojo Casa Home</NuxtLink>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
        </nav>
    </header>

    <main class="container mx-auto p-4">
        <slot/>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>