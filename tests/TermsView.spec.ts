import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import TermsView from '../src/views/TermsView.vue'

describe('TermsView.vue', () => {
  it('prüft, ob der Link zur MIT-Lizenz funktioniert', () => {
    const { getByText } = render(TermsView)
    const link = getByText('The MIT License by Open Source Initiative')
    expect(link).toBeTruthy()
    expect(link.getAttribute('href')).toBe('https://opensource.org/licenses/MIT')
  })
})
describe('TermsView.vue', () => {
  it('zeigt den Titel "Nutzungsbedingungen" an', () => {
    const { getByText } = render(TermsView)
    expect(getByText('Nutzungsbedingungen')).toBeTruthy()
  })
})