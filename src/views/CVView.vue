<script setup lang="ts">
import AppImage from '@/components/AppImage.vue'
</script>

<!-- HTML -->
<template>
  <section class="cv">
    <div class="cv__left-col">
      <!-- Profile -->
      <div class="cv__container">
        <h4 class="cv__section-title">Profil</h4>
        <p>Je suis un développeur passionné par deux principaux langages, le CSS et le JavaScript.</p>
        <p>Au cours de mes années d’expérience, j’ai pu me plonger dans de nombreux langages différents, mais ce sont bien ces deux-là qui ont conquit mon cœur.</p>
        <p>Je suis du genre à aimer bien faire les choses, j’ai à coeur de délivrer un travail de qualité, et rapidement.</p>
        <p>J’ai confiance en mes capacités de compréhension, d’analyse et d’apprentissage, ce qui me permet d’être serein à l’idée de rejoindre un nouveau projet ou de prendre un nouveau sujet.</p>
        <p>J’attache aussi une grande importance à la maîtrise de mon environnement et son améliorer continue, et les sujets techniques me plaisent grandement.</p>
      </div>

      <!-- Hobbies -->
      <div class="cv__container">
        <h4 class="cv__section-title">Loisirs</h4>

        <ul>
          <li>Craft</li>
          <li>JDR</li>
          <li>Écriture</li>
          <li>Jeux de Société</li>
        </ul>
      </div>
    </div>

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

    <div class="cv__right-col">
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

  // CONTAINERS
  &__container {
    width: dvw(330px);
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: 20px;
    padding: drem(18px);
    margin-bottom: drem(18px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    & p:not(:last-child) {
      margin-bottom: drem(16px);
    }

    & ul {
      list-style-type: disc;
      padding-left: 2em;
    }
  }

  // TITLES
  &__section-title {
    margin-bottom: drem(18px);
  }

  &__section-subtitle {
    margin-top: drem(10px);
    margin-bottom: drem(6px);

    &:first-of-type {
      margin-top: 0;
    }
  }

  // COORDINATES
  &__coordinate {
    height: drem(38px);
    margin-top: drem(18px);

    display: flex;
    align-items: center;

    &:first-of-type {
      margin-top: 0;
    }

    &-icon {
      margin-right: drem(14px);
    }
  }

  /** MIDDLE COLUMN **/
  &__middle-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }

  &__button {
    padding: dvh(18px) dvw(48px);
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    color: $red-dark;

    &--secondary {
      padding: dvh(9px) dvw(24px);
      font-weight: bold;
    }
  }

  &__book-wrapper {
    margin-top: dvh(70px);
  }

  &__img-book {
    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));
  }
}
</style>
