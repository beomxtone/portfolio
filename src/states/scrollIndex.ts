import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: `persistAtom`,
});

export const scrollIndexState = atom<number>({
  key: 'scrollIndex',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
