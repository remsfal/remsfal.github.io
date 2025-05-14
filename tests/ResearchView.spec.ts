import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ResearchView from '@/views/ResearchView.vue'

// Mock fetchIssues to return dummy data
vi.mock('@/services/GitHubService.ts', async () => {
  const actual = await vi.importActual<any>('@/services/GitHubService.ts')
  return {
    ...actual,
    default: vi.fn(async () => [
      {
        id: 1,
        title: 'First issue',
        body: '**Bold text** with _italic_',
        state: 'open',
        labels: [{ id: 10, name: 'bug', color: 'f00' }],
        html_url: 'https://github.com/example/issue1'
      },
      {
        id: 2,
        title: 'Second issue',
        body: 'Simple issue description',
        state: 'completed',
        labels: [{ id: 11, name: 'enhancement', color: '0f0' }],
        html_url: 'https://github.com/example/issue2'
      }
    ])
  }
})

describe('ResearchView', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(ResearchView)
    // Wait for fetchIssues to complete
    await new Promise(resolve => setTimeout(resolve, 10))
  })

  

  it('should display issues', () => {
    const issueCards = wrapper.findAll('.issue-card')
    expect(issueCards.length).toBeGreaterThan(0)
  })

  it('should display correct content in issue cards', () => {
    const issueCards = wrapper.findAll('.issue-card')
    for (const card of issueCards) {
      const title = card.find('.issue-title')
      const description = card.find('.issue-description')
      const footer = card.find('.issue-footer')
      expect(title.exists()).toBe(true)
      expect(description.exists()).toBe(true)
      expect(footer.exists()).toBe(true)
    }
  })

  it('should render markdown content correctly', () => {
    const card = wrapper.find('.issue-card')
    const html = card.find('.issue-description').html()
    expect(html).toContain('<strong>Bold text</strong>')
    expect(html).toContain('<em>italic</em>')
  })

  it('should display label badges', () => {
    const labels = wrapper.findAll('.label')
    expect(labels.length).toBeGreaterThan(0)
    expect(labels[0].text()).toBe('bug')
  })

  it('should filter issues based on status', async () => {
    const select = wrapper.find('.filter-select')
    await select.setValue('completed')

    const issueCards = wrapper.findAll('.issue-card')
    expect(issueCards.length).toBe(1)
    expect(issueCards[0].text()).toContain('Second issue')
  })

  it('should filter issues based on search query', async () => {
    const input = wrapper.find('.search-input')
    await input.setValue('first')

    const issueCards = wrapper.findAll('.issue-card')
    expect(issueCards.length).toBe(1)
    expect(issueCards[0].text()).toContain('First issue')
  })

  it('should open correct link for details', () => {
    const link = wrapper.find('.details-link')
    expect(link.attributes('href')).toContain('https://github.com/example/issue')
  })

  it('should show correct status badge text and color', () => {
    const badges = wrapper.findAll('.status-badge')
    expect(badges[0].text()).toBe('Offen')
    expect(badges[1].text()).toBe('Abgeschlossen')
    expect(badges[0].attributes('style')).toContain('background-color')
  })

  it('should log an error when fetchIssues fails', async () => {
    const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
  
    // Override the mock to throw
    const errorMessage = 'Network error'
    const fetchIssues = (await import('@/services/GitHubService.ts')).default
    fetchIssues.mockRejectedValueOnce(new Error(errorMessage))
  
    // Remount component
    const wrapper = mount(ResearchView)
    await new Promise(resolve => setTimeout(resolve, 10))
  
    expect(mockConsoleError).toHaveBeenCalledWith('Failed to fetch issues:', expect.any(Error))
  
    mockConsoleError.mockRestore()
  })

  it('should show no issues for unmatched search query', async () => {
    const input = wrapper.find('.search-input')
    await input.setValue('nonexistent issue')
  
    const issueCards = wrapper.findAll('.issue-card')
    expect(issueCards.length).toBe(0)
  })
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  
  
})
