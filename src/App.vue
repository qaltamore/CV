<script setup lang="ts">
import AppLoader from '@/components/AppLoader.vue'
import NavBar from '@/components/NavBar.vue'
import ConstructLabel from '@/components/ConstructLabel.vue'

// TODO : start chill adventure music once loader's animation done
</script>

<!-- HTML -->
<template>
  <section class="app">
    <!-- In Construction Label -->
    <ConstructLabel />

    <!-- Loader -->
    <AppLoader />

    <!-- Header -->
    <NavBar />

    <!-- Content -->
    <div class="app__content">
      <RouterView />
    </div>

    <!-- Background -->
    <div class="app__background">
      <!-- grid -->
      <AppImage class="app__img-bg-grid"
                :src="`grid-${$env.type}.png`" alt="grid" />
      <!-- border -->
      <AppImage class="app__img-bg-border"
                :src="`border-${$env.type}.svg`" alt="border" />
      <!-- leather -->
      <AppImage class="app__img-bg-leather"
                src="bg-leather.jpg" alt="leather"
                cover />
    </div>
  </section>
</template>

<!-- CSS -->
<style scoped lang="scss">
.app {
  width: 100%;
  min-height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /** CONTENT **/
  &__content {
    padding-top: drem(80px);

    @include breakpoint('mob') {
      padding-top: mvh(44px);
    }

    @include breakpoint('tab') {
      padding-top: tvh(104px);
    }

    @include breakpoint('tab-land') {
      padding-top: dvh(80px);
    }

    @include breakpoint('tiny-laptop') {
      padding-top: drem(60px);
    }
  }

  /** BACKGROUND **/
  &__background {
    position: fixed;
    z-index: -1;
    inset: 0;
    overflow: hidden;
  }

  &__img-bg-grid {
    position: fixed;
    top: 50%;
    left: 50%;
    width: dvw(1304px);
    transform: translateX(-50%) translateY(-47%);

    @include breakpoint('mob-tab') {
      width: 100%;
    }
  }

  &__img-bg-border {
    position: fixed;
    bottom: dvh(16px);
    left: 50%;
    width: dvw(1408px);
    transform: translateX(-50%);

    @include breakpoint('mob') {
      bottom: mvh(6px);
      width: mvw(348px);
    }

    @include breakpoint('tab') {
      bottom: tvh(16px);
    }

    @include breakpoint('tab-land') {
      bottom: dvh(40px);
    }
  }

  &__img-bg-leather {
    width: 100%;
    height: 100%;
  }
}
</style>
