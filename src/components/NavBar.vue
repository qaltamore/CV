<script setup lang="ts">
</script>

<template>
  <header class="nav-bar">
    <h1 class="nav-bar__page-name">Accueil</h1>
    <AppImage src="menu.svg" class="nav-bar__img-menu" />
  </header>
</template>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  width: 100%;
  height: drem(80px);
  background-image: url("@images/nav-bg.jpg");
  background-size: cover;
  box-shadow: 0 5px 4px rgba(0, 0, 0, .15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 dvw(80px);

  @include breakpoint('mob') {
    height: mvh(50px);
    padding: 0 mvw(36px);
  }

  @include breakpoint('tab') {
    height: tvh(116px);
    padding: 0 tvw(70px);
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
      width: tvw(60px);
    }
  }
}
</style>
