<script setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer text-center">
    <div class="container">
      <p>© {{ currentYear }} Lucas Cardoso de Sa. All rights reserved.</p>
    </div>
  </footer>
</template>

<!-- <style lang="scss">
.footer {
  p {
    font-size: 1.2rem;
  }
}
</style> -->
