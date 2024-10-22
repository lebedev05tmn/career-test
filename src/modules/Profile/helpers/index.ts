import { COMPLETED_TEST_COUNT_NAME } from "../config";
import { create } from "zustand";
import { TCompedTestActions, TCompletedTestState } from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useComletedTestStore = create<
    TCompletedTestState & TCompedTestActions
>()(
    persist(
        immer(set => ({
            count: 0,
            incrementCounter: () =>
                set(state => {
                    state.count++;
                }),
        })),
        { name: COMPLETED_TEST_COUNT_NAME }
    )
);
