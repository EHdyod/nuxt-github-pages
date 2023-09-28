
import productCardVue from './product-card.vue';
<template>
    <div class="grid grid-cols-2 gap-10">
        <span class="p-7">
            <img :src="product.image" :alt="product.title" class="mx-auto my-7">
        </span>
        <span class="p-7">
            <h1 class="text-4xl my-7">{{ product.title }}</h1>
            <p class="text-xl my-7">Price - ${{ product.price }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
            <p class="mb-7">{{ product.description }}</p>
            <button class="btn flex">
                <i class="material-icons mr-2">add_shopping_cart</i>
                <span>Add to cart</span>
            </button>
        </span>
    </div>
</template>

<script setup lang="ts">
    const { product } = defineProps(['product']);
</script>

<style scoped>
    img{
        max-width: 400px;
    }
</style>