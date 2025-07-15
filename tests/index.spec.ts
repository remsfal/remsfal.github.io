import { describe, it, expect, beforeEach, beforeAll, afterAll } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index'
import HomeView from '../src/views/Landing.vue'

// Mock IntersectionObserver globally for these tests
beforeAll(() => {
  class IntersectionObserverMock {
    constructor(callback: IntersectionObserverCallback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  global.IntersectionObserver = IntersectionObserverMock as any
})

afterAll(() => {
  delete (global as any).IntersectionObserver
})

describe('Router basic test', () => {
  beforeEach(async () => {
    await router.push('/')
    await router.isReady()
  })

  it('navigates to home route "/"', async () => {
    await router.push('/')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('renders HomeView component on "/" route', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('navigates to /research route', async () => {
    await router.push('/research')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('ResearchView')
  })
})
