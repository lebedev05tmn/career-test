import { RouterProvider as BrowserRouter } from "@vkontakte/vk-mini-apps-router";
import { FC, PropsWithChildren } from "react";
import router from "../../config";

const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
    return <BrowserRouter router={router}>{children}</BrowserRouter>;
};

export { RouterProvider };
