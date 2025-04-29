import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SupportView from '@/views/SupportView.vue'

describe('SupportView.vue', () => {
  it('renders the main title', () => {
    const wrapper = mount(SupportView)
    expect(wrapper.text()).toContain('Support')
  })

  it('renders the Community Support section', () => {
    const wrapper = mount(SupportView)
    expect(wrapper.text()).toContain('Community Support')
    expect(wrapper.text()).toContain('kostenlose Unterstützung')
  })

  it('renders the remsfal cloud link', () => {
    const wrapper = mount(SupportView)
    const link = wrapper.find('a[href="https://remsfal.online"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('Zur remsfal Cloud')
  })

  it('renders the Stack Overflow section and link', () => {
    const wrapper = mount(SupportView)
    const link = wrapper.find('a[href="https://stackoverflow.com/questions/tagged/remsfal"]')
    expect(wrapper.text()).toContain('Stack Overflow')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('Stack Overflow')
  })
})
