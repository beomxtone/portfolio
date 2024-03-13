import { atom } from 'recoil';

export const pageIndexState = atom<number>({
  key: 'pageIndexState',
  default: 0,
});

export const contentIndexState = atom<number>({
  key: 'contentIndexState',
  default: 0,
});
