<script setup lang="ts">
import NavMenu from './NavMenu.vue'
import { useNavStore } from '@/stores/nav'
import { useAudioStore } from '@/stores/audio.ts'
</script>

<!-- HTML -->
<template>
  <header class="nav-bar">
    <h1 class="nav-bar__page-name">Accueil</h1>

    <div class="nav-bar__right-content">
      <div class="nav-bar__audio" @click="useAudioStore().toggleAudio()">
        <AppImage v-show="useAudioStore().getState()" src="sound-on.svg" class="nav-bar__audio--on" />
        <AppImage v-show="!useAudioStore().getState()" src="sound-off.svg" class="nav-bar__audio--off" />
      </div>

      <AppImage src="menu.svg" class="nav-bar__img-menu" @click="useNavStore().toggleMenu" />
    </div>

    <!-- Menu view (not in the page flow) -->
    <NavMenu />
  </header>
</template>

<!-- CSS -->
<style scoped lang="scss">
.nav-bar {
  position: fixed;
  z-index: z('navbar');
  top: 0;
  width: 100%;
  background-image: url("@images/nav-bg.jpg");
  background-size: cover;
  box-shadow: 0 5px 4px rgba(0, 0, 0, .15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: dvh(12px) dvw(80px);

  @include breakpoint('mob') {
    padding: mvh(6px) mvw(36px);
  }

  @include breakpoint('tab') {
    padding: tvh(24px) tvw(70px);
  }

  &__page-name {
    color: $red-dark;
  }

  &__right-content {
    display: flex;
    align-items: center;
    gap: drem(30px);

    @include breakpoint('mob') {
      gap: mvw(16px);
    }

    @include breakpoint('tab') {
      gap: tvw(30px);
    }
  }

  &__audio {
    width: drem(36px);
    cursor: pointer;

    @include breakpoint('mob') {
      width: mvw(26px);
    }

    @include breakpoint('tab') {
      width: tvw(44px);
    }
  }

  &__img-menu {
    width: drem(40px);
    cursor: pointer;

    @include breakpoint('mob') {
      width: mvw(30px);
    }

    @include breakpoint('tab') {
      width: tvw(50px);
    }
  }
}
</style>
