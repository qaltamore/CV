<script setup lang="ts">
import { useLoaderStore } from '@/stores/loader'
import { computed, onMounted, ref, watch } from 'vue'

const waitedEnough = ref(false)
const activeDoor = ref(1)
const removeLoader = ref(false)

onMounted(() => {
  setTimeout(() => {
    waitedEnough.value = true
  }, 4000)
})

const showLoader = computed(() => {
  return !waitedEnough.value || !useLoaderStore().hasLoaded
})

watch(showLoader, () => {
  const interval = setInterval(() => {
    activeDoor.value++
    if (activeDoor.value >= 9) {
      removeLoader.value = true
      clearInterval(interval)
    }
  }, 80)
})
</script>

<template>
  <div class="app-loader" :class="{ remove: removeLoader }">
    <!-- Background dungeon -->
    <AppImage :src="`loader/loader-bg-${$env.type}.jpg`" class="app-loader__img-bg" />
    <!-- Doors -->
    <AppImage v-for="i of 8" :key="`door-${i}`" :src="`loader/door-${i}.png`"
              class="app-loader__img-door" :class="[`app-loader__img-door--${i}`, { active: activeDoor === i }]" />
  </div>
</template>

<style scoped lang="scss">
$loader-anim-speed: .8s;

.app-loader {
  position: fixed;
  z-index: 100;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #000;

  transition: transform $loader-anim-speed ease-in-out,
              opacity $loader-anim-speed ease-in-out calc($loader-anim-speed / 1.5);

  &.remove {
    transform: translateY(-18%) scale(2);
    opacity: 0;
    pointer-events: none;

    @include breakpoint('mob') {
      transform: translateX(-2%) translateY(-19%) scale(2);
    }

    @include breakpoint('tab') {
      transform: translateY(-18%) scale(2.2);
    }
  }

  &__img-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: dvw(1440px);

    @include breakpoint('mob') {
      width: mvw(360px);
    }

    @include breakpoint('tab') {
      width: tvw(834px);
    }
  }

  &__img-door {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: dvw(542px);

    opacity: 0;

    @include breakpoint('mob') {
      width: mvw(488px);
    }

    @include breakpoint('tab') {
      width: tvw(720px);
    }

    &.active {
      opacity: 1;
    }
  }
}
</style>
