import { COMPLETED_AGE_FLAG_NAME } from './../config';
import { create } from 'zustand';
import type { TCompletedAgeActions, TCompletedAgeState } from './types';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

export const useCompletedTestStore = create<TCompletedAgeActions & TCompletedAgeState>()(
    persist(
        immer((set) => ({
            flag: false,
            completeAction: () =>
                set((state) => {
                    state.flag = true;
                }),
        })),
        { name: COMPLETED_AGE_FLAG_NAME },
    ),
);
