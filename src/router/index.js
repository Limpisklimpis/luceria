import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'

import ServiceCvView from '@/views/ServiceCvView.vue'
import ServiceInterviewView from '@/views/ServiceInterviewView.vue'
import ServiceEmployerView from '@/views/ServiceEmployerView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/services/employer',
      name: 'employer',
      component: ServiceEmployerView,
    },
    {
      path: '/services/interview',
      name: 'interview',
      component: ServiceCvView,
    },
  ],
})

export default router
