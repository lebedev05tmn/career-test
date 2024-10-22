import { ButtonGroup } from "@vkontakte/vkui";
import { FC } from "react";
import Button from "../../ui/Button";

const SubHeader: FC = () => {
    return (
        <ButtonGroup className="w-full flex bg-[#444444] pt-[3px] pb-[3px] pl-[5px] pr-[5px] h-[8.5vw] max-h-14 min-h-10">
            <Button className="w-full h-full">Тесты</Button>
            <Button className="w-full h-full">Университеты</Button>
        </ButtonGroup>
    );
};

export default SubHeader;
