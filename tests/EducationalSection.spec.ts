import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'
import EducationalSection from '@/components/EducationalSection.vue'


beforeAll(() => {
  global.IntersectionObserver = class {
    root: Element | null = null;
    rootMargin: string = '';
    thresholds: ReadonlyArray<number> = [];

    observe(_target: Element) {
      // intentionally left blank to mock functionality
    }

    unobserve(_target: Element) {
      // intentionally left blank to mock functionality
    }

    disconnect() {
      // no-op
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  };
});




describe('EducationalSection', () => {
  let wrapper: VueWrapper<any>

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
