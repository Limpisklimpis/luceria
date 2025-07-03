<script setup></script>

<template>
  <div class="serviceView">
    <h1>{{ t('Page.ServicesPage.Title') }}</h1>
    <div class="services">
      <div class="service" v-for="service in services">
        <h2>{{ service.name }}</h2>
        <div class="services-description">
          <p>{{ service.description }}</p>
        </div>
        <RouterLink class="btn-soft services-button" :to="service.route">Read more</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const services = ref([
  {
    name: 'Employer Branding Content Package',
    description:
      'Lucerias kärntjänst är ett employer branding-paket som kombinerar strategi, storytelling och contentproduktion. Tjänsten är skapad för företag som vill nå ut till framtida medarbetare och stärka sin attraktionskraft – på ett sätt som faktiskt känns äkta.',
    route: '/services/employer',
  },
])
</script>

<style scoped>
h1 {
  font-weight: var(--font-extrabold);
  text-align: center;
  font-size: var(--text-6xl);
  background: -webkit-linear-gradient(#eee, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 40px;;
}

.services {
  border: 1px solid var(--color-muted);
  border-radius: 5px;
  height: auto;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  background-image: url('/src/assets/bg_dark.JPG');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.services .service {
  border: 1px solid var(--color-muted);
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 100%;
  background-color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.services h2 {
  color: var(--text-color);
  background-color: var(--color-muted);
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
}

.services-button {
  display: flex;
  justify-content: center;
}

.services-description {
  color: var(--text-color-light);
  background-color: var(--color-muted);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
