import { createHashRouter } from "@vkontakte/vk-mini-apps-router";

export const VIEW_NAME = "default_view";

export enum AppRouteConfig {
    HOME = "home",
    TEST = "test",
    UNIVERSITY = "university",
}

const router = createHashRouter([
    {
        path: "/",
        panel: AppRouteConfig.HOME,
        view: VIEW_NAME,
    },
    {
        path: "/test/:id",
        panel: AppRouteConfig.TEST,
        view: VIEW_NAME,
    },
    {
        path: "/university",
        panel: AppRouteConfig.UNIVERSITY,
        view: VIEW_NAME,
    },
]);

export default router;
