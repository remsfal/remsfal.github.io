import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '../src/router/index.ts'
import HomeView from '../src/views/Landing.vue'

class MockIntersectionObserver {
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

globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver

describe('Router View Tests', () => {
  beforeEach(async () => {
    await router.isReady()
  })

  it('renders HomeView on / route', async () => {
    await router.push('/')
    const wrapper = mount(HomeView, {
      global: { plugins: [router] }
    })
    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.exists()).toBe(true)
  })

  it('navigates to /research and loads ResearchView', async () => {
    const route = router.resolve('/research')
    expect(route.name).toBe('ResearchView')
  })

  it('navigates to /support and loads SupportView', async () => {
    const route = router.resolve('/support')
    expect(route.name).toBe('SupportView')
  })

  it('navigates to /legal-notice and loads LegalNoticeView', async () => {
    const route = router.resolve('/legal-notice')
    expect(route.name).toBe('LegalNoticeView')
  })

  it('navigates to /terms and loads TermsView', async () => {
    const route = router.resolve('/terms')
    expect(route.name).toBe('TermsView')
  })

  it('navigates to /privacy and loads PrivacyView', async () => {
    const route = router.resolve('/privacy')
    expect(route.name).toBe('PrivacyView')
  })
})
