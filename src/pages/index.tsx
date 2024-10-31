import type { FC } from 'react';
import { Home, University } from './components';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Panel, View } from '@vkontakte/vkui';
import { AppRouteConfig, VIEW_NAME } from './config';

const Router: FC = () => {
    const { panel: activePanel } = useActiveVkuiLocation();

    return (
        <View id={VIEW_NAME} activePanel={activePanel || AppRouteConfig.HOME}>
            <Panel nav={AppRouteConfig.HOME}>
                <Home />
            </Panel>
            <Panel nav={AppRouteConfig.TEST} />
            <Panel nav={AppRouteConfig.UNIVERSITY}>
                <University />
            </Panel>
        </View>
    );
};

export default Router;
