import { atom } from 'recoil';

export const introduceIndexStore = atom<number>({
  key: 'introduceIndexState',
  default: 0,
});
