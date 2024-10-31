import { Avatar } from '@vkontakte/vkui';
import type { FC } from 'react';
import { useComletedTestStore } from '../store';

const Profile: FC = () => {
    const completedTestCount = useComletedTestStore((state) => state.count);

    return (
        <section className="flex h-[150px] items-center ml-9">
            <Avatar
                size={96}
                src="https://sun9-60.userapi.com/impg/_BA5Hhp-jsOglYIO_AKf96_NVPjdZY5GKF6LkQ/MBN1Y6UTGUY.jpg?size=1620x2160&quality=95&sign=cf19c0ed1088ddf8b73e5023866d5ecf&type=album"
            />
            <span className="flex flex-col ml-[14px]">
                <h2 className="text-5 text-white font-medium">Константин Лебедев</h2>
                <p className="text-[14px] text-[#C0C0C0] font-light">
                    Пройдено тестов: {completedTestCount}
                </p>
            </span>
        </section>
    );
};

export { Profile };
