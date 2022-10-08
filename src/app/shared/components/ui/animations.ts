import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  state('initial', style({ height: '0', opacity: '0', overflow: 'hidden', visibility: 'hidden' })),
  state('final', style({ overflow: 'hidden' })),
  transition('initial <=> final', animate('200ms')),
]);
