<template>
  <div class="sidebar" v-if="sidebarOpen">
    <font-awesome-icon icon="forward" class="sidebar-back fnt-btn fa-xl" @click="toggleSidebar()" />
    <ul class="sidebar-list">
      <RouterLink @click="toggleSidebar()" class="sidebar-navigation" to="/">{{
        t('Navbar.Home')
      }}</RouterLink>
      <RouterLink @click="toggleSidebar()" class="sidebar-navigation" to="/services">{{
        t('Navbar.Services')
      }}</RouterLink>
      <RouterLink @click="toggleSidebar()" class="sidebar-navigation" to="/showcase">{{
        t('Navbar.Showcase')
      }}</RouterLink>
      <RouterLink @click="toggleSidebar()" class="sidebar-navigation" to="/contact">{{
        t('Navbar.Contact')
      }}</RouterLink>
      <RouterLink @click="toggleSidebar()" class="sidebar-navigation" to="/about">{{
        t('Navbar.About')
      }}</RouterLink>
    </ul>
  </div>
  <nav class="nav">
    <div class="nav-content">
      <h1 class="nav-title">{{ t('Navbar.Title') }}</h1>
      <div class="navigation" v-if="!sidebarOpen">
        <font-awesome-icon
          icon="bars"
          class="navbar-dropdown fnt-btn fa-xl"
          @click="toggleSidebar()"
          v-if="isMobileDevice"
        />
      </div>

      <div class="navigation" v-if="!isMobileDevice">
        <RouterLink class="nav-navigation" to="/">{{ t('Navbar.Home') }}</RouterLink>
        <RouterLink class="nav-navigation" to="/services">{{ t('Navbar.Services') }}</RouterLink>
        <RouterLink class="nav-navigation" to="/showcase">{{ t('Navbar.Showcase') }}</RouterLink>
        <RouterLink class="nav-navigation" to="/contact">{{ t('Navbar.Contact') }}</RouterLink>
        <RouterLink class="nav-navigation" to="/about">{{ t('Navbar.About') }}</RouterLink>
        <div class="dropdown">
          <button class="nav-navigation dropbtn">{{ t('Navbar.Language') }}</button>
          <font-awesome-icon icon="caret-down" class="dropIcon" />
          <div class="dropdown-content">
            <a href="#" @click="changeLanguage('en')">{{ t('Navbar.ENG') }}</a>
            <a href="#" @click="changeLanguage('sv')">{{ t('Navbar.SWE') }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import isMobileDevice from '@/scripts/isMobileDevice'

import { ref } from 'vue'

const sidebarOpen = ref(false)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const { t, locale } = useI18n()

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
.nav {
  padding: 20px;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-dark);
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 20px 10px 20px;
  font-size: var(--text-sm);
}

.nav-navigation {
  color: var(--text-color);
  padding: 20px;
  background: none;
  border: none;
  font-size: var(--text-sm);

}

.sidebar-navigation {
  color: var(--text-color);
  padding: 20px;
  background: none;
  border: none;
  
}
.nav-navigation:hover {
  cursor: pointer;
  background: none;
  font-weight: var(--font-semibold);
  
}

.nav-title {
  color: var(--text-color);
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
}

.sidebar {
  height: 100%;
  width: 20%;
  position: absolute;
  right: 0;
  background-color: var(--color-dark);
  padding: 10px;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0;
}
.dropbtn {
  padding-right: 7px;
  justify-content: center;
}

</style>
