import { Button as VKButton } from "@vkontakte/vkui";
import type { FC, PropsWithChildren } from "react";
import type { IButton } from "./types";

const Button: FC<PropsWithChildren<IButton>> = ({
    active,
    children,
    ...props
}) => {
    return (
        <VKButton
            {...props}
            style={{
                ...(active !== null && {
                    backgroundColor: active ? "#363738" : "#232324",
                    color: "white",
                }),
                ...props.style,
            }}
            className={`hover:opacity-70 ${props.className}`}>
            {children}
        </VKButton>
    );
};

export default Button;
