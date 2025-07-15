import { describe, it, expect, beforeEach, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index.ts'
import HomeView from '../src/views/Landing.vue'

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

beforeAll(() => {
  window.scrollTo = () => {}

  // // Mock import.meta.env to include your docs URL
  // // @ts-ignore
  // import.meta.env = {
  //   ...import.meta.env,
  //   VITE_DOCS_URL: 'http://localhost:5174/docs/',
  // }
})

describe('Router basic test', () => {
  beforeEach(async () => {
    let href = ''

    // Remove window.location so we can redefine it
    delete (window as any).location

    // Mock window.location with getter/setter for href as string
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      get() {
        return {
          get href() {
            return href
          },
          set href(url: string) {
            href = url
          },
        }
      },
      set(value) {
        href = value
      },
    })

    await router.push('/')
    await router.isReady()
  })

  it('redirects /documentation to external docs URL', async () => {
    await router.push('/documentation')
    await new Promise((resolve) => setTimeout(resolve, 0)) // wait a tick if needed

    expect(window.location.href).toBe(import.meta.env.VITE_DOCS_URL)
  })

  it('navigates to home', async () => {
    await router.push('/')
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('renders HomeView on / route', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('navigates to /research', async () => {
    await router.push('/research')
    expect(router.currentRoute.value.name).toBe('ResearchView')
  })
})
