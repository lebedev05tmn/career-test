import type { FC } from 'react';
import json from '../../../data/university.json';
import { Avatar } from '@vkontakte/vkui';

const tableHeadNames = ['№', 'Название университета', 'Средний балл<br /> 2023'];

const Table: FC = () => {
    return (
        <table className="ml-auto mr-auto border-[#444444] border-2 border-collapse max-w-[80vw]">
            <thead>
                <tr>
                    {tableHeadNames.map((item) => (
                        <th
                            className="border-[#444444] border-2 h-[66px] min-w-9 text-center text-lg font-bold pl-2 pr-2"
                            key={item}
                            dangerouslySetInnerHTML={{ __html: item }}
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {json.list.map((item) => (
                    <tr key={item.id} className="border-[#444444] border-2">
                        <td className="border-[#444444] border-2 min-h-12 text-center text-xl font-bold">
                            {item.id}
                        </td>
                        <td className="flex items-center min-h-12 pl-[10px]">
                            <Avatar size={40} src={`uni/${item.id}.png`} className="mr-2" />
                            <a
                                target="_blank"
                                href={item.website}
                                className="text-blue-500 hover:underline ml-2">
                                {item.name}
                            </a>
                        </td>
                        <td className="border-[#444444] border-2 min-h-12 text-center">
                            <span className="text-xl font-bold">{item.gpa * 3}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
