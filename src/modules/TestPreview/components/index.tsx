import type { FC } from 'react';
import PreviewCard from '../../../components/PreviewCard';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppRouteConfig } from '../../../pages/config';

const TestPreview: FC = () => {
    const navigator = useRouteNavigator();

    return (
        <div className="flex gap-[26px] pl-[22px] pr-[22px] pt-5 pb-5 flex-col md:flex-row">
            <PreviewCard
                title="Тест Климова"
                image="clim.png"
                description="Популярный тест по
                <br />
                профориентации от
                <br /> психолога Е. А.
                Климова"
                action={() => navigator.push(AppRouteConfig.TEST.split('/:id')[0] + '/klimov')}
                buttonTitle="Пройти"
            />
            <PreviewCard
                title="Тест Голомштока"
                image="golom.png"
                description="Методика ориентирована
                на
                <br /> профориентацию
                подростков-
                <br />
                старшеклассников"
                action={() => navigator.push(AppRouteConfig.TEST.split('/:id')[0] + '/golomshtok')}
                buttonTitle="Пройти"
            />
        </div>
    );
};

export default TestPreview;
