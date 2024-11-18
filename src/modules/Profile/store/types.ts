export type TCompletedTestState = {
    count: number;
};

export type TCompletedTestActions = {
    incrementCounter: () => void;
};

type TUserProfile = {
    name: string;
    sex: string;
    age: number | string;
    img: string;
};

export type TUserState = {
    profile: TUserProfile | null;
};

export type TUserActions = {
    setProfile: (profile: TUserProfile) => void;
};
