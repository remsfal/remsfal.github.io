import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest' 
import ResearchView from '@/views/ResearchView.vue'
import ThesisCard from '@/components/ThesisCard.vue'


vi.mock('@/services/GitHubService.ts', async () => {
  const actual = await vi.importActual('@/services/GitHubService.ts')
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
        state: 'closed',
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
    await new Promise(resolve => setTimeout(resolve, 10))
  })

  it('should display issues', () => {
    const cards = wrapper.findAllComponents(ThesisCard)
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should render markdown content correctly', () => {
    const cardHtml = wrapper.find('.prose').html()
    expect(cardHtml).toContain('<strong>Bold text</strong>')
    expect(cardHtml).toContain('<em>italic</em>')
  })

  it('should display label badges', () => {
    const labels = wrapper.findAll('[style*="background-color"]')
    expect(labels.length).toBeGreaterThan(0)
    expect(labels[0]!.text()).toBe('bug')
  })

  it('should filter issues based on status', async () => {
    const select = wrapper.findComponent({name: 'Select'})
    await select.vm.$emit('update:modelValue', 'closed')
    await new Promise(resolve => setTimeout(resolve, 10))

    const cards = wrapper.findAllComponents(ThesisCard)
    expect(cards.length).toBe(1)
    expect(cards[0]!.text()).toContain('Second issue')
  })

  it('should filter issues based on search query', async () => {
    const input = wrapper.find('input[placeholder="Suchen Sie nach Projekten..."]')
    await input.setValue('first')
    await new Promise(resolve => setTimeout(resolve, 10))

    const cards = wrapper.findAllComponents(ThesisCard)
    expect(cards.length).toBe(1)
    expect(cards[0]!.text()).toContain('First issue')
  })

  it('should display assignee info when present', async () => {
    const assigneeIssue = {
      id: 3,
      title: 'Assigned issue',
      body: 'Test body',
      state: 'open',
      labels: [],
      html_url: 'https://github.com/example/issue3',
      assignee: {
        login: 'testuser',
        avatar_url: 'https://example.com/avatar.png'
      }
    }

    const fetchIssues = (await import('@/services/GitHubService.ts')).default as ReturnType<typeof vi.fn> 
    fetchIssues.mockResolvedValueOnce([assigneeIssue])

    const wrapper = mount(ResearchView)
    await new Promise(resolve => setTimeout(resolve, 10))

    const card = wrapper.findComponent(ThesisCard)
    const assigneeWrapper = card.find('.items-center.gap-2')

    expect(assigneeWrapper.exists()).toBe(true)

    const avatar = assigneeWrapper.find('img')
    expect(avatar.attributes('src')).toBe('https://example.com/avatar.png')

    const username = assigneeWrapper.find('span')
    expect(username.text()).toBe('@testuser')
  })

  it('should open correct link for details', () => {
    const link = wrapper.find('a[href="https://github.com/example/issue1"]')
    expect(link.exists()).toBe(true)
  })

  it('should show correct status badge text and color', () => {
    const cards = wrapper.findAllComponents(ThesisCard)
    const statuses = cards.map(card => card.find('span').text())
    expect(statuses).toContain('Offen')
    expect(statuses).toContain('Abgeschlossen')
  })

  it('should log an error when fetchIssues fails', async () => {
    const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const fetchIssues = (await import('@/services/GitHubService.ts')).default as ReturnType<typeof vi.fn> 
    fetchIssues.mockRejectedValueOnce(new Error('Network error'))

    mount(ResearchView)
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockConsoleError).toHaveBeenCalledWith('Failed to fetch issues:', expect.any(Error))

    mockConsoleError.mockRestore()
  })

  it('should show no issues for unmatched search query', async () => {
    const input = wrapper.find('input[placeholder="Suchen Sie nach Projekten..."]')
    await input.setValue('nonexistent')
    await new Promise(resolve => setTimeout(resolve, 10))

    const cards = wrapper.findAllComponents(ThesisCard)
    expect(cards.length).toBe(0)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})