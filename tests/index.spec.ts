import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index.ts' 
import HomeView from '../src/views/Landing.vue'

// Fully typed IntersectionObserver mock for TS safety
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}

  observe(_target: Element): void {}
  unobserve(_target: Element): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

global.IntersectionObserver = MockIntersectionObserver

describe('Router basic test', () => {
  beforeEach(async () => {
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