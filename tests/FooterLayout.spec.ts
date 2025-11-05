import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import FooterLayout from '@/components/FooterLayout.vue'

describe('FooterLayout', () => {
  let wrapper: VueWrapper
  let router: ReturnType<typeof createRouter>

  beforeEach(async () => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/research', component: { template: '<div>Research</div>' } },
        { path: '/documentation', component: { template: '<div>Documentation</div>' } },
        { path: '/support', component: { template: '<div>Support</div>' } },
        { path: '/legal-notice', component: { template: '<div>Legal</div>' } },
        { path: '/terms', component: { template: '<div>Terms</div>' } },
        { path: '/privacy', component: { template: '<div>Privacy</div>' } }
      ]
    })

    wrapper = mount(FooterLayout, {
      global: {
        plugins: [router]
      }
    })
    await router.isReady()
  })

  it('should render the MIT License text', () => {
    const license = wrapper.find('.license')
    expect(license.exists()).toBe(true)
    expect(license.text()).toBe('Released under the MIT License')
  })

  it('should render the Copyright text', () => {
    const copyright = wrapper.find('.copyright')
    expect(copyright.exists()).toBe(true)
    expect(copyright.text()).toContain('Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik')
  })

  it('should have dark mode compatible text color classes on license text', () => {
    const license = wrapper.find('.license')
    expect(license.classes()).toContain('text-surface-700')
    expect(license.classes()).toContain('dark:text-surface-100')
  })

  it('should have dark mode compatible text color classes on copyright text', () => {
    const copyright = wrapper.find('.copyright')
    expect(copyright.classes()).toContain('text-surface-700')
    expect(copyright.classes()).toContain('dark:text-surface-100')
  })

  it('should render the logo', () => {
    const logo = wrapper.find('.logo')
    expect(logo.exists()).toBe(true)
  })

  it('should render navigation sections', () => {
    const headings = wrapper.findAll('h4')
    expect(headings.length).toBe(3)
    expect(headings[0]?.text()).toBe('Ressourcen')
    expect(headings[1]?.text()).toBe('Community')
    expect(headings[2]?.text()).toBe('Sonstiges')
  })
})
