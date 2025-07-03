<template>
  <nav class="footer">
    <div class="footer-child">
      <h2>{{ t('Footer.Services.Title') }}</h2>
      <RouterLink class="nav-link" to="/services">{{ t('Footer.Services.Title') }}</RouterLink>
    </div>
    <div class="footer-child">
      <h2>{{ t('Footer.About.Title') }}</h2>
      <p class="nav-link">{{ t('Footer.About.About') }}</p>
      <p class="nav-link">{{ t('Footer.About.History') }}</p>
    </div>
    <div class="footer-child">
      <h2>{{ t('Footer.Contact.Title') }}</h2>
      <RouterLink class="nav-link" to="/mail">{{ t('Footer.Contact.Mail') }}</RouterLink>
      <p class="nav-link">{{ t('Footer.Contact.Phone') }}</p>
    </div>
    <div v-motion="'fade'" class="footer-child">
      <h2>{{ t('Footer.Socials.Title') }}</h2>
      <RouterLink class="nav-link" to="/instagram">{{ t('Footer.Socials.Instagram') }}</RouterLink>
      <RouterLink class="nav-link" to="/tiktok">{{ t('Footer.Socials.Tiktok') }}</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--color-dark);
  display: flex;
  justify-content: space-around;
  color: var(--text-color);
  padding: 20px 0;
  flex-direction: row;
}

.nav-link {
  color: var(--text-color);
  padding: 0;
  font-size: var(--text-sm);
}

.nav-link:hover {
  background: none;
}

.footer-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-child h2 {
  font-weight: var(--font-bold);
  font-size: var(--text-lg);

}
</style>
