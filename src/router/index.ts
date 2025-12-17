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
      name: 'HomeRedirect',
      component: EmptyComponent,
      beforeEnter() {
        window.location.href = import.meta.env.VITE_DOCS_URL
      }
    },
    {
      path: '/research',
      name: 'ResearchRedirect',
      component: EmptyComponent,
      beforeEnter() {
        window.location.href = import.meta.env.VITE_DOCS_URL + '/forschung'
      }
    },
    {
      path: '/documentation',
      name: 'DocumentationRedirect',
      component: EmptyComponent,
      beforeEnter() {
        window.location.href = import.meta.env.VITE_DOCS_URL
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
