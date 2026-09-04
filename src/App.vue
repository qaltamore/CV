<script setup lang="ts">
import TmpLoader from '@/components/TmpLoader.vue'
import RealWebsite from '@/components/RealWebsite.vue'

import { onBeforeMount, ref } from 'vue'

const showWebsite = ref(false)

onBeforeMount(() => {
  // Show Website if we have the "?website" param in the params
  showWebsite.value = new URLSearchParams(window.location.search).has('website')
})
</script>

<template>
  <TmpLoader v-if="!showWebsite"></TmpLoader>
  <RealWebsite v-else></RealWebsite>
</template>

<style scoped></style>
