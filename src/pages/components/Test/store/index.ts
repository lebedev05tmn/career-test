import { create } from 'zustand';
import type {
    IDataTestActions,
    IDataTestState,
    ITestState,
    ITestActions,
    ITestQuestion,
} from './types';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { TESTS_NAME } from '../config';

export const useDataTestStore = create<IDataTestState & IDataTestActions>()(
    immer((set) => ({
        data: {},
        getData: async (id: string) => {
            try {
                const json = await import(`../../../../../data/${id}.json`);
                set((state) => {
                    state.data[id] = json.default;
                });
            } catch (error) {
                console.error(`Error loading data for id ${id}:`, error);
            }
        },
    })),
);

export const useTestStore = create<ITestState & ITestActions>()(
    persist(
        immer((set) => ({
            questions: {},
            completeQuestion: (id: string, question: ITestQuestion, selectedKey: number) => {
                set((state) => {
                    if (!state.questions[id]) {
                        state.questions[id] = [];
                    }
                    if (question?.key || question.variants[0]?.key) {
                        state.questions[id].push(selectedKey);
                    }
                });
            },
        })),
        { name: TESTS_NAME },
    ),
);
