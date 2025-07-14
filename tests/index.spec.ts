import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/Landing.vue'

function createTestRouter() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home', component: HomeView }
    ]
  })
}

describe('Router basic test', () => {
  let router

  beforeEach(async () => {
    router = createTestRouter()
    await router.push('/')
    await router.isReady()
  })

  it('renders HomeView on / route', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.exists()).toBe(true)
  })
})
