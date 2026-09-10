<script setup lang="ts">
/*
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  router.push({ name: 'cv' })
}
 */
</script>

<!-- HTML -->
<template>
  <header class="nav-bar">
    <h1 class="nav-bar__page-name">Accueil</h1>
    <AppImage src="menu.svg" class="nav-bar__img-menu" />
    <!-- <RouterLink to="/about">À propos</RouterLink> -->
  </header>
</template>

<!-- CSS -->
<style scoped lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  z-index: z('navbar');
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

  &__img-menu {
    width: drem(40px);

    @include breakpoint('mob') {
      width: mvw(30px);
    }

    @include breakpoint('tab') {
      width: tvw(50px);
    }
  }
}
</style>
