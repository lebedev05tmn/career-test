import { FC } from "react";
import PreviewCard from "../../../components/PreviewCard";

const TestPreview: FC = () => {
    return (
        <div className="flex gap-[26px] pl-[22px] pr-[22px] pt-5 pb-5">
            <PreviewCard
                title="Тест Климова"
                image="clim.png"
                description="Популярный тест по
                <br />
                профориентации от
                <br /> психолога Е. А.
                Климова"
                action={() => console.log("hello")}
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
                action={() => console.log("hello")}
                buttonTitle="Пройти"
            />
        </div>
    );
};

export default TestPreview;
