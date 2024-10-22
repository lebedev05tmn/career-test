import { Avatar } from "@vkontakte/vkui";
import { FC } from "react";
import { useComletedTestStore } from "../helpers";

const Profile: FC = () => {
    const completedTestCount = useComletedTestStore(state => state.count);

    return (
        <section className="flex h-[150px] items-center ml-9">
            <Avatar
                size={96}
                src="https://habrastorage.org/getpro/habr/upload_files/9a9/a21/88e/9a9a2188e1328f3d20acff4ddcf2a562.jpeg"
            />
            <span className="flex flex-col ml-[14px]">
                <h2 className="text-5 text-white font-medium">Иван Иванов</h2>
                <p className="text-[14px] text-[#C0C0C0] font-light">
                    Пройдено тестов: {completedTestCount}
                </p>
            </span>
        </section>
    );
};

export { Profile };
