import { createHashRouter } from '@vkontakte/vk-mini-apps-router';

export const VIEW_NAME = 'default_view';

export enum AppRouteConfig {
    HOME = 'home',
    TEST = 'test',
    UNIVERSITY = 'university',
}

export const AppRoutePath = {
    [AppRouteConfig.HOME]: '/',
    [AppRouteConfig.TEST]: '/test/:id',
    [AppRouteConfig.UNIVERSITY]: '/university',
};

const router = createHashRouter([
    {
        path: AppRoutePath[AppRouteConfig.HOME],
        panel: AppRouteConfig.HOME,
        view: VIEW_NAME,
    },
    {
        path: AppRoutePath[AppRouteConfig.TEST],
        panel: AppRouteConfig.TEST,
        view: VIEW_NAME,
    },
    {
        path: AppRoutePath[AppRouteConfig.UNIVERSITY],
        panel: AppRouteConfig.UNIVERSITY,
        view: VIEW_NAME,
    },
]);

export default router;
