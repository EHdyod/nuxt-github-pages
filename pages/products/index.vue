<template v-slot:main>
    <h1 class="page-title">Products</h1>
    <article class="grid grid-cols-4 gap-7">
        <section v-for="product in products" class="h-25 w-auto">
            <ProductCard :product="product"/>
        </section>
    </article>
</template>

<script setup>
    definePageMeta({
        layout: "default"
    })

    const { data: products } = await useFetch("https://fakestoreapi.com/products")

    useHead({
        title: "Accessories of my Mojo Dojo Casa House"
    })
</script>

<style scoped>

</style>