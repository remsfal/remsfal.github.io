import { describe, it, expect, beforeEach, beforeAll, afterAll, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index'
import HomeView from '../src/views/Landing.vue'

beforeAll(() => {
  class IntersectionObserverMock {
    root: null = null;
    rootMargin: string = '';
    thresholds: ReadonlyArray<number> = [];

    observe(_target?: Element) {
      // mock observe
    }

    unobserve(_target?: Element) {
      // mock unobserve
    }

    disconnect() {
      // mock disconnect
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  globalThis.IntersectionObserver = IntersectionObserverMock as any;
});




afterAll(() => {
  delete (globalThis as any).IntersectionObserver
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
  }, 20000)

  it('navigates to /documentation and triggers redirect via href', async () => {
    const originalLocation = window.location
  
    const hrefSetter = vi.fn()
  
    // Override window.location with a custom setter for href
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...originalLocation,
        set href(value: string) {
          hrefSetter(value)
        },
      },
    })
  
    await router.push('/documentation')
    await router.isReady()
  
    expect(hrefSetter).toHaveBeenCalledWith(import.meta.env.VITE_DOCS_URL)
  
    // Restore the original window.location
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    })
  })
  
  

  it('renders HomeView component on "/" route', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(router.currentRoute.value.name).toBe('home')
  }, 20000)

  it('navigates to /research route', async () => {
    await router.push('/research')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('ResearchView')
  }, 20000)
})
