<script setup>
import { ref } from 'vue';

const formId = ref('#contact-form');
const scrollToForm = () => {
  const formSection = document.querySelector(formId.value);
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="hero">
    <div class="container text-center">
      <h1 class="hero__title">
        Big Agency Expertise.<br /><span>Boutique Experience.</span>
      </h1>
      <p class="hero__description">
        The eCommerce expert behind top agency builds—now available to work
        directly with brands. Get senior strategy, execution, and results,
        without the layers. Just tailored, quality and hands-on delivery.
      </p>
      <button class="btn btn--primary hero__action" @click="scrollToForm">
        Let’s chat
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  color: var(--white);
  padding: 12% 2rem;
  color: var(--navy);
  @media (min-width: 768px) {
    padding: 15rem 0;
  }
  &__title {
    font-size: 5.6rem;
    margin-top: 0;
    line-height: 120%;
    @media (min-width: 768px) {
      font-size: 7.2rem;
    }
    span {
      font-weight: 700;
      color: var(--denin);
    }
  }
  &__description {
    max-width: 75rem;
    margin: 1.6rem auto 0;
    font-size: 1.8rem;
    line-height: 160%;
  }
  &__action {
    margin-top: 3rem;
  }
}
</style>
