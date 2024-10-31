import type { FC, PropsWithChildren } from 'react';
import SubHeader from '../../../components/SubHeader';
import Profile from '../../../modules/Profile';
import Header from '../../../components/Header';
import { Group } from '@vkontakte/vkui';

type TLayout = {
    title: string;
};

const Layout: FC<PropsWithChildren<TLayout>> = ({ title, children }) => {
    return (
        <div className="flex flex-col">
            <Header title={title} />
            <Profile />
            <Group header={<SubHeader />} className="bg-[#363738] h-full">
                {children}
            </Group>
        </div>
    );
};

export { Layout };
