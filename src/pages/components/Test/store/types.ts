export interface ITestVariant {
    title: string;
    key?: number;
}

export interface ITestQuestion {
    id: number;
    title: string;
    key?: number;
    variants: ITestVariant[];
}

export interface ITestKey {
    key: number;
    name: string;
    fullname?: string;
    description?: string;
}

export interface ITest {
    questions: ITestQuestion[];
    keys: ITestKey[];
}

export interface IDataTestState {
    data: Record<string, ITest>;
}

export interface IDataTestActions {
    getData: (id: string) => Promise<void>;
}

export interface ITestState {
    questions: Record<string, number[]>;
}

export interface ITestActions {
    completeQuestion: (id: string, question: ITestQuestion, selectedKey: number) => void;
}
