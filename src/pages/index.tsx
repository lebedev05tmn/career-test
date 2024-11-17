import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Panel, View } from '@vkontakte/vkui';
import type { FC } from 'react';
import { Home, University } from './components';
import { AppRouteConfig, VIEW_NAME } from './config';
import Test from './components/Test';

const Router: FC = () => {
    const { panel: activePanel } = useActiveVkuiLocation();

    return (
        <View id={VIEW_NAME} activePanel={activePanel || AppRouteConfig.HOME}>
            <Panel nav={AppRouteConfig.HOME}>
                <Home />
            </Panel>
            <Panel nav={AppRouteConfig.TEST}>
                <Test />
            </Panel>
            <Panel nav={AppRouteConfig.UNIVERSITY}>
                <University />
            </Panel>
        </View>
    );
};

export default Router;
