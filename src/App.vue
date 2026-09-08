<script setup lang="ts">
import ConstructLoader from '@/components/ConstructLoader.vue'
import RealWebsite from '@/components/RealWebsite.vue'

import { onBeforeMount, ref } from 'vue'

const showWebsite = ref(false)

onBeforeMount(() => {
  // Show Website if we have the "?website" param in the params
  showWebsite.value = new URLSearchParams(window.location.search).has('website')
})
</script>

<template>
  <ConstructLoader v-if="!showWebsite"></ConstructLoader>
  <RealWebsite v-else></RealWebsite>
</template>

<style scoped></style>
