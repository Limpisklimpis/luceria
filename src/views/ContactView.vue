<template>
  <div class="contactView">
    <h1 class="contact-title">{{ t('Page.ContactPage.Title') }}</h1>
    <div class="contact-container">
      <div class="contact-subcontainer contact-mail">
        <h2 class="contact-subtitle"><font-awesome-icon icon="envelope" /> {{ t('Page.ContactPage.MailTitle') }}</h2>
        <div class="contact-info">
          <p class="contact-p">{{ t('Page.ContactPage.Mail') }} ‎</p>
          <a class="contact-p" href="mailto:recipient@example.com">info@luceria.se</a>
        </div>
      </div>

      <div class="contact-subcontainer contact-call">
        <h2 class="contact-subtitle"><font-awesome-icon icon="phone" /> {{ t('Page.ContactPage.PhoneTitle') }}</h2>
        <p class="contact-p">{{ t('Page.ContactPage.Phone') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.contact-title {
  color: var(--text-color);
  text-align: center;
  font-weight: var(--font-extrabold);
  font-size: var(--text-6xl);
  background: -webkit-linear-gradient(#eee, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  color: var(--text-color);
  text-align: center;
  font-weight: var(--font-normal);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-subcontainer {
  width: 25%;
  padding: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
}

.contact-p {
  color: var(--text-color);
  font-size: var(--text-sm);
}

.contact-info {
  display: flex;
  flex-direction: row;
}

.contact-info a {
  color: var(--color-light);
  padding: 0;
}

.contact-info a:hover {
  background: none;
}

.contact-call {
background: #0F354C;
background: linear-gradient(90deg,rgba(15, 53, 76, 1) 0%, rgba(47, 103, 131, 1) 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.contact-mail {
background: #2F6783;
background: linear-gradient(90deg,rgba(47, 103, 131, 1) 0%, rgba(15, 53, 76, 1) 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>
