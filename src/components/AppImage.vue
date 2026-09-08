<script setup lang="ts">
import { vImageTracker as vTracker } from '@/directives/imageTracker'

interface Props {
  src: string
  alt?: string
  cover?: boolean
  prio?: boolean
}

withDefaults(defineProps<Props>(), {
  alt: ''
})
</script>

<!-- HTML -->
<template>
  <div class="app-image">
      <img class="app-image__img" :class="{ cover }"
           :src="$getImg(src)" :alt="alt"
           :fetchpriority="prio ? 'high' : 'auto'"
           :loading="prio ? 'eager' : 'lazy'"
           v-tracker="$getImg(src)" />
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
.app-image {
  &__img {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-user-drag: none;

    &.cover {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
