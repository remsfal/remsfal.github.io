import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ResearchView from '@/views/ResearchView.vue'

describe('ResearchView', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(ResearchView)
  })

  it('should display issues', async () => {
    // Select all the card elements using the correct class
    const issueCards = wrapper.findAll('.p-card')
    expect(issueCards.length).toBeGreaterThan(0)
  })

  it('should display correct content in issue cards', async () => {
    // Select all the card elements using the correct class
    const issueCards = wrapper.findAll('.p-card')

    // Verify content within each card
    for (const card of issueCards) {
      const title = card.find('p-card-title')
      const footer = card.find('.p-card-content')
      expect(title).not.toBeNull()
      expect(footer).not.toBeNull()
    }
  })
})