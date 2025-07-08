import { createRouter, createWebHistory } from 'vue-router'
import { defineComponent } from 'vue'
import HomeView from '@/views/Landing.vue'

const EmptyComponent = defineComponent({
  name: 'EmptyComponent',
  setup() {
    return () => null
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/research',
      name: 'ResearchView',
      component: () => import('../views/ResearchView.vue')
    },
    {
      path: '/documentation',
      name: 'DocumentationRedirect',
      component: EmptyComponent,
      beforeEnter() {
        window.location.href = 'http://localhost:5174/docs/'
      }
    },
    {
      path: '/support',
      name: 'SupportView',
      component: () => import('../views/SupportView.vue')
    },
    {
      path: '/legal-notice',
      name: 'LegalNoticeView',
      component: () => import('../views/LegalNoticeView.vue')
    },
    {
      path: '/terms',
      name: 'TermsView',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/privacy',
      name: 'PrivacyView',
      component: () => import('../views/PrivacyView.vue')
    }
  ]
})

export default router
