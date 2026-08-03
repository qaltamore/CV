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
    <span class="corner corner--top corner--left"></span>
    <span class="corner corner--top corner--right"></span>
    <span class="corner corner--bottom corner--left"></span>
    <span class="corner corner--bottom corner--right"></span>

    <!-- Logo -->
    <img :src="$getImg('logo.png')" alt="logo" class="app-loader__img-logo" />

    <!-- Text -->
    <div class="app-loader__name">
      <h1 ref="firstLine">SITE EN</h1>
      <h1 ref="secondLine">CONSTRUCTION</h1>
<!--      <h1 ref="firstLine">Quentin</h1>
      <h1 ref="secondLine">Altamore</h1>-->
    </div>

    <!-- Dots -->
    <div class="app-loader__dots-wrapper">
      <div v-for="index of 3" :key="`dot-${index}`" class="app-loader__dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@styles/keyframes/appears.scss';
@use '@styles/keyframes/bounceInOut.scss';

$corner-mob-padding: mvw(8px);
$corner-desk-padding: drem(24px);

.app-loader {
  width: 100%;
  height: 100%;
  background: #a55757;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  // Background moving grid
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-size: drem(40px) drem(40px);
    animation: gridMove 300s linear infinite alternate;
    pointer-events: none;

    @include breakpoint('mob') {
      background-size: mvw(40px) mvw(40px);
      animation: gridMove 100s linear infinite alternate;
    }
  }

  // Corner marks
  .corner {
    position: absolute;
    width: drem(24px);
    height: drem(24px);
    border: 4px solid rgba(255, 255, 255, 0.7);
    animation: fadeInCorners 6s infinite;

    @include breakpoint('mob') {
      width: mvw(12px);
      height: mvw(12px);
      border-width: 2px;
    }

    &--top {
      top: $corner-desk-padding;
      border-bottom: none;

      @include breakpoint('mob') {
        top: $corner-mob-padding;
      }
    }
    &--bottom {
      bottom: $corner-desk-padding;
      border-top: none;

      @include breakpoint('mob') {
        bottom: $corner-mob-padding;
      }
    }
    &--left {
      left: $corner-desk-padding;
      border-right: none;

      @include breakpoint('mob') {
        left: $corner-mob-padding;
      }
    }
    &--right {
      right: $corner-desk-padding;
      border-left: none;

      @include breakpoint('mob') {
        right: $corner-mob-padding;
      }
    }
  }

  // Logo
  &__img-logo {
    position: absolute;
    top: drem(40px);
    right: drem(40px);
    width: drem(60px);

    animation: bounceInOut 2s infinite ease-in-out;

    @include breakpoint('mob') {
      top: mvw(16px);
      right: mvw(16px);
      width: mvw(40px);
    }
  }

  // Text at middle
  &__name {

    & > * {
      font-family: $f-title;
      font-size: drem(80px);
      text-align: center;

      @include breakpoint('mob') {
        font-size: mvw(36px);
      }

      & :deep(span) {
        display: inline-block;
        opacity: 0;

        &.active {
          animation: letterAppearing 4s infinite calc(var(--i) * 0.05s);
        }
      }
    }
  }

  // Dots
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
    // border-radius: 50%;

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

@keyframes fadeInCorners {
  0%, 10%, 80%, 100% { opacity: 0; transform: scale(0.8); }
  20%, 70% { opacity: 1; transform: scale(1); }
}

@keyframes gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 100vw 100vw; }
}

@keyframes letterAppearing {
  0% {
    opacity: 0;
    transform: translateY(-100%) scale(0.8);
  }
  10% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  60% {
    opacity: 0;
    transform: translateY(100%) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translateY(100%) scale(0.8);
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
