import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'persistAtom',
});

export const darkThemeState = atom<boolean>({
  key: 'theme',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
