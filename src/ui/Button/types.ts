import { HTMLAttributes } from "react";

export type IButton = {
    active?: boolean | null;
} & HTMLAttributes<HTMLButtonElement>;
