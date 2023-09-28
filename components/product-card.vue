<template>
    <div class="card-zoom">
        <img :src="product.image" :alt="`${product.description}`" class="card-zoom-image">
        <h3 class="card-zoom-text">{{ product.title }}</h3>
        <NuxtLink :to="`/products/${ product.id }`" class="btn card-link"><span class="transition-all duration-500 ease-in-out">View Details</span></NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { product } = defineProps(['product']);

</script>

<style scoped>
    .card-zoom {
        @apply relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-80 h-96 rounded-2xl hover:shadow-xl;
    }
    .card-zoom-image {
        @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
    }
    .card-zoom-text {
        @apply absolute p-4 text-3xl font-black transition-all duration-500 ease-in-out transform scale-100 text-gray-300 opacity-60;
        text-shadow: #302f2f 1px 0 10px;
    }

    .card-zoom:hover .card-zoom-image {
        @apply scale-110;
    }

    .card-zoom:hover .card-zoom-text {
        @apply scale-75;
    }

    .card-link {
        @apply absolute right-0 m-4 self-end z-10;
    }

    .card-link:hover span{
        @apply scale-110;
    }
</style>