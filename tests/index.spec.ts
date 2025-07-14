import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index'
import HomeView from '../src/views/Landing.vue'

// Correct IntersectionObserver mock implementing the interface
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
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

    // Override window.location.href with a writable property
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: { href: '' }
    })

    await router.push('/documentation')
    await router.isReady()

    expect(window.location.href).toBe(import.meta.env.VITE_DOCS_URL)

    // Restore original window.location
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: originalLocation
    })
  })
})
