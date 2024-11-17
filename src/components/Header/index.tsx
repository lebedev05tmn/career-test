import { PanelHeader } from '@vkontakte/vkui';
import type { FC } from 'react';
import type { THeader } from './types';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const Header: FC<THeader> = ({ title }) => {
    const navigator = useRouteNavigator();

    return (
        <PanelHeader>
            <header className="flex w-full relative">
                <img className="w-20 h-8" src="logo.png" onClick={() => navigator.push('/')} />
                {title && (
                    <h2 className="sm:block hidden absolute left-1/2 -translate-x-1/2 color-[#C0C0C0] font-extrabold text-[25px] leading-none">
                        {title}
                    </h2>
                )}
            </header>
        </PanelHeader>
    );
};

export default Header;
