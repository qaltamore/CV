<script setup lang="ts"></script>

<template>
  <div class="app-loader">
    <div class="app-loader__name">
      <h1>Quentin</h1>
      <h1>Altamore</h1>
    </div>

    <div class="app-loader__dots">...</div>
  </div>
</template>

<style scoped lang="scss">
.app-loader {
  width: 100vw;
  height: 100vh;
  background: #a55757;

  &__name {
    font-family: $f-title;
  }
}
</style>
