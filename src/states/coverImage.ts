import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: `persistAtom`,
});

export const isScrollState = atom<boolean>({
  key: 'isScroll',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
