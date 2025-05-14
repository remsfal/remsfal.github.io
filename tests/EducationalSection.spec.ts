import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'
import EducationalSection from '@/components/EducationalSection.vue'

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe('EducationalSection', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(EducationalSection)
  })

  it('should display the main heading', () => {
    const heading = wrapper.find('h2.education-title')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('REMSFAL in Forschung und Lehre')
  })

  it('should render exactly 6 educational benefit cards', () => {
    const cards = wrapper.findAll('[data-testid="educational-card"]')
    expect(cards.length).toBe(6)
  })
})
