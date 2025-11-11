import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PositioningSection from '@/components/PositioningSection.vue' // adjust path if needed

describe('PositioningSection.vue', () => {
  const mountComponent = () =>
    mount(PositioningSection, {
      global: {
        stubs: {
          // Custom PrimeVue Button stub that captures props
          Button: {
            name: 'Button',
            // declare the props we care about
            props: {
              label: String,
              as: { type: String, default: 'button' },
              href: String,
              rounded: [Boolean, String],
              class: String,
            },
            // render a simple tag so we can assert attributes
            template: `
              <component
                :is="as || 'button'"
                class="primevue-button-stub"
                :data-label="label"
                :href="href"
              >
                <slot />
              </component>
            `,
          },
        },
      },
    })

  it('renders the headline and subheadline', () => {
    const wrapper = mountComponent()
    expect(wrapper.get('h1').text()).toContain('Open Source Immobiliensoftware')
    expect(wrapper.get('p').text()).toContain('Mieter:innen und Kund:innen')
  })

  it('renders the CTA Button with correct text and URL', () => {
    const wrapper = mountComponent()
    const btn = wrapper.get('.primevue-button-stub')
    expect(btn.attributes('data-label')).toBe('Kostenlos testen')
    expect(btn.attributes('href')).toBe('https://remsfal.online/api/v1/authentication/login')
  })

  it('renders the product screenshot image with correct src and alt', () => {
    const wrapper = mountComponent()
    const img = wrapper.get('img[alt="REMSFAL preview"]')
    expect(img.attributes('src')).toBe('/landing/screen-1.png')
  })

  it('renders the decorative floating shapes container', () => {
    const wrapper = mountComponent()
    const shapes = wrapper.find('.floating-shapes')
    expect(shapes.exists()).toBe(true)
    expect(shapes.findAll('.shape').length).toBeGreaterThan(0)
  })
})
