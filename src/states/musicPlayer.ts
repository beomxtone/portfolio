import { atom } from 'recoil';

export const pageIndexState = atom<number>({
  key: 'pageIndex',
  default: 0,
});

export const scrollIndexState = atom<number>({
  key: 'scrollIndex',
  default: 0,
});
