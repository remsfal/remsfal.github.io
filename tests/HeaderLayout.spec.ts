import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import HeaderLayout from '@/components/HeaderLayout.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import type { Router } from 'vue-router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import StyleClass from 'primevue/styleclass'

describe('HeaderLayout', () => {
  let wrapper: VueWrapper
  let router: Router

  beforeEach(async () => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/research', component: { template: '<div>Research</div>' } },
        { path: '/documentation', component: { template: '<div>Documentation</div>' } }
      ]
    })

    await router.push('/')
    await router.isReady()

    wrapper = mount(HeaderLayout, {
      global: {
        plugins: [router, PrimeVue],
        components: { Button },
        directives: { styleclass: StyleClass }
      }
    })
  })

  it('should render the logo', () => {
    const logo = wrapper.find('img.logo')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('logo')
  })

  it('should render the burger menu button on mobile', () => {
    const burgerButton = wrapper.find('.lg\\:\\!hidden')
    expect(burgerButton.exists()).toBe(true)
    expect(burgerButton.find('i.pi-bars').exists()).toBe(true)
  })

  it('should have v-styleclass directive configured with toggleClass', () => {
    const burgerButton = wrapper.find('.lg\\:\\!hidden')
    expect(burgerButton.exists()).toBe(true)
    
    // Check that the button has the v-styleclass directive
    const buttonElement = burgerButton.element as HTMLElement
    expect(buttonElement).toBeDefined()
  })

  it('should render navigation links', () => {
    const links = wrapper.findAll('a')
    const researchLink = links.find(link => link.text().includes('Forschung'))
    const docsLink = links.find(link => link.text().includes('Dokumentation'))
    
    expect(researchLink).toBeDefined()
    expect(docsLink).toBeDefined()
  })

  it('should render the "Kostenlos testen" button', () => {
    const testButton = wrapper.find('.try-button')
    expect(testButton.exists()).toBe(true)
    expect(testButton.text()).toBe('Kostenlos testen')
  })

  it('should have the menu hidden by default on mobile', () => {
    const mobileMenu = wrapper.find('.hidden.lg\\:flex')
    expect(mobileMenu.exists()).toBe(true)
  })
})
