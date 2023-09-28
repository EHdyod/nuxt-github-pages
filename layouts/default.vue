<template>
    <header class="shadow-sm bg-white" >
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Mojo Dojo Casa House</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
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