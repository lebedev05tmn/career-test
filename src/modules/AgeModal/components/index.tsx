import { Button, ModalCard, ModalRoot, Paragraph } from '@vkontakte/vkui';
import type { Dispatch, FC, SetStateAction } from 'react';

interface IAgeModal {
    activeModal: string | null;
    setActiveModal: Dispatch<SetStateAction<string | null>>;
}

const AgeModal: FC<IAgeModal> = ({ activeModal, setActiveModal }) => {
    return (
        <ModalRoot activeModal={activeModal}>
            <ModalCard nav="home" dismissButtonMode="inside">
                <div className="flex flex-col items-center gap-4">
                    <img src="profile.png" className="w-10 h-10" />
                    <span className="flex flex-col items-center gap-2">
                        <Paragraph className="text-center">
                            Для пользователей старше 14 лет
                        </Paragraph>
                        <Paragraph className="text-[#6D7885] text-center">
                            Пользуясь приложением, вы даете разрешение на обработку персональных
                            данных.
                        </Paragraph>
                    </span>
                    <div className="mt-8 w-full flex gap-3">
                        <Button className="w-full h-9" mode="secondary">
                            Запретить
                        </Button>
                        <Button
                            className="w-full h-9"
                            onClick={() => {
                                localStorage.setItem('modalFlag', 'false');
                                setActiveModal(null);

                            }}>
                            Продолжить
                        </Button>
                    </div>
                </div>
            </ModalCard>
        </ModalRoot>
    );
};

export default AgeModal;
