<script setup lang="ts">
import { vImageTracker as vTracker } from '@/directives/imageTracker'

interface Props {
  src: string
  alt?: string
  cover?: boolean
}

withDefaults(defineProps<Props>(), {
  alt: ''
})
</script>

<template>
  <div class="app-image">
      <img class="app-image__img" :class="{ cover }"
           :src="$getImg(src)" :alt="alt"
           v-tracker="$getImg(src)" />
  </div>
</template>

<style scoped lang="scss">
.app-image {
  &__img {
    display: inline-block;
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
