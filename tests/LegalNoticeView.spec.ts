import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import LegalNoticeView from '@/views/LegalNoticeView.vue'

describe('LegalNoticeView', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(LegalNoticeView)
  })

  it('renders the main heading', () => {
    expect(wrapper.text()).toContain('Impressum')
  })

  it('renders the contact email address', () => {
    expect(wrapper.text()).toContain('info@remsfal.de')
  })

  it('renders the contact phone number', () => {
    expect(wrapper.text()).toContain('+49 30 5019-2346')
  })
})
