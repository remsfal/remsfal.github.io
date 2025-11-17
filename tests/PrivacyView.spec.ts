import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import PrivacyView from '../src/views/PrivacyView.vue'


describe('PrivacyView', () => {

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(PrivacyView)
  })

  it('should render the title', () => {
    const title = wrapper.findComponent({ name: 'TitleWidget' })
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Datenschutz')
  })

  it('should render all the links', () => {
    const links = wrapper.findAll('a')
    expect(links.length).toBe(5)
    expect(links[0]!.attributes('href')).toBe('https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html')
    expect(links[1]!.attributes('href')).toBe('https://opr.vc/docs/allgemein/dse_einleitung/')
    expect(links[2]!.attributes('href')).toBe('https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages')
    expect(links[3]!.attributes('href')).toBe('https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors')
    expect(links[4]!.attributes('href')).toBe('https://opr.vc/docs/hosting/github_pages/')
  })

})