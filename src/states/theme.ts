import { atom } from 'recoil';

export const darkThemeState = atom<boolean>({
  key: 'theme',
  default: false,
});
