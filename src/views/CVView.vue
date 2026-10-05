<script setup lang="ts">
import AppImage from '@/components/AppImage.vue'
</script>

<!-- HTML -->
<template>
  <section class="cv">
    <!-- LEFT COL : Profile and Hobbies if desktop -->
    <div class="cv__left-col">
      <!-- Profile -->
      <div class="cv__container">
        <h4 class="cv__section-title" v-text="$t('cv.profile.title')" />
        <p v-for="(profile, cIdx) in $tm('cv.profile.content')" :key="`cv-profile--${cIdx}`" v-html="profile" />
      </div>

      <!-- Hobbies - DESK -->
      <div v-if="$env.isDesk" class="cv__container">
        <h4 class="cv__section-title" v-text="$t('cv.hobbies.title')" />

        <ul>
          <li v-for="(hobby, hIdx) in $tm('cv.hobbies.list')" :key="`cv-hobby--${hIdx}`" v-text="hobby" />
        </ul>
      </div>
    </div>

    <!-- MIDDLE COL : Buttons & Book -->
    <div class="cv__middle-col">
      <div class="cv__buttons-wrapper">
        <!-- Go to Figma -->
        <a href="https://www.figma.com/design/lYmJcTbVC1W4phfjapLugi/Website?node-id=7-449&t=xdZMuSqXg60IrHuh-1" target="_blank" class="cv__button cv__button--secondary"><p v-text="$t('cv.buttons.figma')" /></a>

        <!-- Download CV btn -->
        <a href="/cv.pdf" download class="cv__button"><h4 v-text="$t('cv.buttons.download')" /></a>

        <!-- Go to Github -->
        <a href="https://github.com/qaltamore/CV" target="_blank" class="cv__button cv__button--secondary"><p v-text="$t('cv.buttons.git')" /></a>
      </div>

      <!-- Book -->
      <div class="cv__book-wrapper">
        <AppImage src="book.png" alt="image livre" class="cv__img-book" />
      </div>
    </div>

    <!-- RIGHT COL : Coordinates and Skills (and Hobbies when mobile) -->
    <div class="cv__right-col">
      <!-- Hobbies - MOB -->
      <div v-if="!$env.isDesk" class="cv__container">
        <h4 class="cv__section-title" v-text="$t('cv.hobbies.title')" />

        <ul>
          <li v-for="(hobby, hIdx) in $tm('cv.hobbies.list')" :key="`cv-hobby--${hIdx}`" v-text="hobby" />
        </ul>
      </div>

      <!-- Coordinates -->
      <div class="cv__container">
        <h4 class="cv__section-title" v-text="$t('cv.coordinates.title')" />
        <div v-for="(coordinate, cIdx) in $tm('cv.coordinates.content')" :key="`cv-coord--${cIdx}`" class="cv__coordinate">
          <AppImage :src="coordinate.icon" :alt="coordinate.alt" class="cv__coordinate-icon" />
          <p v-text="coordinate.text" />
        </div>
      </div>

      <!-- Skills -->
      <div class="cv__container">
        <h4 class="cv__section-title" v-text="$t('cv.skills.title')" />

        <p class="cv__section-subtitle"><strong>{{ $t('cv.skills.languages.label') }}</strong></p>
        <ul>
          <li v-for="(language, lIdx) in $tm('cv.skills.languages.list')" :key="`cv-lang--${lIdx}`" v-text="language" />
        </ul>

        <p class="cv__section-subtitle"><strong>{{ $t('cv.skills.tools.label') }}</strong></p>
        <ul>
          <li v-for="(tool, tIdx) in $tm('cv.skills.tools.list')" :key="`cv-tool--${tIdx}`" v-text="tool" />
        </ul>
      </div>
    </div>
  </section>
</template>

<!-- CSS -->
<style scoped lang="scss">
.cv {
  width: 100%;
  height: 100%;
  padding: dvh(50px) dvw(50px);

  display: flex;
  justify-content: space-between;
  gap: dvw(30px);

  @include breakpoint('mob') {
    padding: mvh(20px) mvw(14px);

    flex-direction: column;
    gap: 0;
  }

  // CONTAINERS
  &__container {
    width: dvw(330px);
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: 20px;
    padding: drem(18px);
    margin-bottom: drem(18px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    @include breakpoint('mob') {
      width: 100%;
      padding: mvw(18px);
      margin-bottom: mvh(18px);
    }

    & p:not(:last-child) {
      margin-bottom: drem(16px);

      @include breakpoint('mob') {
        margin-bottom: mvh(2px);
      }
    }

    & ul {
      list-style-type: disc;
      padding-left: 2em;

      @include breakpoint('mob') {
        padding-left: mvw(28px);
      }
    }
  }

  // TITLES
  &__section-title {
    margin-bottom: drem(18px);

    @include breakpoint('mob') {
      margin-bottom: mvh(16px);
    }
  }

  &__section-subtitle {
    margin-top: drem(10px);
    margin-bottom: drem(6px);

    @include breakpoint('mob') {
      margin-top: mvh(16px);
      margin-bottom: mvh(2px);
    }

    &:first-of-type {
      margin-top: 0;
    }
  }

  &__buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    @include breakpoint('mob') {
      gap: mvw(12px);
    }
  }

  &__button {
    padding: dvh(18px) dvw(48px);
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    color: $red-dark;

    @include breakpoint('mob') {
      padding: mvh(12px) mvw(16px);
    }

    &--secondary {
      padding: dvh(9px) dvw(24px);
      font-weight: bold;

      @include breakpoint('mob') {
        padding: mvh(5px) mvw(10px);
      }
    }
  }

  &__book-wrapper {
    margin-top: dvh(70px);

    @include breakpoint('mob') {
      margin: mvh(120px) 0 mvh(80px);
    }
  }

  &__img-book {
    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));

    @include breakpoint('mob') {
      transform-origin: left center;
      transform: scale(1.9);
    }
  }

  /** LEFT COLUMN **/
  &__left-col {
    @include breakpoint('mob') {
      order: 2;
    }
  }

  /** MIDDLE COLUMN **/
  &__middle-col {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint('mob') {
      order: 1;
    }
  }

  /** RIGHT COLUMN **/
  &__right-col {
    @include breakpoint('mob') {
      order: 3;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  // COORDINATES
  &__coordinate {
    height: drem(38px);
    margin-top: drem(18px);

    display: flex;
    align-items: center;

    @include breakpoint('mob') {
      height: mvh(38px);
      margin-top: mvh(8px);
    }

    &:first-of-type {
      margin-top: 0;
    }

    &-icon {
      margin-right: drem(14px);

      @include breakpoint('mob') {
        margin-right: mvw(14px);
      }
    }
  }
}
</style>
