import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index.ts'
import HomeView from '../src/views/Landing.vue'

// Mock IntersectionObserver for test environment
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

// Mock import.meta.env for the test file
Object.defineProperty(import.meta, 'env', {
  value: {
    ...import.meta.env,
    VITE_DOCS_URL: 'https://mock-docs-url.test'
  }
})

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

  it('navigates to /research route', async () => {
    await router.push('/research')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('ResearchView')
  })

  it('navigates to /support route', async () => {
    await router.push('/support')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('SupportView')
  })

  it('navigates to /legal-notice route', async () => {
    await router.push('/legal-notice')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('LegalNoticeView')
  })

  it('navigates to /terms route', async () => {
    await router.push('/terms')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('TermsView')
  })

  it('navigates to /privacy route', async () => {
    await router.push('/privacy')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('PrivacyView')
  })

  it('redirects /documentation route', async () => {
    // Save original window.location
    const originalLocation = window.location
    // Mock window.location.href
    delete (window as any).location
    window.location = { href: '' } as any

    await router.push('/documentation')
    await router.isReady()

    expect(window.location.href).toBe('https://mock-docs-url.test')

    // Restore original window.location
    window.location = originalLocation
  })
})
