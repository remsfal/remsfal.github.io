import { config } from '@vue/test-utils';
import { vi } from 'vitest';
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // für ältere APIs
      removeListener: vi.fn(),
      addEventListener: vi.fn(), // moderne APIs
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  },
});

config.global.plugins = [
  PrimeVue
];

config.global.directives = {
  badge: BadgeDirective,
  ripple: Ripple,
  styleclass: StyleClass,
  tooltip: Tooltip
};