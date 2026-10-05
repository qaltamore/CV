<script setup lang="ts">
import { useNavStore } from '@/stores/nav'
</script>

<!-- HTML -->
<template>
  <header class="nav-menu" :class="{ active: useNavStore().activeMenu }">
    <AppImage src="cross.png" class="nav-menu__img-cross" @click="useNavStore().toggleMenu" />

    <!-- <div class="nav-menu__music">
      <AppImage v-for="index of 4" :key="`music-note-${index}`"
                :src="`music-note-${index}.svg`" :class="`nav-menu__music-notes nav-menu__music-notes--${index}`" />
    </div> -->

    <div class="nav-menu__sections-list">
      <RouterLink v-for="(view, vIdx) in $tm('nav.menu')" :key="`nav-${vIdx}`" :to="view.path" @click="useNavStore().toggleMenu">
        <h1 v-text="view.label" />
      </RouterLink>
    </div>
  </header>
</template>

<!-- CSS -->
<style scoped lang="scss">
.nav-menu {
  position: fixed;
  z-index: z('navbar') + 1;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background-image: url("@images/parchment-bg.jpg");
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: dvw(250px);

  transform: translateX(100%);
  transition: transform .4s ease-in-out;

  @include breakpoint('mob') {
    // padding-left: mvw(36px);
  }

  @include breakpoint('tab') {
    // padding-left: tvw(70px);
  }

  &.active {
    transform: translateX(0);
  }

  &__img-cross {
    position: absolute;
    top: 60px;
    right: 60px;
    width: drem(40px);
    cursor: pointer;

    @include breakpoint('mob') {
      top: mvw(25px);
      right: mvw(30px);
      width: mvw(30px);
    }

    @include breakpoint('tab') {
      top: tvw(60px);
      right: tvw(60px);
      width: tvw(50px);
    }
  }

  &__music-notes {
    position: absolute;
    width: 40px;

    &--1 {
      top: 20%;
      left: 20%;
    }

    &--2 {
      top: 40%;
      right: 20%;
    }

    &--3 {
      bottom: 40%;
      right: 30%;
    }

    &--4 {
      bottom: 20%;
      left: 20%;
    }
  }

  &__sections-list {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & a {
      &:hover, &.router-link-active {
        color: $red-dark;
        text-decoration: underline;
      }
    }
  }
}
</style>
