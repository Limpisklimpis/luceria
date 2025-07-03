<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="page">
    <NavbarComponent />

    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup></script>

<style>
html,
body {
  margin: 0;
}
.content {
  flex: 1;
}

#app {
  margin: 0;
  padding: 0;
}
:root {
  --background-color: #323232;
  --background-secondary-color: #4a4a4a;

  --color-primary: #3d84a8;
  --color-secondary: #569ec2;
  --color-accent: #7cb3cf;
  --color-dark: #0f354c;
  --color-muted: #2f6783;
  --color-light: #9db6c2;
  --color-white: #ffffff;

  --text-color: #ffff;
  --text-color-light: #d1d1d1;
  --text-secondary-color: #0f354c;

  --success-color: green;
  --error-color: red;
  --info-color: lightblue;
  --warning-color: orange;

  --font-light: 200;
  --font-regular: 300;
  --font-medium: 400;
  --font-semibold: 500;
  --font-bold: 600;
  --font-extrabold: 700;

  --text-xxs: 10px;
  --text-xs: 12px;
  --text-sm: 14px;
  --text-md: 16px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 30px;
  --text-3xl: 36px;
  --text-4xl: 40px;
  --text-5xl: 44px;
  --text-6xl: 48px;
  --text-display: 48px;

  --border-color: var(--color-accent);
}

@media (min-width: 768px) {
  :root {
    --text-xxs: 12px;
    --text-xs: 14px;
    --text-sm: 16px;
    --text-md: 18px;
    --text-lg: 24px;
    --text-xl: 30px;
    --text-2xl: 36px;
    --text-3xl: 40px;
    --text-4xl: 48px;
    --text-5xl: 56px;
    --text-6xl: 64px;
  }
}

@media (min-width: 1024px) {
  :root {
    --text-xxs: 14px;
    --text-xs: 16px;
    --text-sm: 18px;
    --text-md: 20px;
    --text-lg: 28px;
    --text-xl: 36px;
    --text-2xl: 40px;
    --text-3xl: 48px;
    --text-4xl: 56px;
    --text-5xl: 64px;
    --text-6xl: 72px;
  }
}

@media (min-width: 1440px) {
  :root {
    --text-xxs: 16px;
    --text-xs: 18px;
    --text-sm: 20px;
    --text-md: 24px;
    --text-lg: 32px;
    --text-xl: 40px;
    --text-2xl: 48px;
    --text-3xl: 56px;
    --text-4xl: 64px;
    --text-5xl: 72px;
    --text-6xl: 80px;
  }
}

@media (min-width: 2560px) {
  :root {
    --text-xxs: 18px;
    --text-xs: 20px;
    --text-sm: 24px;
    --text-md: 28px;
    --text-lg: 36px;
    --text-xl: 48px;
    --text-2xl: 56px;
    --text-3xl: 64px;
    --text-4xl: 72px;
    --text-5xl: 80px;
    --text-6xl: 96px;
  }
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.btn-soft {
  background: var(--color-muted);
  box-shadow: 0px 0px 2px var(--color-muted);
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  color: var(--text-color);
  transition:
    border 0.3s ease,
    color 0.3s ease,
    filter 0.3s ease;
}

.btn-soft:hover {
  background: var(--color-muted);
  cursor: pointer;
  filter: brightness(0.9);
}

.btn-outlined {
  background: var(--color-muted);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 10px 10px;
  color: var(--text-color);
  transition:
    border 0.3s ease,
    color 0.3s ease,
    filter 0.3s ease;
}

.btn-outlined:hover {
  background: var(--color-muted);
  cursor: pointer;
  filter: brightness(0.9);
}

.input {
  padding: 10px 10px;
  border-radius: 5px;
  color: var(--text-secondary-color);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  border: 1px solid var(--border-color);
  transition:
    border 0.3s ease,
    color 0.3s ease;
  box-shadow: 2px 2px 4px 2px rgba(255, 255, 255, 0.05);
}

.input:placeholder {
  color: var(--border-color);
}

.input:focus {
  border: 1px solid var(--color-muted);
  color: var(--text-secondary-color);
  outline: none;
}

.dropdown {
  position: relative;
  display: inline-block;
  transition: 0.3s ease;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  overflow: hidden;
  background-color: var(--color-dark);
  border-radius: 5px;
  border: 1px solid var(--border-color);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 5px;
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dropdown-content a {
  color: var(--text-color);
  text-align: center;
}

.fnt-btn {
  color: var(--text-color);
}
.fnt-btn:hover {
  color: var(--text-color);
  cursor: pointer;
}

.page {
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
}
</style>
