import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitCol,
    SplitLayout,
} from "@vkontakte/vkui";
import { FC } from "react";
import "@vkontakte/vkui/dist/vkui.css";
import Router from "./pages";
import { RouterProvider } from "./pages/components";

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
