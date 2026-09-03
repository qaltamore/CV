<script setup lang="ts">
</script>

<template>
  <div class="real-website">
    <!-- Header -->
    <header class="real-website__nav"></header>

    <!-- Content -->
    <div class="real-website__content">
      <!-- Home Component -->
      <!-- CV Component -->
      <h1 v-html="$env.isDesk ? 'DESKTOP' : ''"></h1>
      <h1 v-html="$env.isTab ? 'TABLET' : ''"></h1>
      <h1 v-html="$env.isMob ? 'MOBILE' : ''"></h1>
    </div>

    <!-- Background -->
    <div class="real-website__background">
      <!-- border -->
      <img :src="$getImg(`border-${$env.type}.svg`)" alt="border" class="real-website__img-bg-border" />
      <!-- grid -->
      <img :src="$getImg(`grid-${$env.type}.png`)" alt="grid" class="real-website__img-bg-grid" />
      <!-- leather -->
      <img :src="$getImg('bg-leather.jpg')" alt="background" class="real-website__img-bg-leather" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.real-website {
  width: 100%;
  min-height: 100%;

  /** NAV **/
  &__nav {
    width: 100%;
    height: drem(80px);
    background-image: url("@images/nav-bg.jpg");
    background-size: cover;

    box-shadow: 0 5px 4px rgba(0, 0, 0, .15);

    @include breakpoint('mob') {
      height: mvh(50px);
    }

    @include breakpoint('tab') {
      height: tvh(116px);
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

    @include breakpoint('mob') {
      width: 100%;
    }

    @include breakpoint('tab') {
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
    }
  }

  &__img-bg-leather {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
