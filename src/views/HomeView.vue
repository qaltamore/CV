<script setup lang="ts">
import AppImage from '@/components/AppImage.vue'
</script>

<!-- HTML -->
<template>
  <section class="home">
    <div class="home__welcome">
      <!-- Background image [Feather] -->
      <AppImage src="feather.png" alt="image plume" class="home__img-bg-block home__img-bg-block--feather" />

      <!-- Div Title -->
      <h3 v-text="$t('home.intro.title')" />

      <!-- Content -->
      <p v-for="(text, tIdx) in $tm('home.intro.content')" :key="`home-intro-content--${tIdx}`" v-html="text" />
      <p></p>
      <p v-for="(text2, tIdx2) in $tm('home.intro.content2')" :key="`home-intro-content-2--${tIdx2}`" v-html="text2" />
    </div>

    <div class="home__realization">
      <!-- Background image [Hourglass] -->
      <AppImage src="hourglass.png" alt="image sablier" class="home__img-bg-block home__img-bg-block--hourglass" />

      <!-- Div Title -->
      <h3 v-text="$t('home.realization.title')" />

      <!-- Content -->
      <div class="home__realization-info-wrapper">
        <div v-for="(real, rIdx) in $tm('home.realization.sections')" :key="`home-intro-real--${rIdx}`"
             class="home__time-info">
          <h4 class="home__time-part-name" v-text="real.label" />
          <h4 class="home__time-spent" v-text="real.hours" />
        </div>
      </div>
    </div>
  </section>
</template>

<!-- CSS -->
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 dvw(80px);

  @include breakpoint('mob') {
    flex-direction: column;
    gap: mvh(16px);
    padding: mvh(14px) mvw(16px) mvh(16px);
  }

  @include breakpoint('tab') {
    flex-direction: column;
    gap: tvh(40px);
    padding: 0 tvw(40px) tvh(32px);
  }

  @include breakpoint('tab-land') {
    padding: 0 dvw(80px);
  }

  @include breakpoint('tiny-laptop') {
    padding: 0 dvw(80px);
  }

  & > div {
    position: relative;
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: 20px;
  }

  // Transparent img background in the divs (Feather & Hourglass)
  &__img-bg-block {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &--feather {
      width: dvh(494px);
      bottom: dvh(74px);

      @include breakpoint('mob') {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
      }

      @include breakpoint('tab') {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: tvw(494px);
      }
    }

    &--hourglass {
      width: dvh(290px);
      bottom: dvh(24px);
      transform: translateX(-45%);

      @include breakpoint('mob') {
        width: mvw(232px);
        bottom: mvh(14px);
      }

      @include breakpoint('tab') {
        width: tvw(334px);
        bottom: tvh(30px);
      }
    }
  }

  &__welcome {
    width: dvw(760px);
    padding: dvh(52px) dvw(42px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: dvh(32px);

    @include breakpoint('mob') {
      width: 100%;
      padding: mvh(32px) mvw(18px);
      gap: mvh(14px);
    }

    @include breakpoint('tab') {
      width: 100%;
      padding: tvh(28px) tvw(42px);
      gap: tvh(16px);
    }
  }

  &__realization {
    width: dvw(440px);
    padding: dvh(52px) dvw(30px);

    @include breakpoint('mob') {
      width: 100%;
      padding: mvh(32px) mvw(18px);
    }

    @include breakpoint('tab') {
      width: 100%;
      padding: tvh(46px) tvw(42px);
    }

    & h3 {
      margin-bottom: dvh(64px);

      @include breakpoint('mob') {
        margin-bottom: mvh(30px);
      }
    }
  }

  &__realization-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: dvh(30px);

    @include breakpoint('mob') {
      gap: mvh(30px);
    }

    @include breakpoint('tab') {
      gap: tvh(46px);
    }
  }

  &__time-info {
    display: flex;
    justify-content: space-between;
  }
}
</style>
