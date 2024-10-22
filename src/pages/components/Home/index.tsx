import { Header, Group } from "@vkontakte/vkui";
import { FC } from "react";
import SubHeader from "../../../components/SubHeader";
import Profile from "../../../modules/Profile";
import TestPreview from "../../../modules/TestPreview/components";

const Home: FC = () => {
    return (
        <div className="flex flex-col">
            <Header title="Профориентация" />
            <Profile />
            <Group header={<SubHeader />} className="bg-[#363738] h-full">
                <TestPreview />
            </Group>
        </div>
    );
};

export { Home };
