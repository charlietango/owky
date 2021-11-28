import {
  TypedUseSelectorHook,
  useDispatch as __useDispatch,
  useSelector as __useSelector,
} from 'react-redux';

import type { RootState, AppDispatch } from '@store/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatch = () => __useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = __useSelector;
