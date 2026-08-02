<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { wrapLetters } from '@/utils/texts.ts'

const firstLine = ref()
const secondLine = ref()

onMounted(() => {
  const { html, nextIndex } = wrapLetters(firstLine.value.textContent)
  firstLine.value.innerHTML = html
  secondLine.value.innerHTML = wrapLetters(secondLine.value.textContent, nextIndex).html
})
</script>

<template>
  <div class="app-loader">
    <div class="app-loader__name">
      <h1 ref="firstLine">Site en</h1>
      <h1 ref="secondLine">Construction</h1>
<!--      <h1 ref="firstLine">Quentin</h1>
      <h1 ref="secondLine">Altamore</h1>-->
    </div>

    <div class="app-loader__dots-wrapper">
      <div v-for="index of 3" :key="`dot-${index}`" class="app-loader__dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@styles/keyframes/appears.scss';

.app-loader {
  width: 100%;
  height: 100%;
  background: #a55757;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  &__name {

    & > * {
      font-family: $f-title;
      font-size: drem(80px);
      text-align: center;

      @include breakpoint('mob') {
        font-size: mvw(40px);
      }

      & :deep(span) {
        display: inline-block;
        opacity: 0;
        transform: translateY(-50%);

        &.active {
          animation: letterAppearing .4s forwards calc(var(--i) * 0.05s);
        }
      }
    }
  }

  &__dots-wrapper {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: drem(10px);

    opacity: 0;
    animation: appears .4s ease-in-out 1.2s forwards;

    @include breakpoint('mob') {
      gap: mvw(6px);
    }
  }

  &__dot {
    width: dvh(20px);
    height: dvh(20px);
    background: white;
    border-radius: 50%;

    @include breakpoint('mob') {
      width: mvw(12px);
      height: mvw(12px);
    }

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation: dotUpAndDown 3s linear infinite #{$i * 0.2s};
      }
    }
  }
}

@keyframes letterAppearing {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dotUpAndDown {
  0%, 20% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-100%);
  }
}
</style>
