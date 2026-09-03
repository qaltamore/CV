<script setup lang="ts">
import AppLoader from '@/components/AppLoader.vue'
import RealWebsite from '@/components/RealWebsite.vue'

import { onBeforeMount, ref } from 'vue'

const showWebsite = ref(false)

onBeforeMount(() => {
  // Show Website if we have the "?website" param in the params
  showWebsite.value = new URLSearchParams(window.location.search).has('website')
})
</script>

<template>
  <AppLoader v-if="!showWebsite"></AppLoader>
  <RealWebsite v-else></RealWebsite>
</template>

<style scoped></style>
