<template>
  <LoadingIcon v-if="isLoading"></LoadingIcon>
  <div v-else>
    <div>
      <h1 class="text-red-500 text-5xl my-7 text-center">List Products</h1>
      <div class="grid grid-cols-4 gap-4 ">
        <div v-for="p in products">
          <ProductCard :product="p"></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'products'
})
const isLoading = ref(true); // Ensure `isLoading` variable is reactive
const products = ref([])
onMounted(async () => {
  // Move the API call to a separate method and call it asynchronously
  await fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error(error);
    // Handle the error
  } finally {
    isLoading.value = false; // Update `isLoading` variable after API call finishes
  }
};
// overwrite in config
useHead ({
 title: 'Nuxt Dojo | Merch',
 meta: [
  {name: 'description', content: 'Nuxt Dojo | Merch'}
 ]

})
</script>

<style scoped></style>
