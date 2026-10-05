<script setup lang="ts"></script>

<!-- HTML -->
<template>
  <div class="construct-label">
    <p>En Construction</p>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
.construct-label {
  position: fixed;
  z-index: z('loader') - 1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  padding: 12px 32px;
  background-color: mediumpurple;
  color: white;
  border-radius: 10px 10px 0 0;

  pointer-events: none;
}
</style>
