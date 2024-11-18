import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitCol,
    SplitLayout,
} from '@vkontakte/vkui';
import { useEffect, useState, type FC } from 'react';
import Router from './pages';
import { RouterProvider } from './pages/components';

import '@vkontakte/vkui/dist/vkui.css';
import AgeModal from './modules/AgeModal';
import { useUserStore } from './modules/Profile/store';
import bridge from '@vkontakte/vk-bridge';
import type { TUserState } from './modules/Profile/store/types';

const App: FC = () => {
    const setProfile = useUserStore((state) => state.setProfile);

    const calculateAge = (bDate?: string): string | number => {
        if (!bDate) {
            return 'null';
        }

        const parts = bDate.split('.');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parts.length === 3 ? parseInt(parts[2], 10) : null;

        if (year === null) {
            return 'null';
        }

        const birthDate = new Date(year, month - 1, day);

        const currentDate = new Date();

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    };

    useEffect(() => {
        bridge
            .send('VKWebAppGetUserInfo')
            .then((data) => {
                const user: TUserState['profile'] = {
                    name: `${data.first_name} ${data.last_name}`,
                    sex: data.sex === 1 ? 'female' : 'male',
                    age: calculateAge(data.bdate),
                    img: data.photo_200,
                };

                setProfile(user);
            })
            .catch((error) => {
                console.error('Ошибка получения данных:', error);
            });
    }, [setProfile]);

    const [activeModal, setActiveModal] = useState<string | null>(
        localStorage.getItem('modalFlag') ? '' : 'home',
    );

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout modal={AgeModal({ activeModal, setActiveModal })}>
                        <SplitCol autoSpaced>
                            <RouterProvider>
                                <Router />
                            </RouterProvider>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
