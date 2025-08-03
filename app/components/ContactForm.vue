<template>
  <div>
    <h2>Email</h2>
  </div>
</template>

<!-- <script setup>
import ArrowRight from '~/components/icons/Arrow-right.vue';

const mail = useMail();
const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);
const emailSent = ref(false);

const submitForm = () => {
  loading.value = true;
  const messageBody = `Name: ${name.value}\nEmail: ${email.value}\nMessage:\n\n${message.value}`;

  setTimeout(() => {
    emailSent.value = true;
    loading.value = false;
  }, 1000);

  mail.send({
    subject: 'New message from your website!',
    text: messageBody,
  });
  // .then(() => {
  //   console.log('Message sent!')
  // })
};

const submitLabel = computed(() => (loading.value ? 'Sending...' : 'Send'));
</script>

<template>
  <section id="contact-form" class="contact-section scroll-reveal">
    <div class="container">
      <div class="contact-section__box">
        <div class="contact-section__container">
          <h2 class="contact-section__title">
            <span>Say Hi!</span> and tell me about your idea
          </h2>
          <p>
            Big or small, I’m excited to hear what you’re working on. Whether
            you need a brand-new Shopify store or a unique feature built just
            for your business — I’m here to help.
          </p>
          <div class="contact-section__form">
            <div v-if="emailSent" class="contact-section__success-message">
              <div>
                Thanks for the message! <span>I’ll be in touch shortly.</span>
              </div>
            </div>
            <form @submit.prevent="submitForm">
              <input v-model="name" type="text" placeholder="Name" required />
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required />
              <textarea
                v-model="message"
                placeholder="Message"
                rows="3"
                required></textarea>
              <div class="contact-section__submit-wrap">
                <div class="contact-section__button-wrap">
                  <button
                    class="btn btn--text btn--icon"
                    type="submit"
                    :disabled="loading">
                    <span v-text="submitLabel"></span
                    ><ArrowRight v-if="!loading" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact-section {
  &__box {
    padding: 4rem 4rem;
    background: var(--navy);
    color: var(--white);
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    margin-bottom: 0;
    @media (min-width: 768px) {
      padding: 10rem 0;
    }
  }

  .container {
    @include mq(mobile-only) {
      padding: 0;
    }
  }

  &__container {
    max-width: 60rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 110%;
    margin-top: 0;
    @media (min-width: 768px) {
      font-size: 7.2rem;
    }
    span {
      font-weight: bold;
      color: var(--tan);
    }
  }

  &__form {
    width: 100%;
    margin-top: 3rem;
    position: relative;
  }

  &__success-message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--navy);
    display: flex;
    align-items: center;
    font-size: 2rem;
    z-index: 10;
    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  &__submit-wrap {
    text-align: right;
  }
  &__button-wrap {
    display: inline-block;
  }
}
</style> -->
