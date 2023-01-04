import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mission',
      name: 'mission',
      component: () => import('../views/MissionView.vue')
    },
    {
      path: '/thesis',
      name: 'thesis',
      component: () => import('../views/ThesisView.vue')
    },
    {
      path: '/get-started',
      name: 'getStarted',
      component: () => import('../views/GetStartedView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue')
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import('../views/RoadmapView.vue')
    },
    {
      path: '/legal-notice',
      name: 'legalNotice',
      component: () => import('../views/LegalNoticeView.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    }
  ]
})

export default router
