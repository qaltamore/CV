<script setup lang="ts">
import AppImage from '@/components/AppImage.vue'
</script>

<template>
  <section class="home">
    <div class="home__welcome">
      <!-- Background image [Feather] -->
      <AppImage src="feather.png" alt="image plume" class="home__img-bg-block home__img-bg-block--feather" />

      <!-- Div Title -->
      <h3>Bienvenue</h3>

      <!-- Content -->
      <p>Mes salutations.</p>
      <p>Je suis flatté d’avoir sollicité votre attention, et j’espère que votre parcours sur ce site sera plaisant.
        Vous pourrez retrouver <strong>différentes sections</strong> à l’aide du <strong>menu burger</strong> (en haut à droite).</p>
      <p>Je suis un <strong>Développeur Front VueJS</strong> et je ne suis pas Designer, loin de là. Aussi ce site n’est pas forcément le plus exceptionnel que vous croiserez, mais il est <strong>fait de ma main</strong>, de la maquette au développement, en passant par les animations.</p>
      <p>Pour vous donner une idée du temps approximatif consacré à ce dernier, je vous invite à regarder <strong>les temps inscrits sur votre droite</strong>.</p>
      <p></p>
      <p>Tous les éléments sont <strong>à votre disposition</strong> si vous le souhaitez. (Figma et Git notamment)
        N’hésitez pas à me demander les ressources si vous ne les avez pas déjà.</p>
      <p>Je finirai en vous souhaitant une <strong>excellente journée</strong>, et une <strong>bonne navigation</strong> !</p>
    </div>

    <div class="home__realization">
      <!-- Background image [Hourglass] -->
      <AppImage src="hourglass.png" alt="image sablier" class="home__img-bg-block home__img-bg-block--hourglass" />

      <!-- Div Title -->
      <h3>Temps de Réalisation</h3>

      <!-- Content -->
      <div class="home__realization-info-wrapper">
        <!-- Mockup & Assets -->
        <div class="home__time-info">
          <h4 class="home__time-part-name">Maquette & Assets</h4>
          <h4 class="home__time-spent">12h</h4>
        </div>
        <!-- Site -->
        <div class="home__time-info">
          <h4 class="home__time-part-name">Site</h4>
          <h4 class="home__time-spent">8h</h4>
        </div>
        <!-- Animations -->
        <div class="home__time-info">
          <h4 class="home__time-part-name">Animations</h4>
          <h4 class="home__time-spent">5h</h4>
        </div>
        <!-- Experiences -->
        <div class="home__time-info">
          <h4 class="home__time-part-name">Expériences</h4>
          <h4 class="home__time-spent">2h</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: dvh(160px) dvw(80px) 0;

  @include breakpoint('tiny-laptop') {
    padding: dvh(140px) dvw(80px) 0;
  }

  & > div {
    position: relative;
    background-image: url("@images/parchment-bg.jpg");
    background-size: cover;
    border-radius: drem(20px);
  }

  &__welcome {
    padding: dvh(52px) dvw(42px);
    width: dvw(760px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: dvh(32px);
  }

  &__img-bg-block {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &--feather {
      width: dvh(494px);
      bottom: dvh(74px);
    }

    &--hourglass {
      width: dvh(290px);
      bottom: dvh(24px);
      transform: translateX(-45%);
    }
  }

  &__realization {
    width: dvw(440px);
    padding: dvh(52px) dvw(30px);

    & h3 {
      margin-bottom: dvh(64px);
    }
  }

  &__realization-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: dvh(30px);
  }

  &__time-info {
    display: flex;
    justify-content: space-between;
  }
}
</style>
