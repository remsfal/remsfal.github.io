import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import router from '../src/router/index.ts' // adjust the path if needed

describe('Router', () => {
  beforeEach(() => {
    // Mock window.location with writable, configurable, enumerable props
    delete (window as any).location
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      enumerable: true,
      value: {
        href: '',
        assign: vi.fn((url: string) => {
          window.location.href = url
        }),
        replace: vi.fn(),
      },
    })

    // Mock import.meta.env.VITE_DOCS_URL properly
    Object.defineProperty(import.meta.env, 'VITE_DOCS_URL', {
      value: 'https://example.com/docs',
      writable: true,
      configurable: true,
      enumerable: true,
    })
  })

  it('redirects /documentation to external docs URL', async () => {
    await router.push('/documentation')
    expect(window.location.href).toBe('https://example.com/docs')
  })

  it('navigates to home', async () => {
    await router.push('/')
    expect(router.currentRoute.value.fullPath).toBe('/')
  })

  it('navigates to /research', async () => {
    await router.push('/research')
    expect(router.currentRoute.value.fullPath).toBe('/research')
  })
})
