<script setup lang="ts">
import { useLoaderStore } from '@/stores/loader'
import { computed, onMounted, ref } from 'vue'

// CONST
const MINIMAL_WAIT = 1000 // minimal wait on the loader, even if we loaded all the images
const PROGRESS_TICK = 10 // interval tick
const TOTAL_DOORS = 8 // number of door images
const DOORS_ANIMATION_SPEED = 80 // interval tick
const OPENING_DOOR_AUDIO = new Audio('/src/assets/audio/opening-door.mp3')

// REFS
const activeDoor = ref(1)
const removeLoader = ref(false)
const waitedEnough = ref(false)
const waitingProgress = ref(0)
const startDoorAnimation = ref(false)

// Start minimal wait interval
onMounted(() => {
  let index = 0
  const totalTicks = MINIMAL_WAIT / PROGRESS_TICK

  const waitingInterval = setInterval(() => {
    index++
    waitingProgress.value = (index / (totalTicks)) * 100

    if (index >= (totalTicks)) {
      waitedEnough.value = true
      clearInterval(waitingInterval)
    }
  }, PROGRESS_TICK)
})

const showLoader = computed(() => {
  return !waitedEnough.value || !useLoaderStore().hasLoaded
})

const getProgress = computed(() => {
  return (waitingProgress.value + useLoaderStore().progress) / 2
})

const tockAnimation = computed(() => {
  return !showLoader.value && !startDoorAnimation.value
})

// Open Door (start animation)
const openDoor = () => {
  if (tockAnimation.value) {
    startDoorAnimation.value = true

    OPENING_DOOR_AUDIO.play().catch((err) => {
      console.warn('Audio didn\'t play : ', err)
    })

    const interval = setInterval(() => {
      activeDoor.value++
      if (activeDoor.value >= TOTAL_DOORS + 1) {
        removeLoader.value = true
        clearInterval(interval)
      }
    }, DOORS_ANIMATION_SPEED)
  }
}
</script>

<!-- HTML -->
<template>
  <div class="app-loader" :class="{ remove: removeLoader }" @click="openDoor">
    <!-- Background dungeon -->
    <AppImage :src="`loader/loader-bg-${$env.type}.jpg`" class="app-loader__img-bg" />
    <!-- Doors -->
    <AppImage v-for="i of 8" :key="`door-${i}`" :src="`loader/door-${i}.png`"
              class="app-loader__img-door" :class="[`app-loader__img-door--${i}`, { active: activeDoor === i, animate: tockAnimation }]" />
    <!-- Progress Bar -->
    <div :style="{ width: `${getProgress}%` }" class="app-loader__progress-bar"></div>

    <!-- Tock Tock Tock -->
    <p v-for="tIdx of 3" :key="`tock-${tIdx}`"
       class="app-loader__tock" :class="[`app-loader__tock--${tIdx}`, { animate: tockAnimation, delete: startDoorAnimation }]"
       v-text="'Tock'" />
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
$loader-anim-speed: .8s;
$loader-progress-bar-speed: .1s;
$loader-tock-anim-duration: 5s;

.app-loader {
  position: fixed;
  z-index: 100;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #000;

  transition: transform $loader-anim-speed ease-in-out,
              opacity $loader-anim-speed ease-in-out calc($loader-anim-speed / 1.5);

  // Remove loader animation
  &.remove {
    transform: translateY(-100%) scale(15);
    opacity: 0;
    pointer-events: none;

    @include breakpoint('mob') {
      transform: translateX(-10%) translateY(-50%) scale(5);
    }

    @include breakpoint('tab') {
      transform: translateY(-50%) scale(10);
    }
  }

  // Background dungeon image
  &__img-bg {
    @extend %absolute-center;
    width: dvw(1440px);

    @include breakpoint('mob') {
      width: mvw(360px);
    }

    @include breakpoint('tab') {
      width: tvw(834px);
    }
  }

  // Door images
  &__img-door {
    @extend %absolute-center;
    width: dvw(542px);

    cursor: pointer;
    opacity: 0;

    animation: shakingDoor $loader-tock-anim-duration linear infinite;
    animation-play-state: paused;
    transform-origin: center 60%;

    @include breakpoint('mob') {
      width: mvw(488px);
    }

    @include breakpoint('tab') {
      width: tvw(720px);
    }

    &.active {
      opacity: 1;
    }

    &.animate {
      animation-play-state: running;
    }
  }

  // Progress bar
  &__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    background-color: #FFF;
  }

  // Tock Tock Tock
  &__tock {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;

    font-family: Serif;
    font-size: dvw(24px);
    font-weight: 900;
    color: #F5DA55;
    transform: scale(0);

    text-shadow: 0 0 10px #000;

    @include breakpoint('mob') {
      font-size: mvw(24px);
    }

    @include breakpoint('tab') {
      font-size: tvw(24px);
    }

    animation-duration: $loader-tock-anim-duration;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: paused;

    &.animate {
      animation-play-state: running;
    }

    &.delete {
      opacity: 0;
    }

    &--1 {
      animation-name: tock-1;
    }

    &--2 {
      animation-name: tock-2;
      animation-delay: .15s;
    }

    &--3 {
      animation-name: tock-3;
      animation-delay: .3s;
    }
  }
}

@keyframes shakingDoor {
  0%, 14%, 100% { transform: translateX(-50%) translateY(-50%) scale(1) rotate(0deg); }
  2%, 6%, 10% { transform: translateX(-50%) translateY(-50%) scale(1.02) rotate(-2deg); }
  4%, 8%, 12% { transform: translateX(-50%) translateY(-50%) scale(1.02) rotate(2deg); }
}

@keyframes tock-1 {
  0%, 20%, 100% { transform: scale(0.00001) rotate(-10deg); }
  5%, 15% { transform: translateX(-200%) translateY(-500%) scale(3) rotate(-20deg); }
}

@keyframes tock-2 {
  0%, 20%, 100% { transform: scale(0.00001) rotate(10deg); }
  5%, 15% { transform: translateX(100%) translateY(-300%) scale(2) rotate(20deg); }
}

@keyframes tock-3 {
  0%, 20%, 100% { transform: scale(0.00001) rotate(10deg); }
  5%, 15% { transform: translateX(-30%) translateY(-170%) scale(1) rotate(-5deg); }
}
</style>
