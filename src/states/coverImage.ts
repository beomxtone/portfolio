import { atom } from 'recoil';

export const isScrollState = atom<boolean>({
  key: 'isScroll',
  default: false,
});
