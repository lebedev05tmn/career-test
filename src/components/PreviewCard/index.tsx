import type { FC } from 'react';
import type { TPreviewCard } from './types';
import { Avatar, Card } from '@vkontakte/vkui';
import Button from '../../ui/Button';

const PreviewCard: FC<TPreviewCard> = ({ title, description, image, action, buttonTitle }) => {
    return (
        <Card className="w-full flex flex-col items-center pb-10">
            <h2 className="pt-5 pb-5">{title}</h2>
            <div className="flex items-center flex-col w-[calc(100%-26px)] rounded-[15px] bg-[#363738]">
                <Avatar className="mt-[47px] mb-[42px]" size={96} src={image} />
                <h2
                    className={'w-[calc(100%-40px)] text-center whitespace-nowrap mb-20 text-white'}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <Button
                    onClick={action}
                    active={null}
                    className="mb-10 h-[60px] w-[calc(100%-40px)]">
                    {buttonTitle}
                </Button>
            </div>
        </Card>
    );
};

export default PreviewCard;
