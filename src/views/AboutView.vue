<template>
  <div class="about-view">
    <h1 class="about-title">About Us</h1>
    <div class="about-card">
      <h2>Linus Lagergren</h2>
      <p>Grundare med passion för ärlig kommunikation</p>
      <img src="/src/assets/linus.jpg" alt="" width="100%" class="about-img" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.about-view {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.about-title {
  color: var(--text-color);
  text-align: center;
  font-weight: var(--font-extrabold);
  font-size: var(--text-6xl);
  background: -webkit-linear-gradient(#eee, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  width: 20%;
  color: var(--text-color);
  padding: 20px;
  margin: 40px;
  background-image: url(/src/assets/bg-normal.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.about-card h2 {
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  text-align: center;
}

.about-card p {
  font-style: italic;
  font-size: var(--text-sm);
  text-align: center;
}

.about-img {
  border-radius: 20px;
  padding: 10px;
}
</style>
