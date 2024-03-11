import { atom } from 'recoil';

export const musicIndexState = atom<number>({
  key: 'index',
  default: 0,
});
