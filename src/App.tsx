import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitCol,
    SplitLayout,
} from '@vkontakte/vkui';
import type { FC } from 'react';
import Router from './pages';
import { RouterProvider } from './pages/components';

import '@vkontakte/vkui/dist/vkui.css';

const App: FC = () => {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout>
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
