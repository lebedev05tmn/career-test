import { ButtonGroup } from '@vkontakte/vkui';
import type { FC } from 'react';
import Button from '../../ui/Button';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppRouteConfig, AppRoutePath } from '../../pages/config';

const SubHeader: FC = () => {
    const { panel: activePanel } = useActiveVkuiLocation();
    const navigator = useRouteNavigator();

    return (
        <ButtonGroup className="w-full flex bg-[#444444] pt-[3px] pb-[3px] pl-[5px] pr-[5px] h-[8.5vw] max-h-14 min-h-10">
            <Button
                active={activePanel === AppRouteConfig.HOME}
                onClick={() => navigator.push(AppRoutePath[AppRouteConfig.HOME])}
                className="w-full h-full">
                Тесты
            </Button>
            <Button
                active={activePanel === AppRouteConfig.UNIVERSITY}
                onClick={() => navigator.push(AppRoutePath[AppRouteConfig.UNIVERSITY])}
                className="w-full h-full">
                Университеты
            </Button>
        </ButtonGroup>
    );
};

export default SubHeader;
