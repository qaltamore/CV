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
        <h4 class="cv__section-title">Profil</h4>
        <p>Je suis un développeur passionné par deux principaux langages, le CSS et le JavaScript.</p>
        <p>Au cours de mes années d’expérience, j’ai pu me plonger dans de nombreux langages différents, mais ce sont bien ces deux-là qui ont conquit mon cœur.</p>
        <p>Je suis du genre à aimer bien faire les choses, j’ai à coeur de délivrer un travail de <strong>qualité</strong>, et <strong>rapidement</strong>.</p>
        <p>J’ai confiance en mes capacités de <strong>compréhension</strong>, <strong>d’analyse</strong> et <strong>d’apprentissage</strong>, ce qui me permet d’être serein à l’idée de rejoindre un nouveau projet ou de prendre un nouveau sujet.</p>
        <p>J’attache aussi une grande importance à la <strong>maîtrise</strong> de mon <strong>environnement</strong> et son <strong>amélioration continue</strong>, et les <strong>sujets techniques</strong> me plaisent grandement.</p>
      </div>

      <!-- Hobbies - DESK -->
      <div v-if="$env.isDesk" class="cv__container">
        <h4 class="cv__section-title">Loisirs</h4>

        <ul>
          <li>Craft</li>
          <li>JDR</li>
          <li>Écriture</li>
          <li>Jeux de Société</li>
        </ul>
      </div>
    </div>

    <!-- MIDDLE COL : Buttons & Book -->
    <div class="cv__middle-col">
      <div class="cv__buttons-wrapper">
        <!-- Go to Figma -->
        <a href="https://www.figma.com/design/lYmJcTbVC1W4phfjapLugi/Website?node-id=7-449&t=xdZMuSqXg60IrHuh-1" target="_blank" class="cv__button cv__button--secondary"><p>Figma</p></a>

        <!-- Download CV btn -->
        <a href="/cv.pdf" download class="cv__button"><h4>Télécharger CV</h4></a>

        <!-- Go to Github -->
        <a href="https://github.com/qaltamore/CV" target="_blank" class="cv__button cv__button--secondary"><p>Git</p></a>
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
        <h4 class="cv__section-title">Loisirs</h4>

        <ul>
          <li>Craft</li>
          <li>JDR</li>
          <li>Écriture</li>
          <li>Jeux de Société</li>
        </ul>
      </div>

      <!-- Coordinates -->
      <div class="cv__container">
        <h4 class="cv__section-title">Coordonnées</h4>
        <div class="cv__coordinate">
          <AppImage src="icons/phone.svg" alt="image de téléphone" class="cv__coordinate-icon" />
          <p>06 09 42 51 33</p>
        </div>
        <div class="cv__coordinate">
          <AppImage src="icons/mail.svg" alt="image d'e-mail" class="cv__coordinate-icon" />
          <p>altamore.quentin@gmail.com</p>
        </div>
        <div class="cv__coordinate">
          <AppImage src="icons/location.svg" alt="image de localisation" class="cv__coordinate-icon" />
          <p>Carignan-de-Bordeaux - 33360</p>
        </div>
      </div>

      <!-- Skills -->
      <div class="cv__container">
        <h4 class="cv__section-title">Compétences</h4>

        <p class="cv__section-subtitle"><strong>Langage</strong></p>
        <ul>
          <li>Vue.js</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>

        <p class="cv__section-subtitle"><strong>Outils</strong></p>
        <ul>
          <li>Git</li>
          <li>Figma</li>
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
