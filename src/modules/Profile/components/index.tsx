import { Avatar } from '@vkontakte/vkui';
import { type FC } from 'react';
import { useComletedTestStore, useUserStore } from '../store';

const Profile: FC = () => {
    const completedTestCount = useComletedTestStore((state) => state.count);

    const profile = useUserStore((state) => state.profile);

    return (
        <section className="flex h-[150px] items-center pl-9 bg-[#19191a]">
            <Avatar size={96} src={profile?.img} />
            <span className="flex flex-col ml-[14px]">
                <h2 className="text-5 text-white font-medium">{profile?.name}</h2>
                <p className="text-[14px] text-[#C0C0C0] font-light">
                    Пройдено тестов: {completedTestCount}
                </p>
            </span>
        </section>
    );
};

export { Profile };
