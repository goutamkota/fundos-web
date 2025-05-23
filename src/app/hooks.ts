import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// In hooks.ts
export const useAppStateEffect = <Selected>(
  selector: (state: RootState) => Selected,
  action: () => ThunkAction<void, RootState, unknown, Action>
): Selected => {
  const dispatch = useDispatch<AppDispatch>();
  const selected = useSelector(selector);

  useEffect(() => {
    if (action) {
      dispatch(action());
    }
  }, [dispatch, action]);

  return selected;
};
