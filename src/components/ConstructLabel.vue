<script setup lang="ts"></script>

<!-- HTML -->
<template>
  <div class="construct-label">
    <p>In Construction</p>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
.construct-label {
  position: fixed;
  z-index: z('loader') - 1;
  top: 0;
  right: 0;
  padding: 20px 8px;
  background-color: mediumpurple;
  color: white;
  writing-mode: sideways-lr;
  /* writing-mode: vertical-rl;
  text-orientation: upright; */
  border-radius: 0 0 0 10px;

  pointer-events: none;
}
</style>
