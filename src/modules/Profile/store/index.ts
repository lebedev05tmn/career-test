import { COMPLETED_TEST_COUNT_NAME } from '../config';
import { create } from 'zustand';
import type { TCompletedTestActions, TCompletedTestState } from './types';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

export const useComletedTestStore = create<TCompletedTestState & TCompletedTestActions>()(
    persist(
        immer((set) => ({
            count: 0,
            incrementCounter: () =>
                set((state) => {
                    state.count++;
                }),
        })),
        { name: COMPLETED_TEST_COUNT_NAME },
    ),
);
